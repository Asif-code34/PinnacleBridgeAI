function Privacy() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Effective Date: August 7, 2025
          </p>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                We value your privacy. This policy explains how Weblix Solution collects and uses your data.
              </p>
            </div>

            <div className="space-y-8">
              <section className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Name, email, phone</li>
                  <li>• Project info</li>
                  <li>• Device/browser data</li>
                </ul>
              </section>

              <section className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Usage</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Contact & support</li>
                  <li>• Project delivery</li>
                  <li>• Analytics</li>
                </ul>
              </section>

              <section className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground">
                  We use secure systems and encrypted storage.
                </p>
              </section>

              <section className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Tools</h2>
                <p className="text-muted-foreground">
                  Google Analytics, CRM tools, payment gateways
                </p>
              </section>

              <section className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
                <p className="text-muted-foreground">
                  Used for improving user experience.
                </p>
              </section>

              <section className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground">
                  Request data updates/deletion: solutionweblix@gmail.com
                </p>
              </section>

              <section className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Changes</h2>
                <p className="text-muted-foreground">
                  Policy may be updated. Changes will be reflected on this page.
                </p>
              </section>

              <section className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
                <p className="text-muted-foreground">
                  📧 solutionweblix@gmail.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
