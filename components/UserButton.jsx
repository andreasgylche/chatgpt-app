'use client';

import { AvatarImage } from './ui/Avatar';
import {
  EllipsisHorizontalIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/solid';
import { signOut, useSession } from 'next-auth/react';
import * as Dialog from '@radix-ui/react-dialog';
import { XMarkIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';
import { Icons } from '@/components/Icons';

function UserButton() {
  const { data: session } = useSession();
  return (
    <div className="mt-auto">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="flex items-center justify-center w-full h-10 gap-2 px-2 rounded-lg select-none hover:bg-zinc-800">
            <AvatarImage
              image={session?.user?.image}
              name={session?.user?.name}
            />
            <span className="hidden text-sm md:block">
              {session?.user?.name}
            </span>
            <ArrowUpRightIcon className="hidden w-4 h-4 ml-auto text-sm md:block" />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-zinc-950/70" />
          <Dialog.Content className="fixed min-w-[20rem] flex-col p-4 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-zinc-800 left-1/2 top-1/2 focus:outline-none">
            <div className="flex items-center justify-between">
              <Dialog.Title className="text-base font-medium">
                Hope to see you again
              </Dialog.Title>
              <Dialog.Close asChild>
                <button
                  className="items-center justify-center w-6 h-6 rounded-lg appearance-none text-violet11 hover:bg-violet-500 focus:shadow-violet7 focus:outline-none"
                  aria-label="Close"
                >
                  <XMarkIcon />
                </button>
              </Dialog.Close>
            </div>
            <div className="flex flex-col gap-4 mt-2">
              <Dialog.Description className="max-w-xs text-sm opacity-80">
                Consider leaving a star on GitHub if you find this useful!
              </Dialog.Description>
              <button className="flex items-center justify-center w-full h-10 gap-2 px-4 transition-colors border rounded-lg border-zinc-50 hover:border-violet-500">
                <Icons.github color="#fafafa" />
                <span>View source code</span>
              </button>
              <button
                onClick={() => signOut()}
                className="flex items-center justify-center w-full h-10 gap-2 px-4 transition-colors border rounded-lg border-zinc-50 hover:border-red-500"
              >
                <ArrowLeftOnRectangleIcon className="w-5 h-5" />
                <span>Sign out</span>
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export { UserButton };
