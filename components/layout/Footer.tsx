import { Github, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-footer border-t border-white/[0.06] py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {year} {SITE_CONFIG.name}
          </p>

          <div className="flex items-center gap-6">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray transition-colors hover:text-text"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-2 text-sm text-gray transition-colors hover:text-text"
            >
              <Mail size={16} />
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray/60 sm:text-left">
          {SITE_CONFIG.brandMessage}
        </p>
      </Container>
    </footer>
  );
}
