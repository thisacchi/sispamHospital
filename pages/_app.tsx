import { AuthProvider } from '@/data/context/AuthContext';
import { SpinnerProvider } from '@/data/context/SpinnerContext';
import { ToastProvider } from '@/data/context/ToastContext';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SpinnerProvider>
      <ToastProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ToastProvider>
    </SpinnerProvider>
  );
}
