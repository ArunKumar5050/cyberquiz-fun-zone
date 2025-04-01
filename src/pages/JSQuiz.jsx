
import { useState, useEffect, useCallback } from "react";
import { useToast } from "@/components/ui/use-toast";
import { quizQuestions, badges, securityTips } from "@/data/quizData";
import QuizOption from "@/components/QuizOption";
import Timer from "@/components/Timer";
import ProgressBar from "@/components/ProgressBar";
import Badge from "@/components/Badge";
import SecurityTip from "@/components/SecurityTip";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  RotateCcw, 
  Trophy, 
  Clock, 
  CheckCircle2, 
  XCircle,
  ShieldAlert,
  Brain
} from "lucide-react";

const JSQuiz = () => {
  const { toast } = useToast();
  const [quizState, setQuizState] = useState("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [scores, setScores] = useState({});
  const [questionTimes, setQuestionTimes] = useState({});
  const [timeoutId, setTimeoutId] = useState(null);
  
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

  const correctAnswers = Object.values(scores).filter(score => score).length;
  const totalScore = correctAnswers / quizQuestions.length;
  const averageTime = Object.values(questionTimes).reduce((sum, time) => sum + time, 0) / quizQuestions.length;

  // Determine which badges the user has earned
  const earnedBadges = badges.filter(badge => {
    if (totalScore < badge.unlockCriteria.minScore) return false;
    
    // Check for time criteria
    if (badge.unlockCriteria.maxQuestionTime && averageTime > badge.unlockCriteria.maxQuestionTime) {
      return false;
    }
    
    // Check for category-specific criteria
    if (badge.unlockCriteria.specificCategory) {
      const categoryQuestions = quizQuestions.filter(q => 
        q.category === badge.unlockCriteria.specificCategory
      );
      
      const categoryScores = categoryQuestions.every(q => scores[q.id] === true);
      if (!categoryScores) return false;
    }
    
    return true;
  });

  // Generate personalized security tips based on performance
  const generatePersonalizedTips = useCallback(() => {
    const tipsToShow = [];
    const weakCategories = new Set();
    
    // Identify weak categories (categories where the user got questions wrong)
    quizQuestions.forEach(question => {
      if (!scores[question.id]) {
        weakCategories.add(question.category);
      }
    });
    
    // First add tips for weak categories
    securityTips.forEach(tip => {
      tip.categories.forEach(cat => {
        if (weakCategories.has(cat) && !tipsToShow.some(t => t.id === tip.id)) {
          tipsToShow.push(tip);
        }
      });
    });
    
    // If we have less than 3 tips, add general tips
    if (tipsToShow.length < 3) {
      securityTips.forEach(tip => {
        if (tip.categories.includes("general") && 
            !tipsToShow.some(t => t.id === tip.id) && 
            tipsToShow.length < 3) {
          tipsToShow.push(tip);
        }
      });
    }
    
    return tipsToShow.slice(0, 3);
  }, [scores]);

  const handleStartQuiz = () => {
    setQuizState("progress");
    setCurrentQuestionIndex(0);
    setScores({});
    setQuestionTimes({});
    setSelectedOption(null);
    setIsAnswerRevealed(false);
  };
  
  const handleSelectOption = (optionId) => {
    if (isAnswerRevealed) return;
    
    setSelectedOption(optionId);
    setIsAnswerRevealed(true);
    
    // Record the time taken to answer
    setQuestionTimes(prev => ({
      ...prev,
      [currentQuestion.id]: currentQuestion.timeLimitInSeconds - (timeoutId ? timeoutId : 0)
    }));
    
    // Check if answer is correct
    const selectedOptionObj = currentQuestion.options.find(o => o.id === optionId);
    const isCorrect = selectedOptionObj?.isCorrect || false;
    
    setScores(prev => ({
      ...prev,
      [currentQuestion.id]: isCorrect
    }));
    
    // Show feedback toast
    toast({
      title: isCorrect ? "Correct!" : "Incorrect",
      description: currentQuestion.explanation,
      variant: isCorrect ? "default" : "destructive",
    });
  };

  const handleTimeUp = () => {
    if (!selectedOption) {
      toast({
        title: "Time's up!",
        description: "You didn't select an answer in time.",
        variant: "destructive",
      });
      
      setIsAnswerRevealed(true);
      setScores(prev => ({
        ...prev,
        [currentQuestion.id]: false
      }));
      
      setQuestionTimes(prev => ({
        ...prev,
        [currentQuestion.id]: currentQuestion.timeLimitInSeconds
      }));
    }
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setQuizState("results");
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerRevealed(false);
    }
  };

  const handleRestartQuiz = () => {
    setQuizState("intro");
    setCurrentQuestionIndex(0);
    setScores({});
    setQuestionTimes({});
    setSelectedOption(null);
    setIsAnswerRevealed(false);
  };

  // Render different content based on quiz state
  const renderContent = () => {
    switch (quizState) {
      case "intro":
        return (
          <div className="animate-fade-in">
            <div className="cyber-card p-8 max-w-2xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-cyber-blue mb-4">
                JavaScript Cybersecurity Quiz
              </h1>
              <p className="text-lg mb-6 text-cyber-light">
                Test your knowledge and learn important cybersecurity tips! (JavaScript Version)
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="cyber-card p-4 flex items-start gap-3">
                  <div className="text-cyber-blue mt-1">
                    <Brain size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold mb-1">Test Your Knowledge</h3>
                    <p className="text-sm text-cyber-light">Answer 10 questions about cybersecurity best practices.</p>
                  </div>
                </div>
                
                <div className="cyber-card p-4 flex items-start gap-3">
                  <div className="text-cyber-purple mt-1">
                    <Trophy size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold mb-1">Earn Badges</h3>
                    <p className="text-sm text-cyber-light">Collect achievements based on your performance.</p>
                  </div>
                </div>
                
                <div className="cyber-card p-4 flex items-start gap-3">
                  <div className="text-cyber-green mt-1">
                    <Clock size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold mb-1">Race Against Time</h3>
                    <p className="text-sm text-cyber-light">Each question has a time limit to test your quick thinking.</p>
                  </div>
                </div>
                
                <div className="cyber-card p-4 flex items-start gap-3">
                  <div className="text-cyber-yellow mt-1">
                    <ShieldAlert size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold mb-1">Learn Security Tips</h3>
                    <p className="text-sm text-cyber-light">Get personalized security advice based on your results.</p>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={handleStartQuiz}
                className="bg-cyber-blue hover:bg-cyber-blue/80 text-black font-bold py-3 px-8 text-lg"
              >
                Start Quiz <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        );
        
      case "progress":
        return (
          <div className="animate-fade-in">
            <div className="cyber-card p-6 max-w-2xl mx-auto">
              <ProgressBar 
                currentQuestion={currentQuestionIndex + 1} 
                totalQuestions={quizQuestions.length} 
              />
              
              <div className="mt-6 mb-4">
                <Timer 
                  duration={currentQuestion.timeLimitInSeconds} 
                  onTimeUp={handleTimeUp}
                  isActive={!isAnswerRevealed}
                />
              </div>
              
              <h2 className="text-xl md:text-2xl font-bold my-6">
                {currentQuestion.question}
              </h2>
              
              <div className="space-y-2 mb-6">
                {currentQuestion.options.map((option) => (
                  <QuizOption
                    key={option.id}
                    id={option.id}
                    text={option.text}
                    isCorrect={option.isCorrect}
                    isSelected={selectedOption === option.id}
                    isRevealed={isAnswerRevealed}
                    onSelect={handleSelectOption}
                    disabled={isAnswerRevealed}
                  />
                ))}
              </div>
              
              {isAnswerRevealed && (
                <div className="mt-4 mb-6 p-4 cyber-card border-l-4 border-l-cyber-blue bg-cyber-blue/10">
                  <h3 className="font-bold text-cyber-blue mb-2">Explanation:</h3>
                  <p className="text-cyber-light">{currentQuestion.explanation}</p>
                </div>
              )}
              
              {isAnswerRevealed && (
                <Button 
                  onClick={handleNextQuestion}
                  className="w-full py-3 bg-cyber-blue hover:bg-cyber-blue/80 text-black font-bold"
                >
                  {isLastQuestion ? "See Results" : "Next Question"} 
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              )}
            </div>
          </div>
        );
        
      case "results":
        const personalizedTips = generatePersonalizedTips();
        return (
          <div className="animate-fade-in">
            <div className="cyber-card p-6 max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold text-cyber-blue mb-4">
                Quiz Results
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="cyber-card p-4 flex flex-col items-center">
                  <div className="text-cyber-blue mb-2">
                    <Trophy size={32} />
                  </div>
                  <p className="text-sm text-cyber-light">Score</p>
                  <p className="text-2xl font-bold">
                    {Math.round(totalScore * 100)}%
                  </p>
                </div>
                
                <div className="cyber-card p-4 flex flex-col items-center">
                  <div className="text-cyber-green mb-2">
                    <CheckCircle2 size={32} />
                  </div>
                  <p className="text-sm text-cyber-light">Correct</p>
                  <p className="text-2xl font-bold">
                    {correctAnswers} / {quizQuestions.length}
                  </p>
                </div>
                
                <div className="cyber-card p-4 flex flex-col items-center">
                  <div className="text-cyber-yellow mb-2">
                    <Clock size={32} />
                  </div>
                  <p className="text-sm text-cyber-light">Avg. Time</p>
                  <p className="text-2xl font-bold">
                    {Math.round(averageTime)}s
                  </p>
                </div>
              </div>
              
              <Separator className="my-6 bg-cyber-blue/30" />
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <Trophy className="mr-2 text-cyber-purple" />
                  Your Badges
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {badges.map((badge) => (
                    <Badge
                      key={badge.id}
                      title={badge.title}
                      description={badge.description}
                      icon={badge.icon}
                      unlocked={earnedBadges.some(b => b.id === badge.id)}
                    />
                  ))}
                </div>
              </div>
              
              <Separator className="my-6 bg-cyber-blue/30" />
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <ShieldAlert className="mr-2 text-cyber-yellow" />
                  Security Tips For You
                </h2>
                <div className="space-y-4">
                  {personalizedTips.map((tip) => (
                    <SecurityTip
                      key={tip.id}
                      title={tip.title}
                      description={tip.description}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button 
                  onClick={handleRestartQuiz}
                  className="flex-1 bg-cyber-blue hover:bg-cyber-blue/80 text-black font-bold py-3"
                >
                  <RotateCcw className="mr-2" size={18} />
                  Restart Quiz
                </Button>
                
                <Button 
                  onClick={() => setQuizState("intro")}
                  className="flex-1 bg-cyber-darker border border-cyber-blue/50 hover:bg-cyber-blue/20 text-cyber-blue font-bold py-3"
                >
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full bg-cyber-dark pb-16 px-4">
      <div className="container mx-auto py-8 max-w-4xl">
        {renderContent()}
      </div>
    </div>
  );
};

export default JSQuiz;
