import { EmailCaptureSection } from "@/app/components/EmailCaptureSection";
import { FeaturesSection } from "@/app/components/FeaturesSection";
import { FooterSection } from "@/app/components/FooterSection";
import { HeroSection } from "@/app/components/HeroSection";
import { HowItWorksSection } from "@/app/components/HowItWorksSection";
import { TestimonialsSection } from "@/app/components/TestimonialsSection";

export default function Home() {
  return (
    <main id="homepage" className="pw-shell">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <EmailCaptureSection />
      <FooterSection />
    </main>
  );
}