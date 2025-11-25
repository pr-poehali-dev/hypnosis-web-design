import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const CONTRACT_ADDRESS = "Hno2zYs8odA9NZCGjGfJwUMGcWFAupump";

const Index = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const buyUrl = `https://pump.fun/${CONTRACT_ADDRESS}`;

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="https://cdn.poehali.dev/files/1ee05873-1b74-44f2-8bbf-ae9cd33fa7f3.png" alt="Hypnosis Logo" className="h-10 w-10" />
            <h3 className="text-2xl font-bold text-primary">$HYPNOSIS</h3>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#story" className="text-sm text-muted-foreground hover:text-primary transition-colors">My Story</a>
            <a href="#offer" className="text-sm text-muted-foreground hover:text-primary transition-colors">What You Get</a>
            <a href="#buy" className="text-sm text-muted-foreground hover:text-primary transition-colors">How to Buy</a>
            <a href="#connect" className="text-sm text-muted-foreground hover:text-primary transition-colors">Connect</a>
          </div>
          <div className="flex gap-3">
            <a href="https://x.com/sadhov108" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://t.me/RWAlexander" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Icon name="Send" className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <img src="https://cdn.poehali.dev/files/1ee05873-1b74-44f2-8bbf-ae9cd33fa7f3.png" alt="Hypnosis Logo" className="h-32 w-32" />
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-primary">
                $HYPNOSIS
              </h1>
              <p className="text-2xl md:text-3xl font-serif text-accent">
                The Token That Helps You While You HODL
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I tried to make it in crypto, but it didn't work out. So I decided to invest in myself and learn a real, helping profession—hypnosis. And now I'm turning to this community for one last deal—to help fund my education and change my life.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href={buyUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="text-lg px-8 py-6">
                    Buy $HYPNOSIS
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <a href="#story">Learn More</a>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/9152a3b8-740e-473f-a073-8aa2cb378f88.jpg" 
                alt="Alexander"
                className="rounded-2xl shadow-2xl w-full object-cover border-2 border-accent/30"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">My Story & The Birth of $HYPNOSIS</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-slide-up">
              <p>
                My journey in crypto taught me a lot, but it didn't bring the fulfillment I was looking for. I realized I wanted to do more than just trade; I wanted to make a real impact. That's why I made a pivotal decision: to step away from the charts and invest in a skill that truly helps people. I am now fully committed to becoming a certified hypnotherapist.
              </p>
              <p>
                This is more than a career change—it's a mission to use a powerful, helping profession to make a genuine difference in people's lives.
              </p>
              <p>
                To bridge my past experience with my new purpose, I've created the $HYPNOSIS token. This isn't just another memecoin. It's the foundational stone of a much larger vision I am building.
              </p>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/7a47c44b-1556-4af0-9bf5-ee2c97972985.jpg" 
                alt="Alexander portrait"
                className="rounded-2xl shadow-xl w-full object-cover border-2 border-accent/30"
              />
            </div>
          </div>

          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed animate-fade-in">
            <div className="bg-background/50 p-8 rounded-2xl border border-accent/20">
              <h3 className="text-2xl font-bold text-primary mb-4">My Pledge to You:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                    <Icon name="Heart" className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">Direct Support</h4>
                    <p>By acquiring $HYPNOSIS, you are directly supporting my education and transition into a field dedicated to helping others.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                    <Icon name="Gift" className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">Future Benefits</h4>
                    <p>Everyone who holds $HYPNOSIS will have access to future consultations and services I provide as a certified therapist.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                    <Icon name="Network" className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">A Larger Ecosystem</h4>
                    <p>This token is the core of a planned ecosystem dedicated to education and hypnotherapy. I have multiple projects in the pipeline, and $HYPNOSIS will be the backbone that connects them all, creating lasting utility.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-xl font-medium text-primary">
              You are not just buying a token; you are investing in the foundation of a project designed to help others. Your support today builds the tomorrow I dream of, and in return, I will dedicate my future skills to supporting you.
            </p>

            <p className="text-center text-lg italic text-muted-foreground">
              Thank you for being part of this journey.
            </p>
          </div>
        </div>
      </section>

      <section id="offer" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">What You Get</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For every purchase of 0.3 SOL or more, receive a personal hypnosis consultation to help you achieve your goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-accent/20 hover:border-accent transition-all duration-300 animate-fade-in bg-card">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                  <Icon name="Brain" className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Stress Relief</h3>
                <p className="text-muted-foreground">
                  Release tension, anxiety, and overwhelm through guided hypnosis sessions
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent transition-all duration-300 animate-fade-in bg-card" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                  <Icon name="Target" className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Habit Change</h3>
                <p className="text-muted-foreground">
                  Break limiting patterns and build new, empowering behaviors
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent transition-all duration-300 animate-fade-in bg-card" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                  <Icon name="Sparkles" className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Motivation</h3>
                <p className="text-muted-foreground">
                  Unlock your inner drive and achieve goals you've been putting off
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 p-8 bg-card rounded-2xl shadow-lg animate-slide-up border-2 border-accent/20">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon name="Info" className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">The Deal</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Purchase 0.3 SOL or more of $HYPNOSIS tokens, and I'll personally conduct an individual hypnosis consultation to help you with stress, habits, motivation, or any other personal goals. Let's reach our dreams together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="buy" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">How to Buy</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="space-y-8">
            <Card className="border-2 border-accent/20 animate-slide-up bg-card">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-background flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Set Up a Solana Wallet</h3>
                    <p className="text-muted-foreground">
                      Download Phantom, Solflare, or any Solana-compatible wallet from their official websites
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 animate-slide-up bg-card" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-background flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Get SOL</h3>
                    <p className="text-muted-foreground">
                      Purchase SOL from any exchange (Binance, Coinbase, etc.) and transfer it to your wallet
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 animate-slide-up bg-card" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-background flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Visit PUMP.FUN & Buy</h3>
                    <p className="text-muted-foreground mb-4">
                      Click the button below to go directly to the $HYPNOSIS token page and swap your SOL
                    </p>
                    <a href={buyUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="w-full md:w-auto">
                        <Icon name="ExternalLink" className="mr-2 h-5 w-5" />
                        Buy on PUMP.FUN
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-8 bg-background/50 rounded-2xl border-2 border-accent/20 animate-fade-in">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-primary">Token Contract Address</h3>
              <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
                <Input 
                  type="text" 
                  value={CONTRACT_ADDRESS}
                  className="font-mono text-sm max-w-md"
                  readOnly
                />
                <Button variant="outline" onClick={copyToClipboard}>
                  <Icon name={copied ? "Check" : "Copy"} className="h-4 w-4 mr-2" />
                  {copied ? "Copied!" : "Copy"}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Use this contract address to find $HYPNOSIS on any Solana DEX
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="connect" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Connect With Me</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">
              Follow my journey and stay updated on $HYPNOSIS
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <a 
              href="https://x.com/sadhov108" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="border-2 border-accent/20 hover:border-accent transition-all duration-300 h-full animate-slide-up bg-card">
                <CardContent className="pt-12 pb-12 text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto group-hover:bg-accent/30 transition-colors">
                    <Icon name="Twitter" className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Twitter / X</h3>
                  <p className="text-muted-foreground">@sadhov108</p>
                  <Button variant="outline" className="mt-4">
                    Follow on X
                  </Button>
                </CardContent>
              </Card>
            </a>

            <a 
              href="https://t.me/RWAlexander" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="border-2 border-accent/20 hover:border-accent transition-all duration-300 h-full animate-slide-up bg-card" style={{ animationDelay: '0.1s' }}>
                <CardContent className="pt-12 pb-12 text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto group-hover:bg-accent/30 transition-colors">
                    <Icon name="Send" className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Telegram</h3>
                  <p className="text-muted-foreground">@RWAlexander</p>
                  <Button variant="outline" className="mt-4">
                    Join on Telegram
                  </Button>
                </CardContent>
              </Card>
            </a>
          </div>

          <div className="mt-16 text-center animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/files/1f2608be-dc32-4ca4-b877-265d0ae41409.jpg" 
              alt="Alexander looking forward"
              className="rounded-2xl shadow-2xl max-w-md mx-auto w-full object-cover border-2 border-accent/30"
            />
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <img src="https://cdn.poehali.dev/files/1ee05873-1b74-44f2-8bbf-ae9cd33fa7f3.png" alt="Hypnosis Logo" className="h-12 w-12" />
              <div>
                <h3 className="text-2xl font-bold text-primary">$HYPNOSIS</h3>
                <p className="text-sm text-muted-foreground">The Token That Helps You While You HODL</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="https://x.com/sadhov108" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Icon name="Twitter" className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://t.me/RWAlexander" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Icon name="Send" className="h-5 w-5" />
                </Button>
              </a>
              <a href={buyUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="sm" className="px-6">
                  Buy Now
                </Button>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 $HYPNOSIS. Your support is a lifeline.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
