import { NewChat } from './NewChat';

function Sidebar() {
  return (
    <aside className="h-screen p-4 overflow-y-auto border-r border-zinc-800 md:w-64">
      <NewChat />
      {/* Chat model select */}
      {/* Current chats */}
      {/* User */}
    </aside>
  );
}

export { Sidebar };
