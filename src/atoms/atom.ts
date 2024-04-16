import { atom } from "recoil";

interface Course {
  id: Number;
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

export const allCourseAtom = atom<Course[]>({
  key: "allCourseAtom",
  default: [
    {
      id: 1,
      title: "Introduction to Data Science",
      description: "Learn the fundamentals of data science and analysis.",
      imageUrl: "https://example.com/intro-to-data-science.jpg",
      watchHours: 20,
      actualWatchHours: 15,
      totalReviews: 50,
      category: ["Data Science", "Technology"],
      upVotes: 100,
      downVotes: 5,
      url: "https://example.com/intro-to-data-science",
      clicksReceived: 200,
      isSponsored: true,
      publisherId: "publisher123",
    },
    {
      id: 2,
      title: "Beginner's Guide to Python",
      description: "Start your programming journey with Python.",
      imageUrl: "https://example.com/beginners-python.jpg",
      watchHours: 10,
      actualWatchHours: 8,
      totalReviews: 30,
      category: ["Programming", "Python"],
      upVotes: 80,
      downVotes: 2,
      url: "https://example.com/beginners-python",
      clicksReceived: 150,
      isSponsored: false,
      publisherId: "publisher456",
    },
    {
      id: 3,
      title: "Mastering JavaScript",
      description: "Become a JavaScript expert with comprehensive lessons.",
      imageUrl: "https://example.com/mastering-javascript.jpg",
      watchHours: 25,
      actualWatchHours: 20,
      totalReviews: 70,
      category: ["Programming", "JavaScript"],
      upVotes: 120,
      downVotes: 8,
      url: "https://example.com/mastering-javascript",
      clicksReceived: 250,
      isSponsored: true,
      publisherId: "publisher789",
    },
    {
      id: 4,
      title: "Artificial Intelligence Essentials",
      description:
        "Discover the essentials of artificial intelligence and machine learning.",
      imageUrl: "https://example.com/ai-essentials.jpg",
      watchHours: 15,
      actualWatchHours: 12,
      totalReviews: 40,
      category: ["Artificial Intelligence", "Technology"],
      upVotes: 90,
      downVotes: 3,
      url: "https://example.com/ai-essentials",
      clicksReceived: 180,
      isSponsored: false,
      publisherId: "publisher101",
    },
    {
      id: 5,
      title: "Web Development Bootcamp",
      description: "Learn full-stack web development from scratch.",
      imageUrl: "https://example.com/web-dev-bootcamp.jpg",
      watchHours: 30,
      actualWatchHours: 25,
      totalReviews: 80,
      category: ["Web Development", "Programming"],
      upVotes: 150,
      downVotes: 10,
      url: "https://example.com/web-dev-bootcamp",
      clicksReceived: 300,
      isSponsored: true,
      publisherId: "publisher202",
    },
  ],
});
