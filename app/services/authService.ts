import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

export const login = async ({ email, password }: { email: string; password: string }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    console.error(error);
    throw new Error("Giriş başarısız");
  }
};


