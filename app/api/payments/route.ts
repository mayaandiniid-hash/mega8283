import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { orderId, simulateSuccess } = body;

    if (!orderId) {
      return NextResponse.json({ error: 'orderId is required' }, { status: 400 });
    }

    const order = db.getOrderById(orderId);
    if (!order) {
      return NextResponse.json({ error: 'Pesanan tidak ditemukan' }, { status: 404 });
    }

    // Simulate instant gateway verification
    if (simulateSuccess !== false) {
      const updated = db.updateOrderStatus(orderId, 'Paid');
      return NextResponse.json({
        success: true,
        message: 'Pembayaran berhasil dikonfirmasi',
        data: updated,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Status pembayaran dalam pengecekan',
      data: order,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Payment processing error', details: (error as Error).message },
      { status: 500 }
    );
  }
}
