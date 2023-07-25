import { adminDb } from '@/lib/firebaseAdmin';
import { query } from '@/lib/utils';
import admin from 'firebase-admin';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { prompt, model, chatId, session } = await request.json();

  if (!prompt) {
    return NextResponse.json({ error: 'Please provide a prompt to continue.' });
  }

  if (!chatId) {
    return NextResponse.json({ error: 'Please provide a chatId to continue.' });
  }

  if (!session) {
    return NextResponse.json({ error: 'Please sign in to continue' });
  }

  const res = await query(prompt, chatId, model);

  const message = {
    text: res || 'ChatGPT was unable to respond to your prompt.',
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'chatgpt',
      name: 'ChatGPT',
      avatar:
        'https://www.joeyoungblood.com/wp-content/uploads/2022/12/openai-chatgpt-logo.png',
    },
  };

  await adminDb
    .collection('users')
    .doc(session?.user?.email)
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .add(message);

  return NextResponse.json({ answer: message });
}
