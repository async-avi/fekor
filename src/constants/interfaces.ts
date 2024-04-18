export interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  watchHours: number;
  actualWatchHours: number;
  totalReviews: number;
  category: string[];
  upVotes: number;
  downVotes: number;
  url: string;
  clicksReceived: number;
  isSponsored: boolean;
  publisherId: string;
}
