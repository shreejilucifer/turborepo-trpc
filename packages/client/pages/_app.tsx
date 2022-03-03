import "../src/styles/global.css";
import { AppProps } from "next/app";
import { useState } from "react";
import { QueryClientProvider } from "react-query";
import { client, trpc } from "../src/services";

const App = ({ Component, pageProps }: AppProps) => {
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: "http://localhost:4000/trpc",
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={client}>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default App;
