import { ChatBubbleLeftIcon } from '@heroicons/react/24/solid';

function NewChat() {
  return (
    <button className="flex items-center w-full h-10 gap-2 px-4 transition-colors border rounded-lg border-zinc-800 hover:border-violet-500">
      <ChatBubbleLeftIcon className="w-6 h-6 md:w-4 md:h-4" />
      <span className="hidden text-sm md:block">New Chat</span>
    </button>
  );
}

export { NewChat };
