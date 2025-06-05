
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-secondary py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src="/src/assets/images/shively-ai-logo.png" alt="Shively AI" className="h-10" />
            <p className="text-sm text-muted-foreground">
              AI-powered automation for small local service businesses. Based in Bonita Springs, Florida.
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="florida-accent font-medium">Florida-based</span> with 
              <span className="ohio-accent font-medium"> Ohio</span> roots.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services#automation" className="hover:text-primary">AI-Powered Automation</a></li>
              <li><a href="/services#voice" className="hover:text-primary">Voice AI Agents</a></li>
              <li><a href="/services#websites" className="hover:text-primary">Website Design & Funnels</a></li>
              <li><a href="/services#social" className="hover:text-primary">Social Media Management</a></li>
              <li><a href="/services#ads" className="hover:text-primary">Online Ads</a></li>
              <li><a href="/services#crm" className="hover:text-primary">All-In-One CRM</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/industries#roofing" className="hover:text-primary">Roofing</a></li>
              <li><a href="/industries#realestate" className="hover:text-primary">Real Estate</a></li>
              <li><a href="/industries#landscaping" className="hover:text-primary">Landscaping</a></li>
              <li><a href="/industries#beauty" className="hover:text-primary">Beauty & Salons</a></li>
              <li><a href="/industries#contractors" className="hover:text-primary">Contractors</a></li>
              <li><a href="/industries#auto" className="hover:text-primary">Auto Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Bonita Springs, Florida</li>
              <li>contact@shivelyai.com</li>
              <li>(555) 123-4567</li>
            </ul>
            <div className="mt-4">
              <Button variant="cta" size="sm">Book Free Demo</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Shively AI. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="/privacy" className="hover:text-primary">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
