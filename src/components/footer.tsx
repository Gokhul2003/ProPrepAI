import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/container";
import { MainRoutes } from "@/lib/helpers";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, hoverColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-2 rounded-full transition duration-300 hover:${hoverColor} hover:bg-white/10 text-gray-300`}
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="hover:underline text-gray-400 hover:text-white transition"
      >
        {children}
      </Link>
    </li>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-tr from-gray-900 via-black to-gray-900 text-gray-300 py-12 mt-20">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {MainRoutes.map((route) => (
                <FooterLink key={route.href} to={route.href}>
                  {route.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">About Us</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering your career journey with AI-driven tools. From interview prep to resume building, we help you grow and succeed.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <FooterLink to="/services/interview-prep">
                Interview Preparation
              </FooterLink>
              <FooterLink to="/services/career-coaching">
                Career Coaching
              </FooterLink>
              <FooterLink to="/services/resume-building">
                Resume Building
              </FooterLink>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
            <p className="text-sm text-gray-400 mb-4">
              123 AI Street<br />
              Tech City, 12345<br />
              support@proprep.ai
            </p>
            <div className="flex gap-4 mt-2">
              <SocialLink
                href="https://facebook.com"
                icon={<Facebook size={22} />}
                hoverColor="text-blue-500"
              />
              <SocialLink
                href="https://twitter.com"
                icon={<Twitter size={22} />}
                hoverColor="text-sky-400"
              />
              <SocialLink
                href="https://instagram.com"
                icon={<Instagram size={22} />}
                hoverColor="text-pink-500"
              />
              <SocialLink
                href="https://linkedin.com"
                icon={<Linkedin size={22} />}
                hoverColor="text-blue-600"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ProPrep AI. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};
