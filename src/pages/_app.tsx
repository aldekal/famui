import { ClerkProvider } from "@clerk/nextjs";
import "../app/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
