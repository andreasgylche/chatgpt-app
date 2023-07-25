'use client';

import { db } from '@/lib/firebase';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import * as Form from '@radix-ui/react-form';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';

function ChatInput({ chatId }) {
  const { data: session } = useSession();

  // TODO: add useSWR to get model
  const model = 'text-davinci-003';

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const prompt = formData.get('prompt').trim();

    if (!prompt) return;

    const message = {
      text: prompt,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email,
        name: session?.user?.name,
        avatar: session?.user?.image,
      },
    };

    await addDoc(
      collection(
        db,
        'users',
        session?.user?.email,
        'chats',
        chatId,
        'messages'
      ),
      message
    );

    const notification = toast.loading('Thinking...');

    console.log('from handleSubmit', prompt, model, chatId, session);

    await fetch('/api/conversation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        model,
        chatId,
        session,
      }),
    }).then(() => {
      e.target.reset();
      toast.success('Sending answer...', { id: notification });
    });
  }

  return (
    <div className="grid w-full h-24 px-8 mt-auto border-t border-zinc-800 place-items-center">
      <Form.Root
        onSubmit={handleSubmit}
        className="flex items-center justify-between w-full gap-2 2xl:max-w-4xl"
      >
        <Form.Field className="flex-1">
          <Form.Control asChild>
            <textarea
              name="prompt"
              type="text"
              className="w-full h-6 p-0 m-0 bg-transparent border-0 outline-none resize-none scrollbar-none placeholder:text-zinc-500"
              placeholder="Ask me anything..."
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button
            type="submit"
            className="p-4 transition-colors border rounded-lg border-zinc-800 hover:bg-zinc-800"
          >
            <PaperAirplaneIcon className="w-5 h-5 -rotate-45" />
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}

export { ChatInput };
