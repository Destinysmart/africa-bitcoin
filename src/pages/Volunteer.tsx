import { Button } from "@/components/ui/button";

const Volunteer = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background py-20">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-3xl p-8 shadow-story border border-border/50">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Join Our Team as a Volunteer
            </h1>
            <p className="text-lg text-muted-foreground">
              We're always looking for passionate individuals to help us share African Bitcoin stories.
              Fill out the form below to let us know how you'd like to contribute.
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Your Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
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
              <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                Preferred Role
              </label>
              <select
                id="role"
                name="role"
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
              >
                <option value="">Select a role...</option>
                <option value="writer">Writer / Content Creator</option>
                <option value="educator">Educator / Trainer</option>
                <option value="community-manager">Community Manager</option>
                <option value="translator">Translator</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-foreground mb-2">
                Relevant Experience
              </label>
              <textarea
                id="experience"
                name="experience"
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                placeholder="Tell us about your skills and experience..."
              />
            </div>
            <div className="text-center pt-4">
              <Button type="submit" className="w-full sm:w-auto bg-gradient-sunset hover:shadow-warm transition-smooth text-lg px-8 py-3">
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
