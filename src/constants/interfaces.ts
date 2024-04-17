export interface Course {
  id: number;
  title: String;
  description: String;
  imageUrl: String;
  watchHours: Number;
  actualWatchHours: Number;
  totalReviews: Number;
  category: String[];
  upVotes: Number;
  downVotes: Number;
  url: String;
  clicksReceived: Number;
  isSponsored: Boolean;
  publisherId: String;
}
