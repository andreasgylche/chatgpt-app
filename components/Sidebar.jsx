import { NewChat } from '@/components/NewChat';
import { UserButton } from '@/components/UserButton';
import { Chats } from '@/components/Chats';

function Sidebar() {
  return (
    <aside className="flex flex-col h-screen p-4 overflow-y-auto border-r border-zinc-800 md:w-64">
      <NewChat />
      {/* Chat model select */}
      <Chats />
      <UserButton />
    </aside>
  );
}

export { Sidebar };
