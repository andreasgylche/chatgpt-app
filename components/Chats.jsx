'use client';

import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { ChatRow } from '@/components/ChatRow';

function Chats() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, 'users', session?.user?.email, 'chats'),
        orderBy('createdAt', 'asc')
      )
  );

  return (
    <div className="flex flex-col gap-1 mt-2">
      {chats?.docs.map((chat) => (
        <ChatRow key={chat.id} id={chat.id} />
      ))}
    </div>
  );
}

export { Chats };
