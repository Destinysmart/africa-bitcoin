import { useState } from "react";
import { Calendar, MapPin, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import storyImage from "@/assets/story-business.jpg";
import newsImage from "@/assets/news-bitcoin.jpg";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "How Bitcoin Saved My Small Business During Currency Crisis",
      excerpt: "When the local currency collapsed, Amara discovered Bitcoin could keep her textile business running and protect her family's savings.",
      type: "Story",
      category: "Business",
      location: "Lagos, Nigeria",
      date: "5 min read",
      trending: true,
      author: "Amara Okafor",
      image: storyImage
    },
    {
      id: 2,
      title: "Kenya Leads Africa in Bitcoin Adoption with New Mobile Payment Integration",
      excerpt: "M-Pesa announces Bitcoin features, making it easier for millions to access digital currency through familiar mobile money platforms.",
      type: "News",
      category: "Adoption",
      location: "Kenya",
      date: "2 hours ago",
      trending: false,
      author: "East Africa Correspondent",
      image: newsImage
    },
    {
      id: 3,
      title: "Teaching My Village About Digital Money",
      excerpt: "A farmer's journey from skeptic to Bitcoin educator in rural Kenya, showing how peer-to-peer learning changes communities.",
      type: "Story",
      category: "Community",
      location: "Meru, Kenya",
      date: "4 min read",
      trending: false,
      author: "John Mwangi",
      image: storyImage
    },
    {
      id: 4,
      title: "Nigerian Government Clarifies Bitcoin Regulation Framework",
      excerpt: "Central Bank provides updated guidelines for cryptocurrency operations, bringing clarity to the growing digital economy sector.",
      type: "News",
      category: "Regulation",
      location: "Nigeria",
      date: "1 day ago",
      trending: true,
      author: "Lagos Bureau",
      image: newsImage
    },
    {
      id: 5,
      title: "South African Retailers Report 40% Increase in Bitcoin Payments",
      excerpt: "Local businesses in Cape Town and Johannesburg see growing customer preference for Bitcoin transactions over traditional banking.",
      type: "News",
      category: "Business",
      location: "South Africa",
      date: "2 days ago",
      trending: false,
      author: "Southern Africa Desk",
      image: newsImage
    },
    {
      id: 6,
      title: "From Remittances to Financial Freedom",
      excerpt: "How a domestic worker in South Africa used Bitcoin to send money home and build savings for the first time.",
      type: "Story",
      category: "Individual",
      location: "Cape Town, South Africa",
      date: "6 min read",
      trending: false,
      author: "Grace Chimaliro",
      image: storyImage
    },
  ];

  const categories = ["All Posts", "News", "Stories", "Adoption", "Regulation", "Business", "Education", "Community"];
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const filteredPosts = activeCategory === "All Posts"
    ? posts
    : posts.filter(post => post.category === activeCategory || post.type === activeCategory);

  const featuredPost = posts.find(post => post.trending);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            African Bitcoin News and Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed and inspired with developments across Africa.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category
                ? "bg-gradient-sunset hover:shadow-warm transition-smooth"
                : "border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <div className="bg-gradient-earth rounded-3xl p-8 shadow-story border border-border/50">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      Trending
                    </span>
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {featuredPost.location}
                      </div>
                    </div>
                    <Button className="bg-gradient-sunset hover:shadow-warm transition-smooth">
                      Read Full {featuredPost.type}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map((item) => (
            <article key={item.id} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-story transition-smooth border border-border/50 group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      item.type === 'News'
                        ? 'bg-blue-500/10 text-blue-500'
                        : 'bg-green-500/10 text-green-500'
                    }`}>
                      {item.type}
                    </span>
                    {item.trending && (
                      <span className="text-primary flex items-center gap-1 text-xs">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-smooth">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground">{item.author}</div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter & Submissions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-2xl p-8 shadow-story border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">Weekly Roundup</h3>
            <p className="text-muted-foreground mb-6">Get a curated digest of the most important African Bitcoin news directly to your inbox every Friday.</p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
              />
              <Button className="w-full bg-gradient-sunset hover:shadow-warm transition-smooth">
                Subscribe to Digest
              </Button>
            </div>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-story border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">Submit News & Updates</h3>
            <p className="text-muted-foreground mb-6">Have a news tip or an update about a local community? Share it with us!</p>
            <div className="space-y-2">
              <textarea
                placeholder="Enter your news tip or story here..."
                className="w-full h-32 px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
              />
              <Button className="w-full bg-gradient-sunset hover:shadow-warm transition-smooth">
                Submit News Tip
              </Button>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-8">
            Load More Posts
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
