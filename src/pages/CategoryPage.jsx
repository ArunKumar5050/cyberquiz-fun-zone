
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SiteNavigation from "@/components/SiteNavigation";
import { 
  Star,
  Check,
  Clock,
  Filter,
  ArrowLeft
} from "lucide-react";

const CategoryPage = () => {
  const { slug } = useParams();
  const [title, setTitle] = useState("");
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load category data based on slug
  useEffect(() => {
    // Simulating API call
    setLoading(true);
    
    setTimeout(() => {
      // Map category slug to title
      const categoryMapping = {
        "technology": "Technology",
        "science": "Science", 
        "history": "History",
        "geography": "Geography",
        "entertainment": "Entertainment",
        "cybersecurity": "Cybersecurity"
      };
      
      setTitle(categoryMapping[slug] || "Category");
      
      // Generate quizzes for this category
      const categoryQuizzes = generateQuizzesForCategory(slug);
      setQuizzes(categoryQuizzes);
      setLoading(false);
    }, 500);
  }, [slug]);

  // Function to generate mock quizzes based on category
  const generateQuizzesForCategory = (categorySlug) => {
    const baseQuizzes = {
      "technology": [
        {
          id: 101,
          title: "Tech Trends 2023",
          description: "Stay up-to-date with the latest technology trends and innovations",
          difficulty: "Intermediate",
          questionCount: 15,
          timeLimit: "15 min",
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
          rating: 4.6,
          slug: "js-quiz"
        },
        {
          id: 102,
          title: "Artificial Intelligence Basics",
          description: "Learn about AI, machine learning, and neural networks",
          difficulty: "Advanced",
          questionCount: 20,
          timeLimit: "25 min",
          image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
          rating: 4.9,
          slug: "js-quiz"
        }
      ],
      "cybersecurity": [
        {
          id: 201,
          title: "Cybersecurity Essentials",
          description: "Test your knowledge of basic cybersecurity concepts and practices",
          difficulty: "Beginner",
          questionCount: 10,
          timeLimit: "10 min",
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
          rating: 4.8,
          slug: "js-quiz"
        },
        {
          id: 202,
          title: "Ethical Hacking",
          description: "Understand the techniques used by ethical hackers to protect systems",
          difficulty: "Advanced",
          questionCount: 20,
          timeLimit: "20 min",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
          rating: 4.7,
          slug: "js-quiz"
        }
      ],
      "geography": [
        {
          id: 301,
          title: "World Geography Challenge",
          description: "How well do you know our planet? Test your geography knowledge!",
          difficulty: "Intermediate",
          questionCount: 15,
          timeLimit: "15 min",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          rating: 4.5,
          slug: "js-quiz"
        }
      ],
      "history": [
        {
          id: 401,
          title: "History of Computing",
          description: "From mainframes to smartphones - the evolution of computing technology",
          difficulty: "Advanced",
          questionCount: 20,
          timeLimit: "20 min",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
          rating: 4.2,
          slug: "js-quiz"
        }
      ]
    };
    
    // Return quizzes for the requested category, or default to cybersecurity if not found
    return baseQuizzes[categorySlug] || baseQuizzes["cybersecurity"];
  };

  return (
    <div className="min-h-screen w-full bg-cyber-dark">
      <SiteNavigation />
      
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <Link to="/" className="flex items-center text-cyber-blue hover:underline mb-4">
            <ArrowLeft size={16} className="mr-1" /> Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-cyber-blue mb-4">
            {title} Quizzes
          </h1>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-cyber-light">
              Challenge yourself with our collection of {title.toLowerCase()} quizzes
            </p>
            
            <Button variant="outline" className="flex items-center gap-2 border-cyber-blue/30 text-cyber-blue">
              <Filter size={16} />
              Filter
            </Button>
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="cyber-card p-8 animate-pulse text-center">
              <p className="text-cyber-blue">Loading quizzes...</p>
            </div>
          </div>
        ) : (
          <>
            {quizzes.length === 0 ? (
              <div className="cyber-card p-8 text-center">
                <h3 className="text-xl font-bold mb-2">No quizzes found</h3>
                <p className="text-cyber-light mb-4">We couldn't find any quizzes in this category.</p>
                <Button asChild>
                  <Link to="/">Back to Home</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {quizzes.map((quiz) => (
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
                        <span className="badge bg-cyber-blue/20 text-cyber-blue text-xs px-2 py-1 rounded-full">{title}</span>
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
            )}
          </>
        )}
      </div>
      
      {/* Simple footer */}
      <footer className="py-8 bg-cyber-dark border-t border-cyber-blue/20 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-cyber-light">
            &copy; {new Date().getFullYear()} QuizMaster. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CategoryPage;
