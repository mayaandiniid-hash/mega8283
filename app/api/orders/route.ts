import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/db';
import { createNewOrder } from '@/lib/orders';
import { PaymentMethod } from '@/types';

const CreateOrderSchema = z.object({
  productId: z.string().min(1, 'Product ID is required'),
  duration: z.string().default('1 Month'),
  customerName: z.string().min(2, 'Nama minimal 2 karakter'),
  customerWhatsApp: z.string().min(8, 'Nomor WhatsApp minimal 8 digit'),
  customerEmail: z.string().email('Format email tidak valid'),
  paymentMethod: z.enum([
    'QRIS',
    'BCA Virtual Account',
    'Mandiri Virtual Account',
    'BRI Virtual Account',
    'GoPay',
    'OVO',
    'DANA',
    'ShopeePay',
  ]),
  usePoints: z.boolean().optional(),
});

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (id) {
      const order = db.getOrderById(id);
      if (!order) {
        return NextResponse.json({ error: 'Pesanan tidak ditemukan' }, { status: 404 });
      }
      return NextResponse.json({ data: order });
    }

    const orders = db.getOrders();
    return NextResponse.json({ data: orders });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to retrieve orders', details: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = CreateOrderSchema.parse(body);

    const result = await createNewOrder({
      productId: validated.productId,
      duration: validated.duration,
      customerName: validated.customerName,
      customerWhatsApp: validated.customerWhatsApp,
      customerEmail: validated.customerEmail,
      paymentMethod: validated.paymentMethod as PaymentMethod,
      usePoints: validated.usePoints,
    });

    if (!result.success || !result.order) {
      return NextResponse.json({ error: result.error || 'Gagal memproses pesanan' }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: result.order }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validasi form gagal', issues: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { orderId, status } = body;

    if (!orderId || !status) {
      return NextResponse.json({ error: 'orderId and status are required' }, { status: 400 });
    }

    const updated = db.updateOrderStatus(orderId, status);
    if (!updated) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update order', details: (error as Error).message },
      { status: 500 }
    );
  }
}
