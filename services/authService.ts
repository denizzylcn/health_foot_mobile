import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase"; // firebase.ts dosyasındaki auth'u çekiyoruz

export const login = async ({ email, password }: { email: string; password: string }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Kullanıcı nesnesi döndürüyoruz
  } catch (error: any) {
    console.error(error);
    throw new Error('Giriş başarısız');
  }
};


