import React from "react";
import Slider from "react-slick";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const newsArticles = [
  {
    id: 1,
    title: "PHaryana Athletes Shine at National Games 2025",
    excerpt:
      "Haryana's athletes won multiple gold and silver medals at the National Games, showcasing the state's growing sports talent.",
    category: "Achievements",
    date: "2024-09-20",
    readTime: "5 min read",
    image: "images/news1.jpg",
  },
  {
    id: 2,
    title: "Haryana Olympic Association Launches Youth Sports Initiative",
    excerpt:
      "HOA introduces a new program to nurture young athletes across Haryana, providing training, mentorship, and scholarships.",
    category: "Youth Development",
    date: "2024-09-18",
    readTime: "3 min read",
    image: "images/d2_.jpeg",
  },
  {
    id: 3,
    title: "Haryana Hosts State-Level Athletics Championship",
    excerpt:
      "The state-level athletics championship brought together top talent from across Haryana, promoting healthy competition and sportsmanship.",
    category: "Events",
    date: "2024-09-15",
    readTime: "4 min read",
    image: "images/news3.jpeg",
  },
    {
    id: 1,
    title: "PHaryana Athletes Shine at National Games 2025",
    excerpt:
      "Haryana's athletes won multiple gold and silver medals at the National Games, showcasing the state's growing sports talent.",
    category: "Achievements",
    date: "2024-09-20",
    readTime: "5 min read",
    image: "images/news1.jpg",
  },
  {
    id: 2,
    title: "Haryana Olympic Association Launches Youth Sports Initiative",
    excerpt:
      "HOA introduces a new program to nurture young athletes across Haryana, providing training, mentorship, and scholarships.",
    category: "Youth Development",
    date: "2024-09-18",
    readTime: "3 min read",
    image: "images/d2_.jpeg",
  },
  {
    id: 3,
    title: "Haryana Hosts State-Level Athletics Championship",
    excerpt:
      "The state-level athletics championship brought together top talent from across Haryana, promoting healthy competition and sportsmanship.",
    category: "Events",
    date: "2024-09-15",
    readTime: "4 min read",
    image: "images/news3.jpeg",
  },
];

export function NewsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards visible horizontally
    slidesToScroll: 1,
    autoplay: true,           // ✅ Enable autoplay
    autoplaySpeed: 2000,      // ✅ Time between slides (3s)
    pauseOnHover: true,
    vertical: false, // Important: ensures horizontal scroll
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest HOA NEWS
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Stay updated with the latest developments in the Olympic movement,
            upcoming events, and inspiring stories.
          </p>
        </div>

        <Slider {...settings}>
          {newsArticles.map((article) => (
            <div key={article.id} className="px-2">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-94 object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  {/* <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600">{article.excerpt}</p>
                  <div className="mt-3 text-sm text-gray-500">
                    {article.date} • {article.readTime}
                  </div> */}
                </div>
              </Card>
            </div>
          ))}
        </Slider>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
}
