
import { useState, useEffect } from "react";
import SiteNavigation from "@/components/SiteNavigation";
import { 
  Trophy, 
  Medal, 
  Award,
  User,
  Clock,
  Star,
  Check
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState({
    weekly: [],
    monthly: [],
    allTime: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch leaderboard data
    setLoading(true);
    
    setTimeout(() => {
      // Generate mock leaderboard data
      const mockWeekly = generateLeaderboardData(20);
      const mockMonthly = generateLeaderboardData(20);
      const mockAllTime = generateLeaderboardData(20);
      
      setLeaderboardData({
        weekly: mockWeekly,
        monthly: mockMonthly,
        allTime: mockAllTime
      });
      
      setLoading(false);
    }, 1000);
  }, []);

  // Function to generate mock leaderboard data
  const generateLeaderboardData = (count) => {
    const names = [
      "Emma Thompson", "Liam Johnson", "Olivia Davis", "Noah Wilson", 
      "Ava Martinez", "William Anderson", "Sophia Taylor", "James Thomas",
      "Isabella Brown", "Benjamin White", "Mia Harris", "Lucas Martin",
      "Charlotte Garcia", "Henry Rodriguez", "Amelia Lee", "Alexander Walker",
      "Harper Hall", "Matthew Allen", "Evelyn Young", "Daniel Hernandez",
      "Abigail King", "Joseph Wright", "Emily Lopez", "Samuel Hill",
      "Elizabeth Scott", "David Green", "Sofia Adams", "Andrew Baker"
    ];
    
    const badges = ["🏆", "🎯", "🧠", "⚡", "🌟", "🔥", "👑", "💯"];
    
    return Array.from({ length: count }).map((_, index) => {
      // Ensure top 3 have higher scores
      const baseScore = index < 3 
        ? 10000 - (index * 500) 
        : Math.floor(Math.random() * 5000) + 3000;
      
      // Add some randomness to scores
      const randomFactor = Math.floor(Math.random() * 200);
      const score = baseScore - randomFactor;
      
      return {
        rank: index + 1,
        name: names[Math.floor(Math.random() * names.length)],
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
        score,
        quizzesTaken: Math.floor(Math.random() * 50) + 10,
        badge: badges[Math.floor(Math.random() * badges.length)],
        isCurrentUser: index === 7 // Randomly mark one user as the current user
      };
    });
  };

  // Function to render a medal icon based on rank
  const renderRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy className="text-yellow-400" />;
      case 2:
        return <Medal className="text-gray-400" />;
      case 3:
        return <Medal className="text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center font-medium">{rank}</span>;
    }
  };

  return (
    <div className="min-h-screen w-full bg-cyber-dark">
      <SiteNavigation />
      
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-cyber-blue mb-4">
            Leaderboard
          </h1>
          <p className="text-cyber-light max-w-2xl mx-auto">
            See how you stack up against other quiz takers! Compete for the top spots and earn recognition for your knowledge.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="weekly" className="mb-8">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="weekly" className="text-lg">Weekly</TabsTrigger>
              <TabsTrigger value="monthly" className="text-lg">Monthly</TabsTrigger>
              <TabsTrigger value="allTime" className="text-lg">All Time</TabsTrigger>
            </TabsList>
            
            {Object.keys(leaderboardData).map((period) => (
              <TabsContent key={period} value={period}>
                {loading ? (
                  <div className="cyber-card p-8 animate-pulse text-center">
                    <p className="text-cyber-blue">Loading leaderboard data...</p>
                  </div>
                ) : (
                  <div>
                    {/* Top 3 users with large display */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      {leaderboardData[period].slice(0, 3).map((user, index) => (
                        <div 
                          key={index}
                          className={`cyber-card p-6 flex flex-col items-center text-center ${
                            index === 0 ? 'border-yellow-400/50 md:order-2' : 
                            index === 1 ? 'border-gray-400/50 md:order-1' : 'border-amber-600/50 md:order-3'
                          } ${user.isCurrentUser ? 'bg-cyber-blue/10 border-cyber-blue' : ''}`}
                        >
                          <div className="relative mb-4">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-cyber-blue/30">
                              <img 
                                src={user.avatar} 
                                alt={user.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-cyber-darker flex items-center justify-center border border-cyber-blue/30">
                              {renderRankIcon(user.rank)}
                            </div>
                          </div>
                          
                          <h3 className="text-lg font-bold mb-1 flex items-center gap-1">
                            {user.name} {user.badge}
                          </h3>
                          
                          <div className="text-cyber-purple text-2xl font-bold mb-3">
                            {user.score.toLocaleString()} pts
                          </div>
                          
                          <div className="flex items-center justify-center text-sm text-cyber-light">
                            <Award className="w-4 h-4 mr-1" />
                            <span>{user.quizzesTaken} Quizzes</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Table view for other users */}
                    <div className="cyber-card overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-cyber-blue/20">
                              <th className="px-4 py-3 text-left">Rank</th>
                              <th className="px-4 py-3 text-left">User</th>
                              <th className="px-4 py-3 text-right">Score</th>
                              <th className="px-4 py-3 text-right hidden md:table-cell">Quizzes</th>
                              <th className="px-4 py-3 text-right hidden md:table-cell">Badge</th>
                            </tr>
                          </thead>
                          <tbody>
                            {leaderboardData[period].slice(3).map((user, index) => (
                              <tr 
                                key={index} 
                                className={`border-b border-cyber-blue/10 hover:bg-cyber-blue/5 ${
                                  user.isCurrentUser ? 'bg-cyber-blue/10' : ''
                                }`}
                              >
                                <td className="px-4 py-3">
                                  <div className="flex items-center">
                                    {renderRankIcon(user.rank)}
                                  </div>
                                </td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full overflow-hidden">
                                      <img 
                                        src={user.avatar} 
                                        alt={user.name} 
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <div>
                                      <span className={user.isCurrentUser ? 'font-bold text-cyber-blue' : ''}>
                                        {user.name}
                                        {user.isCurrentUser && <span className="ml-2 text-xs">(You)</span>}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-right font-medium">
                                  {user.score.toLocaleString()} pts
                                </td>
                                <td className="px-4 py-3 text-right hidden md:table-cell text-cyber-light">
                                  {user.quizzesTaken}
                                </td>
                                <td className="px-4 py-3 text-right hidden md:table-cell text-2xl">
                                  {user.badge}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="cyber-card p-6 mt-8">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Star className="text-cyber-yellow" />
              How to Climb the Leaderboard
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 text-cyber-blue">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-medium">Take more quizzes</span> - Each completed quiz adds to your score
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-cyber-blue">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-medium">Answer correctly</span> - Higher accuracy means more points
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-cyber-blue">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-medium">Answer quickly</span> - Faster answers earn bonus points
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-cyber-blue">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-medium">Complete harder quizzes</span> - More difficult quizzes award more points
                </div>
              </li>
            </ul>
          </div>
        </div>
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

export default Leaderboard;
