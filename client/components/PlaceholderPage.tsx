import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description: string;
  backLink?: string;
  backText?: string;
}

export function PlaceholderPage({ 
  title, 
  description, 
  backLink = '/', 
  backText = 'Back to Home' 
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <MessageCircle className="h-16 w-16 text-neon-green mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              This page is coming soon!
            </h2>
            <p className="text-muted-foreground mb-6">
              We're working hard to bring you amazing content. Continue the conversation with us to help build this page exactly how you want it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-neon bg-neon-green text-black px-6 py-3 rounded-lg font-medium hover:bg-neon-green-bright transition-all duration-300 hover:scale-105"
              >
                Continue Building This Page
              </Link>
              <Link
                to={backLink}
                className="inline-flex items-center px-6 py-3 border border-neon-green text-neon-green rounded-lg font-medium hover:bg-neon-green hover:text-black transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {backText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
