import "../styles/globals.css";
import type { AppProps } from "next/app";
import Login from "./login";
import Loading from "./loading";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
export default function App({ Component, pageProps }: AppProps) {
  const [loggedInUser, loading, _error] = useAuthState(auth);
  if (loading) return <Loading></Loading>;
  if (!loggedInUser) {
    return <Login></Login>;
  }
  return <Component {...pageProps} />;
}
