import { Button } from "@/components/ui/button";
import { Globe, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Global AI Network" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
            <Globe className="w-4 h-4 text-primary animate-pulse-slow" />
            <span className="text-sm font-medium text-foreground">Built on ASI Alliance Stack</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
            Reinventing Global Logistics with Autonomous AI Agents
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-delayed leading-relaxed">
            Agent Freight Orchestrator (AFO) uses decentralized AI agents to negotiate, optimize, and execute freight deliveries — minimizing empty miles, maximizing efficiency.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delayed">
            <Button 
              size="lg" 
              variant="hero" 
              className="group"
              onClick={() => {
                document.getElementById('waitlist-section')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'center'
                });
              }}
            >
              Join Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="hero-outline"
              onClick={() => {
                document.getElementById('about-section')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground animate-fade-in-delayed">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
              Powered by Fetch.ai
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse-slow" />
              Built with SingularityNET
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
              Registered on Agentverse
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
