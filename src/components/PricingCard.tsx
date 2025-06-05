interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export function PricingCard({ title, price, description, features, recommended = false }: PricingCardProps) {
  return (
    <div className={`service-card bg-card p-6 ${recommended ? 'border-2 border-primary relative' : 'border border-border'}`}>
      {recommended && (
        <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-xs font-medium rounded-bl-md">
          Recommended
        </div>
      )}
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== 'Custom' && <span className="text-muted-foreground">/month</span>}
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary mr-2 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-2 px-4 rounded-md font-medium ${recommended ? 'bg-primary text-white' : 'bg-secondary text-foreground'}`}>
        {recommended ? 'Get Started' : 'Let\'s Talk'}
      </button>
    </div>
  );
}

export default PricingCard;
