import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-primary">$HYPNOSIS</h3>
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
                <Button size="lg" className="text-lg px-8 py-6">
                  <a href="#buy">Buy $HYPNOSIS</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <a href="#story">Learn More</a>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/9152a3b8-740e-473f-a073-8aa2cb378f88.jpg" 
                alt="Alexander"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">My Story</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-slide-up">
              <p>
                <strong className="text-primary">My goal:</strong> Master hypnosis, provide for my family, and finally build our dream home. This isn't just a meme—this is my future.
              </p>
              <p>
                After years of chasing crypto gains, I realized the real wealth lies in helping others transform their lives. Hypnotherapy is a powerful tool for change, and I'm committed to mastering this craft.
              </p>
              <p>
                Your support isn't just an investment—it's a lifeline. Thank you.
              </p>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/7a47c44b-1556-4af0-9bf5-ee2c97972985.jpg" 
                alt="Alexander portrait"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
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
            <Card className="border-2 hover:border-accent transition-all duration-300 animate-fade-in">
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

            <Card className="border-2 hover:border-accent transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
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

            <Card className="border-2 hover:border-accent transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
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

          <div className="mt-16 p-8 bg-card rounded-2xl shadow-lg animate-slide-up">
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
            <Card className="border-2 animate-slide-up">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold">
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

            <Card className="border-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold">
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

            <Card className="border-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Visit PUMP.FUN</h3>
                    <p className="text-muted-foreground mb-4">
                      Go to <a href="https://pump.fun" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">pump.fun</a> and connect your Solana wallet
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Search $HYPNOSIS</h3>
                    <p className="text-muted-foreground mb-4">
                      Enter the token contract address below to find $HYPNOSIS
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Swap SOL for $HYPNOSIS</h3>
                    <p className="text-muted-foreground">
                      Enter the amount (minimum 0.3 SOL for consultation) and complete the swap
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Token Contract</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <Card className="border-2 animate-scale-in">
            <CardContent className="pt-8 pb-8">
              <div className="space-y-4">
                <label className="text-sm font-medium text-muted-foreground">Contract Address (Solana)</label>
                <div className="flex gap-2">
                  <Input 
                    type="text" 
                    placeholder="Contract address will be added here"
                    className="font-mono text-sm"
                    readOnly
                  />
                  <Button variant="outline" size="icon" disabled>
                    <Icon name="Copy" className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  The smart contract address will be added shortly. Check back soon or follow our social channels for updates.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="connect" className="py-20 px-6 bg-card">
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
              <Card className="border-2 hover:border-accent transition-all duration-300 h-full animate-slide-up">
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
              <Card className="border-2 hover:border-accent transition-all duration-300 h-full animate-slide-up" style={{ animationDelay: '0.1s' }}>
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
              className="rounded-2xl shadow-2xl max-w-md mx-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">$HYPNOSIS</h3>
              <p className="text-sm text-muted-foreground">The Token That Helps You While You HODL</p>
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
