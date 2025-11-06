import { FileText, MessageSquare, Route, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Shipper Publishes Request",
    description: "A freight request is published to the decentralized network with all necessary details.",
    number: "01"
  },
  {
    icon: MessageSquare,
    title: "Agents Negotiate Automatically",
    description: "Carrier agents respond and negotiate rates, timing, and terms autonomously.",
    number: "02"
  },
  {
    icon: Route,
    title: "Optimized Route Planning",
    description: "Orchestrator agent analyzes and plans the most efficient multi-modal route.",
    number: "03"
  },
  {
    icon: CheckCircle,
    title: "Seamless Settlement",
    description: "Smart contracts verify delivery and trigger instant settlement between parties.",
    number: "04"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Four seamless steps from freight request to delivery confirmation
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary -translate-y-1/2 opacity-20" />

          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-soft transition-all duration-300 group">
                    {/* Number Badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold shadow-medium">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-accent" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
