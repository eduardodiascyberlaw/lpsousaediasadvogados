import { HeroSection } from "@/components/sections/HeroSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { NavigateSection } from "@/components/sections/NavigateSection";
import { AreasPreview } from "@/components/sections/AreasPreview";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";

/* GNS Law homepage flow:
   Hero → Welcome → Awards → Navigate Together → What We Do → Founder → Blog → Testimonials → CTA
*/
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <AwardsSection />
      <NavigateSection />
      <AreasPreview />
      <TeamPreview />
      <BlogPreview />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
