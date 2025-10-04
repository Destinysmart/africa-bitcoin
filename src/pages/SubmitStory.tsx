import { Button } from "@/components/ui/button";

const SubmitStory = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background py-20">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-3xl p-8 shadow-story border border-border/50">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Submit Your Story
            </h1>
            <p className="text-lg text-muted-foreground">
              Share your personal experience with Bitcoin and inspire the community.
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">
                Story Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                placeholder="e.g., How Bitcoin helped my family in Nigeria"
              />
            </div>
            <div>
              <label htmlFor="author" className="block text-sm font-medium text-foreground mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="author"
                name="author"
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                placeholder="e.g., Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                placeholder="e.g., jane.doe@example.com"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                placeholder="e.g., Accra, Ghana"
              />
            </div>
            <div>
              <label htmlFor="story" className="block text-sm font-medium text-foreground mb-2">
                Your Story
              </label>
              <textarea
                id="story"
                name="story"
                rows={10}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                placeholder="Tell us your story..."
              />
            </div>
            <div className="text-center pt-4">
              <Button type="submit" className="w-full sm:w-auto bg-gradient-sunset hover:shadow-warm transition-smooth text-lg px-8 py-3">
                Submit Story
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitStory;
