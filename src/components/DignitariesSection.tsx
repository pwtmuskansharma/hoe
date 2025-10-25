import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

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

export function DignitariesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide
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
    setCurrentIndex((prev) => (prev - 1 + dignitaries.length) % dignitaries.length);
  };

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Guiding force behind HOA
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Meet the distinguished leaders who guide Haryana&apos;s Olympic journey
              and champion sporting excellence across the state.
            </p>
          </div>

          {/* Image Slider */}
          <div
            className="relative flex items-center justify-center overflow-hidden"
            style={{ minHeight: 400 }}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${dignitaries.length * 100}%`,
              }}
            >
              {dignitaries.map((d, idx) => (
                <div key={d.id} className="w-full flex-shrink-0 flex justify-center">
                  <Card
                    className={`transition-all duration-700 ease-in-out w-1/3 ${
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
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                        <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                          {d.position.split(" ")[0]}
                        </Badge>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 rounded-t-lg" />
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
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm h-12 w-12 rounded-full p-0 z-20"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm h-12 w-12 rounded-full p-0 z-20"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Constant Text */}
          <div className="mt-8 max-w-2xl mx-auto text-center transition-opacity duration-500 ease-in-out">
            {/* <h3 className="text-xl font-semibold text-gray-900">
              {dignitaries[currentIndex].name}
            </h3>
            <p className="text-sm text-gray-600">
              {dignitaries[currentIndex].position},{" "}
              {dignitaries[currentIndex].organization}
            </p> */}
            <p className="mt-4 text-gray-500">
              {dignitaries[currentIndex].bio}
            </p>
          </div>
        </div>
      </section>

      {/* Full Video Section */}
      <section className="w-full bg-black">
        <div className="relative w-full h-[800px] flex items-center justify-center">
          <video
            className="w-full h-full object-contain bg-black"
            src="/videos/hoa-video.mp4" // replace with your video path
            controls
            playsInline
            controlsList="nodownload"
          />
        </div>
      </section>
    </>
  );
}
