import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import RecentProject from "./components/RecentProject";
import CustomerReview from "./components/CustomerReview";


export default function Home() {

  return (
    <main className="font-bold text-3xl">
      <Header />
      <HeroSection />
      <Services />
      <RecentProject />
      <CustomerReview />
    </main>
  );
}
