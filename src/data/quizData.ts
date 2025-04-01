
export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  category: "passwords" | "phishing" | "malware" | "privacy" | "general";
  difficulty: "easy" | "medium" | "hard";
  timeLimitInSeconds: number;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "What is the most secure way to store your passwords?",
    options: [
      { id: "q1_a", text: "Write them down in a notebook", isCorrect: false },
      { id: "q1_b", text: "Save them in a notes app on your phone", isCorrect: false },
      { id: "q1_c", text: "Use a password manager", isCorrect: true },
      { id: "q1_d", text: "Use the same password for all accounts", isCorrect: false }
    ],
    explanation: "Password managers encrypt your stored passwords and generate strong, unique passwords for each site you visit.",
    category: "passwords",
    difficulty: "easy",
    timeLimitInSeconds: 30
  },
  {
    id: "q2",
    question: "Which of the following is a sign of a phishing email?",
    options: [
      { id: "q2_a", text: "Comes from a personal email address of someone you know", isCorrect: false },
      { id: "q2_b", text: "Contains urgent language or threats", isCorrect: true },
      { id: "q2_c", text: "Has a proper company signature and logo", isCorrect: false },
      { id: "q2_d", text: "Only contains text with no attachments or links", isCorrect: false }
    ],
    explanation: "Urgency, threats, and pressure tactics are common in phishing attempts to make you act before thinking.",
    category: "phishing",
    difficulty: "easy",
    timeLimitInSeconds: 30
  },
  {
    id: "q3",
    question: "What is multi-factor authentication (MFA)?",
    options: [
      { id: "q3_a", text: "Using multiple passwords for the same account", isCorrect: false },
      { id: "q3_b", text: "A method that requires users to provide two or more verification factors to gain access", isCorrect: true },
      { id: "q3_c", text: "A type of encryption for your hard drive", isCorrect: false },
      { id: "q3_d", text: "Software that blocks ads and pop-ups", isCorrect: false }
    ],
    explanation: "MFA requires multiple forms of verification, typically something you know (password), something you have (phone), or something you are (fingerprint).",
    category: "general",
    difficulty: "medium",
    timeLimitInSeconds: 30
  },
  {
    id: "q4",
    question: "What should you do if you suspect your device is infected with malware?",
    options: [
      { id: "q4_a", text: "Continue using it normally to see if the problem goes away", isCorrect: false },
      { id: "q4_b", text: "Immediately turn off the device and disconnect it from the internet", isCorrect: true },
      { id: "q4_c", text: "Download more antivirus programs", isCorrect: false },
      { id: "q4_d", text: "Reset all your passwords on the same device", isCorrect: false }
    ],
    explanation: "Disconnecting from the internet prevents the malware from sending data out or downloading additional malicious code.",
    category: "malware",
    difficulty: "medium",
    timeLimitInSeconds: 30
  },
  {
    id: "q5",
    question: "What does a VPN (Virtual Private Network) do?",
    options: [
      { id: "q5_a", text: "Speeds up your internet connection", isCorrect: false },
      { id: "q5_b", text: "Removes viruses from your computer", isCorrect: false },
      { id: "q5_c", text: "Encrypts your internet traffic and masks your IP address", isCorrect: true },
      { id: "q5_d", text: "Blocks all websites that contain ads", isCorrect: false }
    ],
    explanation: "VPNs create an encrypted tunnel for your data, preventing others from seeing your online activity and hiding your true location.",
    category: "privacy",
    difficulty: "medium",
    timeLimitInSeconds: 30
  },
  {
    id: "q6",
    question: "What type of cyberattack involves encrypting a victim's data and demanding payment for the decryption key?",
    options: [
      { id: "q6_a", text: "Phishing", isCorrect: false },
      { id: "q6_b", text: "Ransomware", isCorrect: true },
      { id: "q6_c", text: "DDoS attack", isCorrect: false },
      { id: "q6_d", text: "Man-in-the-middle attack", isCorrect: false }
    ],
    explanation: "Ransomware encrypts files and demands payment (usually in cryptocurrency) to restore access.",
    category: "malware",
    difficulty: "hard",
    timeLimitInSeconds: 30
  },
  {
    id: "q7",
    question: "What is the best way to protect against social engineering attacks?",
    options: [
      { id: "q7_a", text: "Installing antivirus software", isCorrect: false },
      { id: "q7_b", text: "Using a firewall", isCorrect: false },
      { id: "q7_c", text: "User education and awareness", isCorrect: true },
      { id: "q7_d", text: "Regular system updates", isCorrect: false }
    ],
    explanation: "Social engineering targets human psychology rather than technical vulnerabilities, so awareness and education are the best defenses.",
    category: "general",
    difficulty: "hard",
    timeLimitInSeconds: 30
  },
  {
    id: "q8",
    question: "What is the purpose of keeping your software updated?",
    options: [
      { id: "q8_a", text: "To get new features only", isCorrect: false },
      { id: "q8_b", text: "To patch security vulnerabilities", isCorrect: true },
      { id: "q8_c", text: "To make your computer faster", isCorrect: false },
      { id: "q8_d", text: "To reduce storage space usage", isCorrect: false }
    ],
    explanation: "Software updates often include patches for security vulnerabilities that have been discovered since the previous version.",
    category: "general",
    difficulty: "easy",
    timeLimitInSeconds: 30
  },
  {
    id: "q9",
    question: "Which of the following is NOT a secure password practice?",
    options: [
      { id: "q9_a", text: "Using a different password for each account", isCorrect: false },
      { id: "q9_b", text: "Including special characters and numbers", isCorrect: false },
      { id: "q9_c", text: "Changing your passwords every 90 days", isCorrect: false },
      { id: "q9_d", text: "Using personal information like your birthday in your password", isCorrect: true }
    ],
    explanation: "Personal information is often publicly available or easy to guess, making passwords that include it vulnerable to attacks.",
    category: "passwords",
    difficulty: "medium",
    timeLimitInSeconds: 30
  },
  {
    id: "q10",
    question: "What is a 'zero-day vulnerability'?",
    options: [
      { id: "q10_a", text: "A security flaw that is known to the software vendor but has not been patched", isCorrect: false },
      { id: "q10_b", text: "A software bug that crashes your system after exactly zero days of use", isCorrect: false },
      { id: "q10_c", text: "A security vulnerability that is exploited before the vendor becomes aware of it", isCorrect: true },
      { id: "q10_d", text: "A type of malware that deletes all your data in zero days", isCorrect: false }
    ],
    explanation: "Zero-day vulnerabilities are particularly dangerous because there are no patches available at the time of exploitation.",
    category: "general",
    difficulty: "hard",
    timeLimitInSeconds: 30
  }
];

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockCriteria: {
    minScore: number;
    maxQuestionTime?: number; // in seconds
    specificCategory?: string;
  };
}

export const badges: Badge[] = [
  {
    id: "novice",
    title: "Cyber Novice",
    description: "Completed the quiz and started your cybersecurity journey",
    icon: "🔰",
    unlockCriteria: {
      minScore: 0 // Any score unlocks this
    }
  },
  {
    id: "intermediate",
    title: "Cyber Defender",
    description: "Achieved a score of 60% or higher",
    icon: "🛡️",
    unlockCriteria: {
      minScore: 0.6
    }
  },
  {
    id: "expert",
    title: "Cyber Expert",
    description: "Achieved a score of 80% or higher",
    icon: "🔐",
    unlockCriteria: {
      minScore: 0.8
    }
  },
  {
    id: "master",
    title: "Cyber Master",
    description: "Achieved a perfect score of 100%",
    icon: "⭐",
    unlockCriteria: {
      minScore: 1.0
    }
  },
  {
    id: "speedster",
    title: "Quick Thinker",
    description: "Completed all questions with at least 10 seconds remaining",
    icon: "⚡",
    unlockCriteria: {
      minScore: 0.5,
      maxQuestionTime: 20
    }
  },
  {
    id: "password_pro",
    title: "Password Pro",
    description: "Correctly answered all password-related questions",
    icon: "🔑",
    unlockCriteria: {
      minScore: 1.0,
      specificCategory: "passwords"
    }
  },
  {
    id: "phishing_hunter",
    title: "Phishing Hunter",
    description: "Correctly identified all phishing threats",
    icon: "🎣",
    unlockCriteria: {
      minScore: 1.0,
      specificCategory: "phishing"
    }
  }
];

export interface SecurityTip {
  id: string;
  title: string;
  description: string;
  categories: string[];
}

export const securityTips: SecurityTip[] = [
  {
    id: "tip1",
    title: "Use a Password Manager",
    description: "Password managers generate and store strong, unique passwords for all your accounts so you don't have to remember them.",
    categories: ["passwords", "general"]
  },
  {
    id: "tip2",
    title: "Enable Multi-Factor Authentication",
    description: "Adding a second verification method significantly reduces the risk of account compromise, even if your password is exposed.",
    categories: ["passwords", "general"]
  },
  {
    id: "tip3",
    title: "Check Email Sender Details",
    description: "Hover over links and check the actual email address (not just the display name) before clicking links or downloading attachments.",
    categories: ["phishing", "general"]
  },
  {
    id: "tip4",
    title: "Be Wary of Urgency",
    description: "Phishing attempts often create a false sense of urgency. Take your time to verify requests before taking action.",
    categories: ["phishing"]
  },
  {
    id: "tip5",
    title: "Keep Software Updated",
    description: "Regular updates patch security vulnerabilities and keep your systems protected against known threats.",
    categories: ["malware", "general"]
  },
  {
    id: "tip6",
    title: "Use Antivirus Software",
    description: "Keep real-time protection enabled and run regular scans to detect and remove malicious software.",
    categories: ["malware"]
  },
  {
    id: "tip7",
    title: "Back Up Your Data",
    description: "Regular backups to external devices or secure cloud services protect your data from ransomware and device failures.",
    categories: ["malware", "general"]
  },
  {
    id: "tip8",
    title: "Use a VPN on Public Wi-Fi",
    description: "VPNs encrypt your connection, protecting your data from eavesdropping on unsecured networks.",
    categories: ["privacy", "general"]
  },
  {
    id: "tip9",
    title: "Review App Permissions",
    description: "Regularly check and limit what information your apps can access on your devices.",
    categories: ["privacy"]
  },
  {
    id: "tip10",
    title: "Use Strong, Unique Passwords",
    description: "Create passwords with at least 12 characters including numbers, symbols, and mixed case letters.",
    categories: ["passwords"]
  }
];
