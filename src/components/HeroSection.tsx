import { Link } from "react-router-dom";
import { Users, BookOpen, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bitcoin-africa.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-earth py-20 lg:py-28">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Africans learning about Bitcoin together"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Real Bitcoin Stories
                <span className="block text-primary">from Africa</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Discover authentic stories of how everyday Africans are using Bitcoin to build better futures.
                Learn from your community, share your journey, and join the grassroots movement.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/blog">
                <Button size="lg" className="bg-gradient-sunset hover:shadow-warm transition-smooth">
                  Read Latest Stories
                </Button>
              </Link>
              <Link to="/education">
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
                  Start Learning Bitcoin
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">12,000+</div>
                <div className="text-sm text-muted-foreground">People Educated</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">250+</div>
                <div className="text-sm text-muted-foreground">Stories Shared</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-2">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">25+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-story border border-border/50">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Weekly African Bitcoin Stories</h3>
                <p className="text-muted-foreground">
                  Get authentic stories and Bitcoin education delivered to your inbox every week.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  />
                </div>
                <Button className="w-full bg-gradient-sunset hover:shadow-warm transition-smooth">
                  Join 5,000+ Subscribers
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Unsubscribe anytime. We respect your privacy.
                </p>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground">This week:</strong> "How Bitcoin Saved My Business in Lagos"
                  and 2 new education guides in Swahili and French.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
