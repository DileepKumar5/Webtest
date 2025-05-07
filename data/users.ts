export interface User {
    id: number;
    name: string;
    phone: string;
    branch: string;
    connectedApps: string[]; // icon filenames
    tags: string[];
    enforce: boolean;
    avatar: string; // path to avatar image
  }
  
  export const users: User[] = [
    {
      id: 1,
      name: "Sophia Lee",
      phone: "(702) 555-1234",
      branch: "Las Vegas, NV",
      connectedApps: ["google-analytics.svg", "jira.svg"],
      tags: ["Communications", "Collaboration"],
      enforce: false,
      avatar: "/avatars/300-2.png",
    },
    {
      id: 2,
      name: "Mason Lewis",
      phone: "(213) 555-7891",
      branch: "Los Angeles, CA",
      connectedApps: ["slack.svg", "figma.svg"],
      tags: ["Professional Network", "Recruitment"],
      enforce: true,
      avatar: "/avatars/300-30.png",
    },
    // Add 3 more users if needed
  ];
  