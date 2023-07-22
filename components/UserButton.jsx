'use client';

import { AvatarImage } from './ui/Avatar';
import { useSession } from 'next-auth/react';

function UserButton() {
  const { data: session } = useSession();
  return (
    <button className="flex items-center gap-2 mt-auto">
      <AvatarImage image={session?.user?.image} name={session?.user?.name} />
      <span className="text-sm">{session?.user?.name}</span>
    </button>
  );
}

export { UserButton };
