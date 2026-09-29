import { Hero } from "../components/Hero";
import { BookingWidget } from "../components/BookingWidget";
import { Presentation } from "../components/Presentation";
import { ResidenceDetails } from "../components/ResidenceDetails";
import { Suites } from "../components/Suites";
import { Garden } from "../components/Garden";
import { Pools } from "../components/Pools";
import { Discover } from "../components/Discover";
import { Faq } from "../components/Faq";
import { Contact } from "../components/Contact";
import { Testimonials } from "../components/Testimonials";
import { LocationMap } from "../components/LocationMap";

export function Home() {
  return (
    <main>
      <Hero />
      <BookingWidget />
      <Presentation />
      <ResidenceDetails />
      <Suites />
      <Garden />
      <Pools />
      <Testimonials />
      <LocationMap />
      <Discover />
      <Faq />
      <Contact />
    </main>
  );
}
