import Hero from "@/components/Hero";
import PackageGrid from "@/components/PackageGrid";
import WhyUs from "@/components/WhyUs";
import Destinations from "@/components/Destinations";
import Testimonials from "@/components/Testimonials";
import CTABand from "@/components/CTABand";

export default function Home() {
  return (
    <main>
      <Hero />
      <PackageGrid />
      <WhyUs />
      <Destinations />
      <Testimonials />
      <CTABand />
    </main>
  );
}
