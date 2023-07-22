'use client';

import { NewChat } from './NewChat';
import { UserButton } from './UserButton';

function Sidebar() {
  return (
    <aside className="flex flex-col h-screen p-4 overflow-y-auto border-r border-zinc-800 md:w-64">
      <NewChat />
      {/* Chat model select */}
      {/* Current chats */}
      <UserButton />
    </aside>
  );
}

export { Sidebar };