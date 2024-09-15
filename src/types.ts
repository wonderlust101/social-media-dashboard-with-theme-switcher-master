// Type definition for each social media entry
export interface SocialMediaDataEntry {
    socialMedia: string;
    stats: SocialMediaStats;
}

// Type definition for the individual stats of each social media platform
export interface SocialMediaStats {
    handle: string;
    followers: number;
    newFollowers: number;
    views: number | null;
    viewsIncRate: number | null;
    likes: number;
    likeIncRate: number;
    retweet: number | null;
    retweetIncRate: number | null;
}
