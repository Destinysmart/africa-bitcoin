import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Education = () => {
  const ourPrograms = [
    {
      title: "Foundations of Bitcoin",
      description: "A beginner's guide covering what Bitcoin is, how it works, and why it matters for Africa.",
    },
    {
      title: "Bitcoin for Entrepreneurs",
      description: "How to leverage Bitcoin for business, cross-border payments, and financial inclusion.",
    },
    {
      title: "Technical Deep Dive",
      description: "Explore the underlying technology, including cryptography, the Lightning Network, and security best practices.",
    },
  ];

  const otherInitiatives = [
    { name: "BTrust Builders", location: "Nigeria", description: "Building Bitcoin infrastructure and education across West Africa", members: "2.5K+" },
    { name: "Bitcoin Dada", location: "Kenya", description: "Empowering African women through Bitcoin education", members: "1.8K+" },
    { name: "The Core", location: "South Africa", description: "Technical Bitcoin education and development community", members: "1.2K+" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="bg-gradient-sunset bg-clip-text text-transparent">Bitcoin Education Programs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our programs are designed to be accessible to all, providing foundational knowledge to advanced concepts.
          </p>
        </div>

        {/* Our Programs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ourPrograms.map((program, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-story transition-smooth border border-border/50 group">
              <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">{program.title}</h3>
              <p className="text-muted-foreground mb-4">{program.description}</p>
              <Link to="/resources" className="text-primary font-semibold hover:underline flex items-center gap-2">
                Explore Resources
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Other African Initiatives */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Other African Initiatives</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've curated a list of other incredible organizations dedicated to Bitcoin education on the continent.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherInitiatives.map((community, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 border border-border/50 shadow-soft hover:shadow-story transition-smooth">
              <h4 className="text-xl font-semibold text-foreground mb-2">{community.name}</h4>
              <p className="text-sm text-muted-foreground mb-1">{community.location}</p>
              <p className="text-muted-foreground text-sm mb-2">{community.description}</p>
              <div className="text-primary font-semibold text-sm">{community.members} members</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
