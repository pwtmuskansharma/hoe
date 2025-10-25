import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dignitaries Data
const dignitaries = [
  {
    id: 1,
    name: "Nayab Singh Saini",
    position: "President",
    organization: "Haryana Olympic Association",
    bio: "Mr. Meenu Beniwal has been appointed as the President of the Haryana Association (HOA). With his vision and leadership, we look forward to expanding opportunities in sports, strengthening community bonds, and creating new avenues of growth and development. Together, under his guidance, HOA is set to achieve greater milestones and inspire future generations.",
    image: "images/d1.jpeg",
  },
  {
    id: 2,
    name: "Manohar Lal Khattar",
    position: "Secretary General",
    organization: "Haryana Olympic Association",
    bio: "Mr. Meenu Beniwal has been appointed as the President of the Haryana Association (HOA). With his vision and leadership, we look forward to expanding opportunities in sports, strengthening community bonds, and creating new avenues of growth and development. Together, under his guidance, HOA is set to achieve greater milestones and inspire future generations.",
    image: "images/d3.jpeg",
  },
  {
    id: 3,
    name: "Nayab Singh Saini",
    position: "Director of Operations",
    organization: "Haryana Olympic Association",
    bio: "Mr. Meenu Beniwal has been appointed as the President of the Haryana Association (HOA). With his vision and leadership, we look forward to expanding opportunities in sports, strengthening community bonds, and creating new avenues of growth and development. Together, under his guidance, HOA is set to achieve greater milestones and inspire future generations.",
    image: "images/d4.jpeg",
  },
  {
    id: 4,
    name: "Pt. Usha",
    position: "Director of Operations",
    organization: "Haryana Olympic Association",
    bio: "Mr. Meenu Beniwal has been appointed as the President of the Haryana Association (HOA). With his vision and leadership, we look forward to expanding opportunities in sports, strengthening community bonds, and creating new avenues of growth and development. Together, under his guidance, HOA is set to achieve greater milestones and inspire future generations.",
    image: "images/d2_.jpeg",
  },
];

// News Data
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
];

// Combined Component
export function CombinedHOASection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide for dignitaries
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dignitaries.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % dignitaries.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + dignitaries.length) % dignitaries.length
    );
  };

  // News slider settings
  const newsSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - News */}
          <div>
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Latest HOA NEWS
              </h2>
              <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                Stay updated with the latest developments in the Olympic
                movement, upcoming events, and inspiring stories.
              </p>
            </div>

            <Slider {...newsSettings}>
              {newsArticles.map((article) => (
                <div key={article.id} className="px-2">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600">{article.excerpt}</p>
                      <div className="mt-3 text-sm text-gray-500">
                        {article.date} • {article.readTime}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </Slider>

            <div className="text-center lg:text-left mt-6">
              <Button size="lg" variant="outline">
                View All News
              </Button>
            </div>
          </div>

          {/* Right Column - Dignitaries */}
          <div>
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Guiding force behind HOA
              </h2>
              <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                Meet the distinguished leaders who guide Haryana&apos;s Olympic
                journey and champion sporting excellence across the state.
              </p>
            </div>

            <div className="relative flex items-center justify-center overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  width: `${dignitaries.length * 100}%`,
                }}
              >
                {dignitaries.map((d, idx) => (
                  <div
                    key={d.id}
                    className="w-full flex-shrink-0 flex justify-center"
                  >
                    <Card
                      className={`transition-all duration-700 ease-in-out w-2/3 ${
                        idx === currentIndex
                          ? "scale-100 opacity-100 z-10"
                          : "scale-90 opacity-50 blur-sm"
                      }`}
                    >
                      <CardContent className="p-0 h-full flex flex-col">
                        <div className="h-full relative w-full">
                          <ImageWithFallback
                            src={d.image}
                            alt={d.name}
                            className="w-full h-64 object-cover rounded-t-lg"
                          />
                          <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                            {d.position.split(" ")[0]}
                          </Badge>
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="text-lg font-semibold">{d.name}</h3>
                          <p className="text-sm text-gray-500">{d.position}</p>
                          <p className="mt-2 text-gray-600 text-sm">{d.bio}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <Button
                variant="ghost"
                size="sm"
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm h-10 w-10 rounded-full p-0 z-20"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={goToNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm h-10 w-10 rounded-full p-0 z-20"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
