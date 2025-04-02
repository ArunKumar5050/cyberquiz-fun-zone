
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Brain, Trophy, Book, Home, Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const SiteNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="border-b border-cyber-blue/20 bg-cyber-darker">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-cyber-blue" />
            <span className="text-xl font-bold text-cyber-blue">QuizMaster</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <Home className="mr-2 h-4 w-4" />
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="gap-2">
                    <Book className="h-4 w-4" />
                    Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4 md:w-[600px] lg:w-[700px] md:grid-cols-2 lg:grid-cols-3">
                      {categories.map((category) => (
                        <li key={category.slug}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={`/category/${category.slug}`}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{category.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {category.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/leaderboard">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <Trophy className="mr-2 h-4 w-4" />
                      Leaderboard
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button asChild className="bg-cyber-blue hover:bg-cyber-blue/80 text-black font-medium">
              <Link to="/js-quiz">Start Quiz</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="outline"
              className="border-cyber-blue/30 text-cyber-blue"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5 mr-2" />
              Menu
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="py-2 px-3 rounded hover:bg-cyber-blue/20 flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="h-5 w-5 text-cyber-blue" />
                <span>Home</span>
              </Link>
              
              <div className="py-2 px-3 rounded bg-cyber-darker border border-cyber-blue/20">
                <div className="flex items-center gap-2 mb-2">
                  <Book className="h-5 w-5 text-cyber-blue" />
                  <span className="font-medium">Categories</span>
                </div>
                <div className="pl-7 flex flex-col space-y-2">
                  {categories.map((category) => (
                    <Link 
                      key={category.slug}
                      to={`/category/${category.slug}`}
                      className="text-sm py-1 hover:text-cyber-blue"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/leaderboard" 
                className="py-2 px-3 rounded hover:bg-cyber-blue/20 flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Trophy className="h-5 w-5 text-cyber-blue" />
                <span>Leaderboard</span>
              </Link>
              
              <Button 
                asChild 
                className="bg-cyber-blue hover:bg-cyber-blue/80 text-black font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link to="/js-quiz">Start Quiz</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Quiz categories
const categories = [
  {
    title: "Technology",
    description: "Test your knowledge about computers, software, and digital trends",
    slug: "technology",
  },
  {
    title: "Science",
    description: "Challenge yourself with questions about physics, chemistry, and biology",
    slug: "science",
  },
  {
    title: "History",
    description: "Travel back in time with questions about historical events and figures",
    slug: "history",
  },
  {
    title: "Geography",
    description: "Explore the world with questions about countries, capitals, and landmarks",
    slug: "geography",
  },
  {
    title: "Entertainment",
    description: "Test your knowledge of movies, TV shows, music, and pop culture",
    slug: "entertainment",
  },
  {
    title: "Cybersecurity",
    description: "Learn about online safety, privacy, and protecting your digital identity",
    slug: "cybersecurity",
  }
];

export default SiteNavigation;
