import React from 'react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="hero-section py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              AI Automation for Small Businesses
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
              Get More Leads, Without Lifting a Finger
            </h2>
            <p className="text-lg text-muted-foreground">
              Shively AI helps local service businesses use AI tools, automations, and voice bots to save time, boost leads, and grow profitably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl">Book a Free Demo</Button>
              <Button variant="outline" size="xl">See It in Action</Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-3xl"></div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <span className="text-muted-foreground">AI Assistant Demo Video</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
