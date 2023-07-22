import { Sidebar } from '@/components/Sidebar';
import './globals.css';
import { Readex_Pro } from 'next/font/google';

const readexPro = Readex_Pro({ subsets: ['latin'] });

export const metadata = {
  title: 'ChatGPT Clone',
  description: 'ChatGPT Clone',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${readexPro.className} bg-zinc-900 text-zinc-50 flex`}>
        {/* Sidebar */}
        <Sidebar />
        {/* ClientProvider */}
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
