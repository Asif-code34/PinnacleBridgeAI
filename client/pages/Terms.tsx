export default function Terms() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Terms & Conditions
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Effective Date: August 7, 2025
          </p>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Agreement</h2>
                <p className="text-muted-foreground">
                  By using our site/services, you accept these terms.
                </p>
              </section>

              <section className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Services</h2>
                <p className="text-muted-foreground">
                  Scope defined by mutual agreement (quotes, contracts).
                </p>
              </section>

              <section className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Client Responsibilities</h2>
                <p className="text-muted-foreground">
                  Timely communication, accurate info, payment compliance
                </p>
              </section>

              <section className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Payment Terms</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 30–50% advance</li>
                  <li>• Balance on completion</li>
                  <li>• Late payment = delay or fees</li>
                </ul>
              </section>

              <section className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">IP Ownership</h2>
                <p className="text-muted-foreground">
                  Client owns final deliverables post-payment.
                </p>
              </section>

              <section className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Confidentiality</h2>
                <p className="text-muted-foreground">
                  Your data and projects are confidential.
                </p>
              </section>

              <section className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Liability</h2>
                <p className="text-muted-foreground">
                  We are not liable for indirect or incidental damages.
                </p>
              </section>

              <section className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
                <p className="text-muted-foreground">
                  Both parties can end the contract in writing. Work done will be billed.
                </p>
              </section>

              <section className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Jurisdiction</h2>
                <p className="text-muted-foreground">
                  Laws of [your country/state] apply.
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
