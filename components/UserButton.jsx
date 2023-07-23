'use client';

import { AvatarImage } from './ui/Avatar';
import {
  EllipsisHorizontalIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/solid';
import { signOut, useSession } from 'next-auth/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

function UserButton() {
  const { data: session } = useSession();
  return (
    <div className="mt-auto">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="flex items-center justify-center w-full h-10 gap-2 px-2 rounded-lg select-none hover:bg-zinc-800">
            <AvatarImage
              image={session?.user?.image}
              name={session?.user?.name}
            />
            <span className="hidden text-sm md:block">
              {session?.user?.name}
            </span>
            <EllipsisHorizontalIcon className="hidden w-6 h-6 ml-auto text-sm md:block" />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            side="top"
            align="start"
            sideOffset={8}
            className="p-2 rounded-lg bg-zinc-800 w-[185px]"
          >
            <DropdownMenu.Item asChild>
              <button
                onClick={() => signOut()}
                className="flex items-center w-full h-10 gap-2 px-4 text-sm rounded-lg hover:bg-red-500/20"
              >
                <ArrowLeftOnRectangleIcon className="w-6 h-6" />
                Sign out
              </button>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}

export { UserButton };
