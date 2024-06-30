import "bootstrap/dist/css/bootstrap.css";
import "@styles/normalize.css";
import "@styles/global.css";
import "@styles/index.css";
import "@styles/background-noise.css";
import "@styles/typewriting.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Juan Carlos Vilcherrez</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
