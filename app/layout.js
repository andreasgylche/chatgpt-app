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
      <body className={`${readexPro.className} bg-zinc-900 text-zinc-50`}>
        {/* Sidebar */}
        {/* ClientProvider */}
        <main>{children}</main>
      </body>
    </html>
  );
}
