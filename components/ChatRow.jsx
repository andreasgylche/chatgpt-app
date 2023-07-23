'use client';

import { db } from '@/lib/firebase';
import { TrashIcon } from '@heroicons/react/24/outline';
import { collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';

function ChatRow({ id }) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  const [active, setActive] = useState(false);

  const [messages] = useCollection(
    collection(db, 'users', session?.user?.email, 'chats', id, 'messages')
  );

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [pathname]);

  async function deleteChat() {
    await deleteDoc(doc(db, 'users', session?.user?.email, 'chats', id));

    if (pathname.includes(id)) router.replace('/');
  }

  return (
    <Link
      href={`/chat/${id}`}
      className={`p-2 hover:bg-zinc-800 transition-colors flex items-center justify-between rounded-lg ${
        active && 'bg-zinc-800'
      }`}
    >
      <span className="text-sm truncate">
        {messages?.docs[messages?.docs.length - 1]?.data().text || 'New Chat'}
      </span>
      <TrashIcon
        onClick={deleteChat}
        className={`w-4 h-4 transition-colors hover:text-red-500 ${
          active && `block`
        }`}
      />
    </Link>
  );
}

export { ChatRow };
