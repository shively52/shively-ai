
import { Button } from './ui/button';

export function HowItWorks() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes it easy to implement AI automation for your small business without the technical headaches.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 left-0 -ml-4 -mt-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
              1
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-medium mb-3 mt-4">Discovery Call</h3>
              <p className="text-muted-foreground">
                We start with a free consultation to understand your business needs, challenges, and goals. This helps us tailor our solutions specifically to your requirements.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute top-0 left-0 -ml-4 -mt-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
              2
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-medium mb-3 mt-4">Custom Solution</h3>
              <p className="text-muted-foreground">
                Our team designs a customized AI automation plan for your business, focusing on the tools and services that will deliver the best results for your specific industry.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute top-0 left-0 -ml-4 -mt-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
              3
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-medium mb-3 mt-4">Implementation</h3>
              <p className="text-muted-foreground">
                We handle the setup, integration, and training so you can focus on your business. Our team ensures everything works seamlessly with your existing systems.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button variant="cta" size="lg">Book Your Free Discovery Call</Button>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
