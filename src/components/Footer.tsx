import { Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-background to-background/70 bg-clip-text text-transparent">
                Agent Freight Orchestrator
              </h3>
              <p className="text-background/70 text-sm leading-relaxed max-w-md">
                Empowering the Future of Freight through Decentralized Intelligence.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-start md:items-end justify-center">
              <h4 className="text-sm font-semibold mb-4 text-background/90">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  // href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors duration-300 group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-background group-hover:scale-110 transition-transform" />
                </a>
                <a
                  // href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-background group-hover:scale-110 transition-transform" />
                </a>
                <a
                  // href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors duration-300 group"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-background group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-background/20 my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>
              © {currentYear} Agent Freight Orchestrator. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
