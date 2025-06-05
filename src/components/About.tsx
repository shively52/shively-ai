
import { Button } from './ui/button';

export function About() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Shively AI</h2>
            <div className="space-y-4">
              <p className="text-lg">
                Shively AI was born from a simple observation: small local service businesses deserve the same powerful AI tools that big companies use, but without the complexity or high costs.
              </p>
              <p>
                Based in <span className="florida-accent font-medium">Bonita Springs, Florida</span> with roots in <span className="ohio-accent font-medium">Ohio</span>, we understand the unique challenges that local service businesses face in today's digital landscape.
              </p>
              <p>
                As a white-label GoHighLevel agency, we've combined cutting-edge AI technology with practical, results-driven strategies that actually work for small businesses. Our mission is to level the playing field, giving the little guy tools that were previously only available to large corporations with massive budgets.
              </p>
              <p>
                We believe that small business owners should be able to focus on what they do best—providing excellent service to their customers—while technology handles the repetitive tasks of lead generation, follow-up, and customer management.
              </p>
              <p>
                What sets us apart is our commitment to simplicity and results. We don't just provide technology; we provide solutions that are easy to understand, implement, and measure. No tech headaches, no complicated jargon—just clear, effective tools that help you grow your business.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="cta">Get to Know Us Better</Button>
            </div>
          </div>
          <div className="bg-muted/30 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-medium mb-2">Simplicity</h4>
                <p>We believe technology should make your life easier, not more complicated. Everything we do is designed with simplicity in mind.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Transparency</h4>
                <p>No hidden fees, no vague promises. We're clear about what we do, how we do it, and what results you can expect.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Results-Driven</h4>
                <p>We measure our success by your success. If our solutions aren't helping your business grow, we're not doing our job.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Partnership</h4>
                <p>We don't disappear after the sale. We're committed to your long-term success and growth as a true business partner.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
