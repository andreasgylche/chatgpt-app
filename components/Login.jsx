'use client';

import { Icons } from '@/components/Icons';
import { signIn } from 'next-auth/react';

function Login() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-8 px-2">
      <Icons.logo />
      <h1 className="text-center opacity-80">
        Join the conversation. Sign in to ChatGPT.
      </h1>
      <button
        onClick={() => signIn('google')}
        className="flex items-center h-10 gap-2 px-4 transition-colors border rounded-lg w-fit border-zinc-800 hover:border-violet-500"
      >
        <Icons.google width={16} height={16} />
        <span>Continue with Google</span>
      </button>
    </div>
  );
}

export { Login };
