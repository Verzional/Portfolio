import { GitBranch, Link, X, Mail, Briefcase } from "lucide-react";

export const socialsData = [
  {
    id: "github",
    name: "GitHub",
    icon: GitBranch,
    url: "https://github.com/verzional",
    handle: "@verzional",
    messages: [
      { sender: "them", text: "System Alert: New Pull Request submitted." },
      { sender: "me", text: "Reviewing code changes now..." },
      { sender: "me", text: "LGTM! Merging into the main branch." },
      { sender: "them", text: "Deployment successful. All systems operational." },
    ],
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: Link,
    url: "https://linkedin.com/in/verzional",
    handle: "Verzional",
    messages: [
      { sender: "them", text: "You appeared in 24 searches this week." },
      { sender: "them", text: "New connection request: Recruiter at Tech Corp." },
      { sender: "me", text: "Accepting request. Time to update the resume?" },
    ],
  },
  {
    id: "email",
    name: "Email",
    icon: Mail,
    url: "mailto:hello@verzional.com",
    handle: "hello@verzional.com",
    messages: [
      { sender: "them", text: "Incoming Transmission: Freelance Inquiry." },
      { sender: "them", text: "We need a Full-Stack Engineer for a new project." },
      { sender: "me", text: "I'm available. Let's schedule a brief call." },
    ],
  },
  {
    id: "x",
    name: "X (Twitter)",
    icon: X,
    url: "https://twitter.com/verzional",
    handle: "@verzional",
    messages: [
      { sender: "me", text: "Just pushed a massive UI update to the portfolio." },
      { sender: "them", text: "12 new notifications: Retweets and likes." },
    ],
  },
];
