import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Shield, Users, Rocket } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const emailSchema = z.string().trim().email({ message: "Invalid email address" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    const validation = emailSchema.safeParse(email);
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }

    setLoading(true);
    
    try {
      const { error } = await supabase
        .from("waitlist")
        .insert({ email: validation.data });

      if (error) {
        if (error.code === "23505") { // Unique violation
          toast.error("This email is already on the waitlist!");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
        console.error("Error adding to waitlist:", error);
      } else {
        toast.success("You're on the list! We'll be in touch soon.");
        setEmail("");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error adding to waitlist:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist-section" className="py-24 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              Be Part of the Future of Autonomous Logistics
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Join our early-access waitlist to experience decentralized AI-driven freight orchestration. 
              Limited spots available for pioneering logistics partners.
            </p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-base"
                disabled={loading}
              />
              <Button 
                type="submit" 
                size="lg" 
                variant="hero"
                disabled={loading}
                className="group"
              >
                {loading ? "Joining..." : "Join Waitlist"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </form>

          {/* Trust Badges */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Shield,
                title: "Built with Fetch.ai",
                description: "Enterprise-grade agent framework"
              },
              {
                icon: Users,
                title: "Powered by SingularityNET",
                description: "Advanced AI capabilities"
              },
              {
                icon: Rocket,
                title: "Registered on Agentverse",
                description: "Verified agent network"
              }
            ].map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 rounded-xl bg-card border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1 text-card-foreground">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-muted-foreground text-center">
                    {badge.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Coming Soon Section */}
          <div className="text-center p-8 rounded-2xl bg-gradient-secondary border border-border">
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              Early Adopter Testimonials Coming Soon
            </h3>
            <p className="text-muted-foreground">
              Hear from logistics leaders transforming their operations with AFO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
