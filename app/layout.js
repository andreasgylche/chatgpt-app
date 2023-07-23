import './globals.css';
import { Readex_Pro } from 'next/font/google';
import { getServerSession } from 'next-auth/next';
import { Sidebar } from '@/components/Sidebar';
import { SessionProvider } from '@/components/SessionProvider';
import { Login } from '@/components/Login';

const readexPro = Readex_Pro({ subsets: ['latin'] });

export const metadata = {
  title: 'ChatGPT Clone',
  description: 'ChatGPT Clone',
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  if (!session) {
    return (
      <html lang="en">
        <body
          className={`${readexPro.className} bg-zinc-900 text-zinc-50 flex`}
        >
          <SessionProvider session={session}>
            <Login />
          </SessionProvider>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`${readexPro.className} bg-zinc-900 text-zinc-50 flex`}>
        <SessionProvider session={session}>
          {/* Sidebar */}
          <Sidebar />
          {/* ClientProvider */}
          <main className="w-full">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
