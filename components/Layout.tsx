import Footer from "./Footer";
import Navbar from "./Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);

  let isHome = false;
  let isAuth = false;
  router.pathname == "/" && (isHome = true);
  router.pathname == "/login" && (isAuth = true);
  router.pathname == "/signup" && (isAuth = true);
  if (isHome) return <>{children}</>;
  if (session?.user || isAuth)
    return (
      <>
        <Navbar />
        <main className="pt-[10vh]">{children}</main>
        {!isHome && <Footer />}
      </>
    );
  return (
    <>
      <Navbar />
      <main className="pt-[10vh]">Not Autherized</main>
    </>
  );
}
