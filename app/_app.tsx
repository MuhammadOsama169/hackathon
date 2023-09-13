import type { AppProps } from 'next/app';
import { MedievalSharp } from 'next/font/google';

const Medieval = MedievalSharp({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-MedievalSharp',
});
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
