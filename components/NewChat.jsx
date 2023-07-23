'use client';

import { db } from '@/lib/firebase';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/solid';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, 'users', session?.user?.email, 'chats'),
      { userId: session?.user?.email, createdAt: serverTimestamp() }
    );

    router.push(`/chat/${doc.id}`);
  };

  return (
    <button
      onClick={createNewChat}
      className="flex items-center w-full h-10 gap-2 px-4 transition-colors border rounded-lg border-zinc-800 hover:border-violet-500"
    >
      <ChatBubbleLeftIcon className="w-6 h-6 md:w-4 md:h-4" />
      <span className="hidden text-sm md:block">New Chat</span>
    </button>
  );
}

export { NewChat };
