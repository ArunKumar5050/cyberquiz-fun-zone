
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SiteNavigation from "@/components/SiteNavigation";
import { useToast } from "@/hooks/use-toast";
import { 
  Brain, 
  Trophy, 
  Clock, 
  ShieldAlert,
  ArrowRight,
  Star,
  Check
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [featuredQuizzes] = useState([
    {
      id: 1,
      title: "Cybersecurity Essentials",
      description: "Test your knowledge of basic cybersecurity concepts and practices",
      category: "Technology",
      difficulty: "Beginner",
      questionCount: 10,
      timeLimit: "10 min",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      rating: 4.8,
      slug: "js-quiz"
    },
    {
      id: 2,
      title: "World Geography Challenge",
      description: "How well do you know our planet? Test your geography knowledge!",
      category: "Geography",
      difficulty: "Intermediate",
      questionCount: 15,
      timeLimit: "15 min",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      rating: 4.5,
      slug: "geography"
    },
    {
      id: 3,
      title: "History of Computing",
      description: "From mainframes to smartphones - the evolution of computing technology",
      category: "History",
      difficulty: "Advanced",
      questionCount: 20,
      timeLimit: "20 min",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      rating: 4.2,
      slug: "computing-history"
    }
  ]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
  };

  return (
    <div className="min-h-screen w-full bg-cyber-dark">
      <SiteNavigation />
      
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-cyber-dark relative">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2333d2ff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }}></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
              Test Your Knowledge with Fun Interactive Quizzes
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyber-light">
              Challenge yourself, learn new facts, and compete with friends on a variety of topics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-cyber-blue hover:bg-cyber-blue/80 text-black font-bold py-6 text-lg">
                <Link to="/js-quiz">Start Quiz <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-cyber-blue hover:bg-cyber-blue/20 text-cyber-blue font-bold py-6 text-lg">
                <Link to="/category/cybersecurity">Browse Categories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 bg-cyber-darker">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-cyber-blue">Why Choose Our Quizzes?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card p-6 flex flex-col items-center text-center">
              <div className="text-cyber-blue mb-4">
                <Brain size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Learning Made Fun</h3>
              <p className="text-cyber-light">Engage with interactive quizzes designed to make learning enjoyable and effective</p>
            </div>
            
            <div className="cyber-card p-6 flex flex-col items-center text-center">
              <div className="text-cyber-purple mb-4">
                <Trophy size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Compete & Win</h3>
              <p className="text-cyber-light">Earn badges, climb leaderboards, and showcase your knowledge to friends</p>
            </div>
            
            <div className="cyber-card p-6 flex flex-col items-center text-center">
              <div className="text-cyber-green mb-4">
                <Clock size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Challenges</h3>
              <p className="text-cyber-light">Perfect for short breaks with timed quizzes ranging from 5-20 minutes</p>
            </div>
            
            <div className="cyber-card p-6 flex flex-col items-center text-center">
              <div className="text-cyber-yellow mb-4">
                <ShieldAlert size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Practical Knowledge</h3>
              <p className="text-cyber-light">Gain valuable insights and practical tips you can apply in real life</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Quizzes Section */}
      <section className="py-12 bg-cyber-dark">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-cyber-blue">Featured Quizzes</h2>
            <Button asChild variant="outline" className="border-cyber-blue/50 text-cyber-blue">
              <Link to="/quizzes">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredQuizzes.map((quiz) => (
              <Card key={quiz.id} className="cyber-card overflow-hidden hover:border-cyber-blue/50 transition-all hover:shadow-lg hover:shadow-cyber-blue/20">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={quiz.image} 
                    alt={quiz.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="badge bg-cyber-blue/20 text-cyber-blue text-xs px-2 py-1 rounded-full">{quiz.category}</span>
                    <div className="flex items-center text-cyber-yellow">
                      <Star size={16} className="fill-cyber-yellow" />
                      <span className="ml-1 text-sm">{quiz.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{quiz.title}</h3>
                  <p className="text-cyber-light text-sm mb-4">{quiz.description}</p>
                  <div className="flex justify-between text-sm text-cyber-light mb-4">
                    <div className="flex items-center">
                      <Check size={16} className="text-cyber-green mr-1" />
                      <span>{quiz.questionCount} Questions</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="text-cyber-purple mr-1" />
                      <span>{quiz.timeLimit}</span>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-cyber-blue hover:bg-cyber-blue/80 text-black">
                    <Link to={`/${quiz.slug}`}>Take Quiz</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-12 bg-cyber-darker">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-cyber-blue">Stay Updated</h2>
            <p className="mb-6 text-cyber-light">Subscribe to our newsletter for new quizzes, learning tips, and special offers</p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="cyber-input flex-1" 
                required
              />
              <Button type="submit" className="bg-cyber-blue hover:bg-cyber-blue/80 text-black font-bold">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-cyber-dark border-t border-cyber-blue/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Brain className="h-6 w-6 text-cyber-blue" />
              <span className="text-lg font-bold text-cyber-blue">QuizMaster</span>
            </div>
            
            <div className="flex gap-6">
              <Link to="/about" className="text-cyber-light hover:text-cyber-blue">About</Link>
              <Link to="/contact" className="text-cyber-light hover:text-cyber-blue">Contact</Link>
              <Link to="/privacy" className="text-cyber-light hover:text-cyber-blue">Privacy</Link>
              <Link to="/terms" className="text-cyber-light hover:text-cyber-blue">Terms</Link>
            </div>
          </div>
          
          <div className="text-center mt-8 text-sm text-cyber-light">
            <p>&copy; {new Date().getFullYear()} QuizMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
