import "../styles/globals.css";
import type { AppProps } from "next/app";
import Login from "./login";
import Loading from "./loading";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";
import { useEffect } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import Link from "next/link";
export default function App({ Component, pageProps }: AppProps) {
  const [loggedInUser, loading, _error] = useAuthState(auth);
  useEffect(() => {
    const setUserInDb = async () => {
      try {
        await setDoc(
          doc(db, "users", loggedInUser?.email as string),
          {
            username: loggedInUser?.displayName,
            lastSeen: serverTimestamp(),
          },
          { merge: true }
        );
      } catch (error) {
        console.log("ERROR SETTING USER INFO IN DB", error);
      }
    };
    if (loggedInUser) {
      setUserInDb();
    }
  }, [loggedInUser]);
  if (loading) return <Loading></Loading>;
  if (!loggedInUser) {
    return <Login></Login>;
  }
  return <Component {...pageProps} />;
}
