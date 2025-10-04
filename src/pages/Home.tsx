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
    }
  ];

  const newsItems = [
    {
      id: 1,
      title: "Kenya Leads Africa in Bitcoin Adoption with New Mobile Payment Integration",
      excerpt: "M-Pesa announces Bitcoin features, making it easier for millions to access digital currency.",
      category: "Adoption",
      location: "Kenya",
      date: "2 hours ago",
      trending: true
    },
    {
      id: 2,
      title: "Nigerian Government Clarifies Bitcoin Regulation Framework",
      excerpt: "Central Bank provides updated guidelines for cryptocurrency operations.",
      category: "Regulation",
      location: "Nigeria",
      date: "1 day ago",
      trending: false
    },
    {
      id: 3,
      title: "Ghana University Launches Africa's First Bitcoin Studies Program",
      excerpt: "University of Ghana introduces comprehensive curriculum covering blockchain technology.",
      category: "Education",
      location: "Ghana",
      date: "3 days ago",
      trending: false
    }
  ];

  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* Stories Section */}
      <section id="stories" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Stories That Inspire
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real people, real experiences, real impact. These are the authentic voices of Africa's Bitcoin journey.
            </p>
          </div>

          {/* Featured Story */}
          <div className="mb-16">
            <div className="bg-gradient-earth rounded-3xl overflow-hidden shadow-story">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={storyImage}
                    alt={stories[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured Story
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium">
                        {stories[0].category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {stories[0].readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {stories[0].location}
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-foreground leading-tight">
                      {stories[0].title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {stories[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <div className="font-medium text-foreground">{stories[0].author}</div>
                      </div>
                      <Link to="/blog">
                        <Button className="bg-gradient-sunset hover:shadow-warm transition-smooth">
                          Read Story
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Stories Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {stories.slice(1).map((story) => (
              <div key={story.id} className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-story transition-smooth border border-border/50">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={storyImage}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium">
                      {story.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {story.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {story.location}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-smooth">
                      {story.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {story.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div className="text-sm font-medium text-foreground">{story.author}</div>
                      <Link to="/blog">
                        <Button size="sm" variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary transition-smooth">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/blog">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
                View All Stories
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              African Bitcoin News
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed about Bitcoin developments across Africa with news that matters to your community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-story transition-smooth border border-border/50 group">
                <img
                  src={newsImage}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium">
                      {item.category}
                    </span>
                    {item.trending && (
                      <span className="text-primary flex items-center gap-1 text-xs">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-smooth">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link to="/blog">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
                View All News
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-sunset">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Share Your Bitcoin Story
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Your experience could inspire thousands across Africa. Help others learn from your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/submit-story">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-smooth">
                Submit Your Story
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary transition-smooth">
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
