import { HeroSection } from "@/components/sections/HeroSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { NavigateSection } from "@/components/sections/NavigateSection";
import { AreasPreview } from "@/components/sections/AreasPreview";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
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
