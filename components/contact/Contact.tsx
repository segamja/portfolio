import { Github, Mail, FileDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { withBasePath } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export function Contact() {
  const resumePath = withBasePath("/resume/resume.pdf");

  return (
    <Section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[120px]" />

      <Container className="relative">
        <FadeIn>
          <div className="glass-card gradient-border glow-primary mx-auto max-w-3xl p-10 text-center md:p-16">
            <h2 className="text-4xl font-bold tracking-tight text-text md:text-[48px] md:leading-[1.15]">
              연락하기
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray">
              새로운 문제를 함께 해결할
              <br />
              좋은 팀을 기다리고 있습니다.
            </p>

            <p className="mt-4 text-sm text-muted">{SITE_CONFIG.email}</p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href={`mailto:${SITE_CONFIG.email}`}>
                <Mail size={18} />
                이메일
              </Button>
              <Button href={SITE_CONFIG.github} variant="secondary" external>
                <Github size={18} />
                GitHub
              </Button>
              <Button href={resumePath} variant="secondary" external>
                <FileDown size={18} />
                이력서
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
