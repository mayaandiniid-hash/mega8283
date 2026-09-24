import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const user = db.getUserProfile();
    const rewards = db.getRewardProfile();
    return NextResponse.json({
      user,
      rewards,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch user profile', details: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const updated = db.updateUserProfile(body);
    return NextResponse.json({ success: true, user: updated });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update user profile', details: (error as Error).message },
      { status: 500 }
    );
  }
}
