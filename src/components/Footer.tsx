import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/happy-town-logo.png";

export function Footer() {
  return (
    <footer className="relative bg-brand-purple text-primary-foreground overflow-hidden mt-20">
      <div className="absolute -top-24 -right-24 size-72 rounded-full bg-brand-yellow/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 size-96 rounded-full bg-brand-yellow/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 inline-flex items-center bg-white/95 rounded-2xl px-3 py-2 shadow-pop">
            <img src={logo} alt="Happy Town" className="h-12 w-auto" />
          </div>
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            Where smiles never end. Kuwait's most loved indoor play destination for kids of all ages.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="https://wa.me/96522288242" className="size-10 rounded-full bg-brand-yellow text-brand-black flex items-center justify-center hover:scale-110 transition-transform">
              <MessageCircle className="size-5" />
            </a>
            <a href="https://www.instagram.com/happytownkw" target="_blank" rel="noreferrer" aria-label="Instagram" className="size-10 rounded-full bg-brand-yellow text-brand-black flex items-center justify-center hover:scale-110 transition-transform">
              <Instagram className="size-5" />
            </a>
            <a href="tel:+96522288242" className="size-10 rounded-full bg-brand-yellow text-brand-black flex items-center justify-center hover:scale-110 transition-transform">
              <Phone className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-4 text-brand-yellow">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/activities" className="hover:text-brand-yellow">Activities</Link></li>
            <li><Link to="/birthday-parties" className="hover:text-brand-yellow">Birthday Parties</Link></li>
            <li><Link to="/school-trips" className="hover:text-brand-yellow">School Trips</Link></li>
            <li><Link to="/pricing" className="hover:text-brand-yellow">Pricing</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-yellow">Gallery</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2 lg:col-span-2">
          <h4 className="font-display font-bold text-lg mb-4 text-brand-yellow">Locations & Hours</h4>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <p className="font-bold flex items-center gap-1.5 mb-2"><MapPin className="size-4 text-brand-yellow" /> Marina Mall</p>
              <ul className="space-y-1 text-sm text-primary-foreground/80">
                <li>Sat–Wed: 10am – 10:30pm</li>
                <li>Thu–Fri: 10am – 11pm</li>
                <li className="flex items-center gap-1.5 mt-2 text-brand-yellow font-bold"><Phone className="size-3" /> +965 98572227</li>
              </ul>
            </div>
            <div>
              <p className="font-bold flex items-center gap-1.5 mb-2"><MapPin className="size-4 text-brand-yellow" /> Assima Mall</p>
              <ul className="space-y-1 text-sm text-primary-foreground/80">
                <li>Sat–Wed: 10am – 10pm</li>
                <li>Thu–Fri: 10am – 10:30pm</li>
                <li className="flex items-center gap-1.5 mt-2 text-brand-yellow font-bold"><Phone className="size-3" /> +965 99323061</li>
              </ul>
            </div>
            <div>
              <p className="font-bold flex items-center gap-1.5 mb-2"><MapPin className="size-4 text-brand-yellow" /> The Avenues</p>
              <ul className="space-y-1 text-sm text-primary-foreground/80">
                <li>Sat–Wed: 10am – 10pm</li>
                <li>Thu–Fri: 10am – 11pm</li>
                <li className="flex items-center gap-1.5 mt-2 text-brand-yellow font-bold"><Phone className="size-3" /> +965 91112540</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/70">
          <p>© {new Date().getFullYear()} Happy Town Kuwait. All rights reserved.</p>
          <p>Made with 💛 for happy families.</p>
        </div>
      </div>
    </footer>
  );
}
