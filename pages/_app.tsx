import "../styles/globals.css";
import type { AppProps } from "next/app";
import Login from "./login";
import Loading from "./loading";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";
import { useEffect } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App({ Component, pageProps }: AppProps) {
  const [loggedInUser, loading, _error] = useAuthState(auth);
  const notifySucess = () => {
    toast.success('Loggin successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
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
      notifySucess()
      setUserInDb();
    }
  }, [loggedInUser]);
  if (loading) return <Loading></Loading>;
  if (!loggedInUser) {
    return(
      <Login></Login>
      )
  }
  return(
  <>
  <Component href="/setAvatar" {...pageProps} prefetch={loggedInUser.emailVerified}>
  <ToastContainer></ToastContainer>
    </Component>;
  </> 
    )
}
