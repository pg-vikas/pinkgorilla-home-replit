import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold font-display tracking-tighter flex items-center gap-2 cursor-pointer">
                <span className="text-primary">Pink</span>
                <span className="text-foreground">Gorilla</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium digital infrastructure for modern businesses. Build, operate, and scale with confidence.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/core" className="hover:text-primary transition-colors cursor-pointer">Gorilla Core</Link></li>
              <li><Link href="/apps" className="hover:text-primary transition-colors cursor-pointer">Gorilla Apps</Link></li>
              <li><Link href="/industries" className="hover:text-primary transition-colors cursor-pointer">Industries</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors cursor-pointer">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary transition-colors cursor-pointer">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors cursor-pointer">Contact</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Client Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Pink Gorilla Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
