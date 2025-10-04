import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-16 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              BITCOIN MADE SIMPLE
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from everyday Africans using Bitcoin to build better futures
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/blog">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
                Read Stories
              </Button>
            </Link>
            <Link to="/education">
              <Button size="lg" variant="outline" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold px-8">
                Learn Bitcoin
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="text-3xl font-bold text-primary mb-1">12K+</div>
              <div className="text-sm text-muted-foreground">People Educated</div>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="text-3xl font-bold text-primary mb-1">250+</div>
              <div className="text-sm text-muted-foreground">Stories Shared</div>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="text-3xl font-bold text-primary mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Communities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
