import Layout from "../Components/layout/Layout";
import "../styles/globals.css";
import Head from "next/head";
import Notification from "@/Components/events/ui/notification";
import { NotificationContextProvider } from "@/store/notification-context";

function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <meta name="description" content="NextJS Events" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default App;
