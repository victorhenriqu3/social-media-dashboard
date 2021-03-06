const StatsSelect = (Social: string) => {
  let Stats: any = {
    Facebook: [
      {
        id: 1,
        Title: "Page Views",
        SocialMedia: "Facebook",
        Stats: 87,
        NewStats: 3,
        UpStats: true,
      },
      {
        id: 2,
        Title: "Likes",
        SocialMedia: "Facebook",
        Stats: 52,
        NewStats: 2,
        UpStats: false,
      },
    ],
    Instagram: [
      {
        id: 3,
        Title: "Likes",
        SocialMedia: "Instagram",
        Stats: 5462,
        NewStats: 2257,
        UpStats: true,
      },
      {
        id: 4,
        Title: "Profile Views",
        SocialMedia: "Instagram",
        Stats: 52000,
        NewStats: 1375,
        UpStats: true,
      },
    ],
    Twitter: [
      {
        id: 5,
        Title: "Retweets",
        SocialMedia: "Twitter",
        Stats: 117,
        NewStats: 303,
        UpStats: true,
      },
      {
        id: 6,
        Title: "Likes",
        SocialMedia: "Twitter",
        Stats: 507,
        NewStats: 553,
        UpStats: true,
      },
    ],
    YouTube: [
      {
        id: 7,
        Title: "Likes",
        SocialMedia: "YouTube",
        Stats: 107,
        NewStats: 19,
        UpStats: false,
      },
      {
        id: 8,
        Title: "Total Views",
        SocialMedia: "YouTube",
        Stats: 1407,
        NewStats: 12,
        UpStats: false,
      },
    ],
  };
  return Stats[Social] || {};
};

export default StatsSelect;
