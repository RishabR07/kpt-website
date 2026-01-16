import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">KPT</h3>
                <p className="text-xs text-primary-foreground/70">Knowledge. Progress. Technology.</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Committed to excellence in technical education, fostering innovation, and building future leaders in engineering and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/academics/courses" className="text-primary-foreground/80 hover:text-secondary transition-colors">Courses Offered</Link></li>
              <li><Link to="/academics/fee-structure" className="text-primary-foreground/80 hover:text-secondary transition-colors">Fee Structure</Link></li>
              <li><Link to="/about/iqac" className="text-primary-foreground/80 hover:text-secondary transition-colors">IQAC</Link></li>
              <li><Link to="/about/life-at-kpt" className="text-primary-foreground/80 hover:text-secondary transition-colors">Campus Life</Link></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-secondary">Departments</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/departments/cse" className="text-primary-foreground/80 hover:text-secondary transition-colors">Computer Science</Link></li>
              <li><Link to="/departments/mechanical" className="text-primary-foreground/80 hover:text-secondary transition-colors">Mechanical</Link></li>
              <li><Link to="/departments/civil" className="text-primary-foreground/80 hover:text-secondary transition-colors">Civil</Link></li>
              <li><Link to="/departments/ece" className="text-primary-foreground/80 hover:text-secondary transition-colors">Electronics</Link></li>
              <li><Link to="/departments/eee" className="text-primary-foreground/80 hover:text-secondary transition-colors">Electrical</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-secondary">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-secondary" />
                <span className="text-primary-foreground/80">College Campus Address, City, State - PIN</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/80">+91-XXXXX-XXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/80">info@kpt.edu.in</span>
              </li>
            </ul>
            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} KPT. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-secondary transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
