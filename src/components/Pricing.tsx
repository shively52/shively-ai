import PricingCard from './PricingCard';
import { Button } from './ui/button';

export function Pricing() {
  const pricingPlans = [
    {
      title: "DIY Platform",
      price: "$199",
      description: "Access to our AI tools with support for self-implementation.",
      features: [
        "All-in-one CRM dashboard",
        "Basic AI automation tools",
        "Voice AI for call handling",
        "Email and chat support",
        "Monthly strategy call",
        "Self-service setup guides"
      ],
      recommended: false
    },
    {
      title: "Done-For-You",
      price: "$499",
      description: "We handle everything for you, from setup to ongoing management.",
      features: [
        "All DIY Platform features",
        "Complete setup and configuration",
        "Custom automation workflows",
        "Advanced voice AI scripts",
        "Monthly performance review",
        "Dedicated account manager",
        "Priority support"
      ],
      recommended: true
    },
    {
      title: "Custom Plan",
      price: "Custom",
      description: "Tailored solutions for businesses with specific needs.",
      features: [
        "Custom feature selection",
        "Enterprise-level support",
        "Multiple location management",
        "Advanced analytics and reporting",
        "White-label options available",
        "API integrations",
        "Quarterly business strategy sessions"
      ],
      recommended: false
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for your business needs. All plans include our core AI automation features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              recommended={plan.recommended}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center bg-muted/30 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Not Sure Which Plan Is Right For You?</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Schedule a free consultation with our team to discuss your business needs and find the perfect solution.
          </p>
          <Button variant="cta" size="lg">Schedule Free Consultation</Button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
