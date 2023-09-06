import { AppProps } from "next/app";
import { globalStyles } from "@/styles/global";
import { Header } from "@/components/Header";
import Head from "next/head";

globalStyles();

export default function App({ Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Sillas Vidal</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}