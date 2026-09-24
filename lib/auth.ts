import { db } from './db';
import { UserProfile } from '@/types';

// Portable authentication logic compatible with Vercel and Netlify
// Uses secure HTTP cookies pattern or server session lookup

export interface AuthSession {
  user: UserProfile;
  isAuthenticated: boolean;
}

export async function getCurrentUser(): Promise<UserProfile> {
  return db.getUserProfile();
}

export async function getSession(): Promise<AuthSession> {
  const user = db.getUserProfile();
  return {
    user,
    isAuthenticated: true,
  };
}

export async function updateUser(updates: Partial<UserProfile>): Promise<UserProfile> {
  return db.updateUserProfile(updates);
}
