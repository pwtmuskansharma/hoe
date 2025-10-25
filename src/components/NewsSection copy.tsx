import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const newsArticles = [
  {
    id: 1,
    title: "PHaryana Athletes Shine at National Games 2025",
    excerpt: "Haryana's athletes won multiple gold and silver medals at the National Games, showcasing the state's growing sports talent.",
    category: "Achievements",
    date: "2024-09-20",
    readTime: "5 min read",
    image: "images/news1.jpg"
  },
  {
    id: 2,
    title: "Haryana Olympic Association Launches Youth Sports Initiative",
    excerpt: "HOA introduces a new program to nurture young athletes across Haryana, providing training, mentorship, and scholarships.",
    category: "Youth Development",
    date: "2024-09-18",
    readTime: "3 min read",
    image: "images/d2_.jpeg"
  },
  {
    id: 3,
    title: "Haryana Hosts State-Level Athletics Championship",
    excerpt: "The state-level athletics championship brought together top talent from across Haryana, promoting healthy competition and sportsmanship.",
    category: "Events",
    date: "2024-09-15",
    readTime: "4 min read",
    image: "images/news3.jpeg"
  }
];

export function NewsSection() {
  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest HOA NEWS</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest developments in the Olympic movement, upcoming events, and inspiring stories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-94 object-cover rounded-t-lg"
                />
                {/* <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                  {article.category}
                </Badge> */}
              </div>
              
              {/* <CardHeader>
                <CardTitle className="line-clamp-2 hover:text-blue-600 transition-colors">
                  {article.title}
                </CardTitle>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </CardHeader> */}
              
              {/* <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent> */}
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
}