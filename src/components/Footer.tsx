import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-16">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          {/* Company Info */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold font-serif text-primary mb-2">Salesvine</h3>
            <p className="text-muted-foreground italic text-lg">
              AI-powered growth for mission-critical infrastructure
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:contact@salesvine.net"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>contact@salesvine.net</span>
            </a>
            <a 
              href="https://linkedin.com/company/salesvine" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Salesvine. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
