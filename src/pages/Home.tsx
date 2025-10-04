import { Link } from "react-router-dom";
import { Clock, MapPin, ArrowRight, Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import storyImage from "@/assets/story-business.jpg";
import newsImage from "@/assets/news-bitcoin.jpg";

const Home = () => {
  const stories = [
    {
      id: 1,
      title: "How Bitcoin Saved My Small Business During Currency Crisis",
      excerpt: "When the local currency collapsed, Amara discovered Bitcoin could keep her textile business running and protect her family's savings.",
      author: "Amara Okafor",
      location: "Lagos, Nigeria",
      readTime: "5 min read",
      category: "Business",
      featured: true
    },
    {
      id: 2,
      title: "Teaching My Village About Digital Money",
      excerpt: "A farmer's journey from skeptic to Bitcoin educator in rural Kenya, showing how peer-to-peer learning changes communities.",
      author: "John Mwangi",
      location: "Meru, Kenya",
      readTime: "4 min read",
      category: "Community"
    },
    {
      id: 3,
      title: "From Remittances to Financial Freedom",
      excerpt: "How a domestic worker in South Africa used Bitcoin to send money home and build savings for the first time.",
      author: "Grace Chimaliro",
      location: "Cape Town, South Africa",
      readTime: "6 min read",
      category: "Individual"
    },
    {
      id: 4,
      title: "Youth Building Bitcoin Economy in Ghana",
      excerpt: "University students creating Bitcoin payment solutions for local markets.",
      author: "Kwame Asante",
      location: "Accra, Ghana",
      readTime: "3 min read",
      category: "Innovation"
    }
  ];

  const newsItems = [
    {
      id: 1,
      title: "Kenya Leads Africa in Bitcoin Adoption",
      excerpt: "M-Pesa announces Bitcoin features, making it easier for millions to access digital currency.",
      category: "Adoption",
      location: "Kenya",
      date: "2 hours ago",
      trending: true
    },
    {
      id: 2,
      title: "Nigerian Government Clarifies Bitcoin Regulation",
      excerpt: "Central Bank provides updated guidelines for cryptocurrency operations.",
      category: "Regulation",
      location: "Nigeria",
      date: "1 day ago",
      trending: false
    },
    {
      id: 3,
      title: "Ghana University Launches Bitcoin Studies",
      excerpt: "University of Ghana introduces comprehensive blockchain curriculum.",
      category: "Education",
      location: "Ghana",
      date: "3 days ago",
      trending: false
    },
    {
      id: 4,
      title: "South Africa Sees Bitcoin Payment Growth",
      excerpt: "Local businesses report 40% increase in Bitcoin transactions.",
      category: "Business",
      location: "South Africa",
      date: "4 days ago",
      trending: true
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Featured Stories Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Stories</h2>
            <Link to="/blog">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stories.map((story) => (
              <div key={story.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-story transition-smooth group">
                <div className="relative h-48 bg-muted">
                  <img
                    src={storyImage}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                      {story.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-smooth">
                    {story.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {story.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {story.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {story.readTime}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section with Image */}
      <section className="py-16 bg-gradient-sunset">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-warm">
              <img
                src={storyImage}
                alt="Bitcoin education in Africa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Learn Bitcoin the African Way
              </h2>
              <p className="text-lg text-foreground/80">
                Join thousands of Africans learning about Bitcoin through community-driven education. 
                Our programs are designed by Africans, for Africans, addressing real challenges and opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/education">
                  <Button size="lg" className="bg-foreground text-primary hover:bg-foreground/90">
                    Start Learning
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button size="lg" variant="outline" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-primary">
                    Browse Resources
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Latest News</h2>
            <Link to="/blog">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-story transition-smooth group">
                <div className="relative h-48 bg-muted">
                  <img
                    src={newsImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  {item.trending && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-accent/20 text-accent-foreground px-2 py-0.5 rounded text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-smooth">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Growing Together Across Africa
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of Africans building a Bitcoin-powered future
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-card border border-border rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">12,000+</div>
              <div className="text-sm text-muted-foreground">People Educated</div>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">250+</div>
              <div className="text-sm text-muted-foreground">Stories Shared</div>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Communities</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Share Your Bitcoin Story
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Your experience could inspire thousands across Africa. Help others learn from your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/submit-story">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth">
                Submit Your Story
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-foreground transition-smooth">
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
