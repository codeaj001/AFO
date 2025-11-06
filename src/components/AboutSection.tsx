import { Network, Brain, Database } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Autonomous Negotiation",
    description: "AI agents that communicate and settle freight deals instantly, eliminating delays and human bottlenecks."
  },
  {
    icon: Brain,
    title: "Smart Optimization",
    description: "MeTTa knowledge graph ensures efficient, rule-compliant routing with real-time decision making."
  },
  {
    icon: Database,
    title: "Data Monetization",
    description: "Ocean Protocol enables participants to earn revenue from shared logistics data while maintaining privacy."
  }
];

const AboutSection = () => {
  return (
    <section id="about-section" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            A Smarter, Decentralized Freight Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            AFO connects shippers, carriers, and brokers through AI agents that communicate, 
            reason, and make autonomous logistics decisions in real time using Fetch.ai and 
            SingularityNET technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-soft transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
