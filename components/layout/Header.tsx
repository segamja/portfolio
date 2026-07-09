"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/data/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import { useUIStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export function Header() {
  const { mobileMenuOpen, setMobileMenuOpen, toggleMobileMenu } = useUIStore();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navigation.map((n) => n.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 h-[72px] transition-all duration-500",
        scrolled
          ? "border-b border-white/[0.06] bg-background/70 shadow-lg shadow-black/10 backdrop-blur-2xl"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-full items-center justify-between">
        <Link
          href="#hero"
          className="text-lg font-bold tracking-tight text-text transition-colors hover:text-primary"
          onClick={handleNavClick}
        >
          {SITE_CONFIG.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="메인 네비게이션">
          {navigation.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
                  isActive ? "text-text" : "text-gray hover:text-text",
                )}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute right-4 bottom-0 left-4 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-gray transition-colors hover:border-white/15 hover:bg-white/[0.04] hover:text-text md:hidden"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="border-b border-white/[0.06] bg-background/90 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Container className="flex flex-col gap-1 py-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-white/[0.04]",
                    activeSection === item.href.replace("#", "")
                      ? "text-primary"
                      : "text-gray hover:text-text",
                  )}
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              ))}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
