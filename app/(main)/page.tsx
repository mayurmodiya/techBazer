import Loader from "@/components/others/Loader";
import HomePageOne from "@/components/pages/home-pages/HomePageOne";
import HomePageTwo from "@/components/pages/home-pages/HomePageTwo";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <main>
        <HomePageOne />
        {/* <HomePageTwo /> */}
      </main>
    </Suspense>
  );
}
