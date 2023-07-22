import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 px-2">
      <ChatBubbleLeftRightIcon className="w-12 h-12 text-violet-500" />
      <h1 className="text-4xl font-medium">ChatGPT</h1>
      <p className="max-w-sm text-center opacity-80">
        Unlock a world of knowledge and conversation with ChatGPT, where AI
        meets human-like interaction. Ask away, and let's chat!
      </p>
    </div>
  );
}
