import { ArrowRight } from "lucide-react";

const Resources = () => {
  const trustedResources = [
    {
      title: "Bitcoin Wallets Guide",
      description: "Learn how to choose and set up a secure Bitcoin wallet for your needs.",
      link: "#",
    },
    {
      title: "The Bitcoin Standard Book",
      description: "A classic book on the economic and historical context of Bitcoin.",
      link: "#",
    },
    {
      title: "Lightning Network Explained",
      description: "Understand the second-layer technology for fast, low-cost Bitcoin transactions.",
      link: "#",
    },
    {
      title: "The Bitcoin Whitepaper",
      description: "Read the original document that started it all.",
      link: "https://bitcoin.org/bitcoin.pdf",
    },
    {
      title: "Mempool Space",
      description: "Explore the Bitcoin blockchain and mempool in real-time.",
      link: "https://mempool.space/",
    },
    {
      title: "Bitcoin Optech",
      description: "Resources for developers and technical users on scaling and optimization.",
      link: "https://bitcoinops.org/",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="bg-gradient-sunset bg-clip-text text-transparent">Bitcoin Resources</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated collection of trusted tools, guides, and articles to help you on your Bitcoin journey.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Trusted Resources & Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustedResources.map((resource, index) => (
              <a 
                href={resource.link} 
                key={index} 
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card rounded-2xl p-6 shadow-soft hover:shadow-story transition-smooth border border-border/50 group"
              >
                <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-smooth mb-2">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground mb-4">{resource.description}</p>
                <div className="text-primary font-semibold flex items-center group-hover:underline">
                  Explore
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
