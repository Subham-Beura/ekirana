import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  let isHome = false;
  router.pathname == "/" && (isHome = true);
  if (isHome) return <>{children}</>;
  return (
    <>
      <Navbar />
      <main className="pt-[10vh]">{children}</main>
      {!isHome && <Footer />}
    </>
  );
}
