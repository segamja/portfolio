import { Hero } from "@/components/hero/Hero";
import { CoreValue } from "@/components/core-value/CoreValue";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { EngineeringStory } from "@/components/engineering/EngineeringStory";
import { CareerTimeline } from "@/components/career/CareerTimeline";
import { LearningNow } from "@/components/learning/LearningNow";
import { Contact } from "@/components/contact/Contact";
import { SITE_CONFIG } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  email: SITE_CONFIG.email,
  jobTitle: "임베디드 소프트웨어 엔지니어",
  description: SITE_CONFIG.description,
  sameAs: [SITE_CONFIG.github],
  knowsAbout: [
    "시스템 설계",
    "임베디드 소프트웨어",
    "인포테인먼트",
    "검색 플랫폼",
    "양산 안정화",
    "C/C++",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <CoreValue />
      <FeaturedProjects />
      <EngineeringStory />
      <CareerTimeline />
      <LearningNow />
      <Contact />
    </>
  );
}
