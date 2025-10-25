import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Mail, Linkedin, Twitter, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const dignitaries = [
  {
    id: 1,
    name: "Shri Rajesh Kumar",
    position: "President",
    organization: "Haryana Olympic Association",
    bio: "Mr. Meenu Beniwal has been appointed as the President of the Haryana Association (HOA). With his vision and leadership, we look forward to expanding opportunities in sports, strengthening community bonds, and creating new avenues of growth and development. Together, under his guidance, HOA is set to achieve greater milestones and inspire future generations.",
    image: "images/d1.jpeg",
    achievements: ["Former State Minister", "Sports Administration Expert", "Olympic Development Pioneer"]
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    position: "Secretary General",
    organization: "Haryana Olympic Association",
    bio: "Mr. Meenu Beniwal has been appointed as the President of the Haryana Association (HOA). With his vision and leadership, we look forward to expanding opportunities in sports, strengthening community bonds, and creating new avenues of growth and development. Together, under his guidance, HOA is set to achieve greater milestones and inspire future generations.",
    image: "images/d3.jpeg",
    achievements: ["PhD Sports Science", "Former National Athlete", "Youth Development Expert"]
  },
  {
    id: 3,
    name: "Col. Vikram Singh",
    position: "Director of Operations",
    organization: "Haryana Olympic Association",
    bio: "Mr. Meenu Beniwal has been appointed as the President of the Haryana Association (HOA). With his vision and leadership, we look forward to expanding opportunities in sports, strengthening community bonds, and creating new avenues of growth and development. Together, under his guidance, HOA is set to achieve greater milestones and inspire future generations.",
    image: "images/d4.jpeg",
    achievements: ["Military Sports Expert", "Strategic Planning Specialist", "Leadership Development"]
  },
  {
    id: 4,
    name: "Col. Vikram Singh",
    position: "Director of Operations",
    organization: "Haryana Olympic Association",
    bio: "Mr. Meenu Beniwal has been appointed as the President of the Haryana Association (HOA). With his vision and leadership, we look forward to expanding opportunities in sports, strengthening community bonds, and creating new avenues of growth and development. Together, under his guidance, HOA is set to achieve greater milestones and inspire future generations.",
    image: "images/d2_.jpeg",
    achievements: ["Military Sports Expert", "Strategic Planning Specialist", "Leadership Development"]
  },
];

export function DignitariesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Responsive cards count
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + dignitaries.length) % dignitaries.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % dignitaries.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index % dignitaries.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Haryana Olympic Leadership
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the distinguished leaders who guide Haryana's Olympic journey
            and champion sporting excellence across the state.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              width: `${(dignitaries.length / cardsToShow) * 100}%`,
            }}
          >
            {dignitaries.map((dignitary, index) => (
              <div
                key={index}
                className="px-4"
                style={{ width: `${100 / dignitaries.length}%` }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="h-full relative w-full">
                      <ImageWithFallback
                        src={dignitary.image}
                        alt={dignitary.name}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                        {dignitary.position.split(" ")[0]}
                      </Badge>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 rounded-t-lg" />
                    </div>
                    <div className="h-1/3 p-4 flex flex-col justify-between bg-white rounded-b-lg">
                      <p className="text-gray-500 text-sm">{dignitary.bio}</p>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm h-12 w-12 rounded-full p-0"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm h-12 w-12 rounded-full p-0"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {Array.from({ length: dignitaries.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
