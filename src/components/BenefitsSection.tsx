import { Globe2, Zap, Shield, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Globe2,
    title: "Reduce Empty Miles",
    description: "AI-powered matching eliminates deadhead trips and maximizes asset utilization across your fleet."
  },
  {
    icon: Zap,
    title: "Automate Freight Matching",
    description: "Autonomous agents handle negotiations 24/7, accelerating deal closure from days to minutes."
  },
  {
    icon: Shield,
    title: "Ensure Data Privacy",
    description: "Decentralized architecture keeps your sensitive logistics data secure and under your control."
  },
  {
    icon: DollarSign,
    title: "New Revenue Streams",
    description: "Monetize your logistics data through Ocean Protocol marketplaces while maintaining privacy."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-gradient-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Transform Your Logistics Operations
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience the future of freight with measurable improvements across every metric
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-medium transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { value: "40%", label: "Reduction in Empty Miles" },
            { value: "10x", label: "Faster Deal Closure" },
            { value: "24/7", label: "Autonomous Operation" },
            { value: "100%", label: "Data Privacy Control" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
