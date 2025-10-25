import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
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
    bio: "Leading Haryana's sports development with over 25 years of experience in state-level sports administration and athlete welfare programs.",
    image: "images/d1.jpeg",
    achievements: ["Former State Minister", "Sports Administration Expert", "Olympic Development Pioneer"]
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    position: "Secretary General",
    organization: "Haryana Olympic Association",
    bio: "PhD in Sports Science, dedicated to creating world-class training facilities and scientific sports development programs in Haryana.",
    image: "images/d3.jpeg",
    achievements: ["PhD Sports Science", "Former National Athlete", "Youth Development Expert"]
  },
  {
    id: 3,
    name: "Col. Vikram Singh",
    position: "Director of Operations",
    organization: "Haryana Olympic Association",
    bio: "Retired Army Colonel with expertise in discipline, training methodology, and strategic planning for high-performance sports programs.",
    image: "images/d4.jpeg",
    achievements: ["Military Sports Expert", "Strategic Planning Specialist", "Leadership Development"]
  },
  {
    id: 4,
    name: "Mrs. Sunita Rani",
    position: "Treasurer",
    organization: "Haryana Olympic Association",
    bio: "Former national-level athlete turned administrator, focusing on financial transparency and athlete welfare fund management.",
    image: "https://images.unsplash.com/photo-1690825019235-bd416d7ce6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBnb3Zlcm5tZW50JTIwb2ZmaWNpYWx8ZW58MXx8fHwxNzU4Nzg4MTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    achievements: ["Former National Athlete", "Financial Management Expert", "Athlete Welfare Advocate"]
  },
  {
    id: 5,
    name: "Shri Arun Chaudhary",
    position: "Technical Director",
    organization: "Haryana Olympic Association",
    bio: "International coaching expert specializing in technical development and performance analysis for emerging sports talents.",
    image: "https://images.unsplash.com/photo-1551862390-7894b509f8ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODcyNjYwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    achievements: ["International Coach", "Performance Analysis Expert", "Technical Innovation Leader"]
  }
];

export function DignitariesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Responsive cards display - like news section
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const maxIndex = Math.max(0, dignitaries.length - cardsToShow);

  const goToPrevious = () => {
    setCurrentIndex(prev => prev > 0 ? prev - 1 : maxIndex);
  };

  const goToNext = () => {
    setCurrentIndex(prev => prev < maxIndex ? prev + 1 : 0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <section id="dignitaries" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Haryana Olympic Leadership</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the distinguished leaders who guide Haryana's Olympic journey and champion sporting excellence across the state.
          </p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                width: `${(dignitaries.length / cardsToShow) * 100}%` 
              }}
            >
              {dignitaries.map((dignitary) => (
                <div 
                  key={dignitary.id} 
                  className="px-4"
                  style={{ width: `${100 / dignitaries.length}%` }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                    <CardContent className="p-0 h-full">
                      {/* Vertical Layout: 75% Image Top + 25% Text Bottom */}
                      <div className="flex flex-col h-96 w-full">
                        {/* Image Section - 75% (Top) */}
                        <div className="h-3/4 relative">
                          <ImageWithFallback
                            src={dignitary.image}
                            alt={dignitary.name}
                            className="w-full h-full object-cover rounded-t-lg"
                          />
                          {/* Position Badge */}
                          <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                            {dignitary.position.split(' ')[0]}
                          </Badge>
                          {/* Gradient overlay for better text readability */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 rounded-t-lg" />
                        </div>
                        
                        {/* Text Section - 25% (Bottom) */}
                        <div className="h-1/4 p-4 flex flex-col justify-between bg-white rounded-b-lg">
                          {/* Header Info */}
                          <div className="space-y-1">
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-1 leading-tight text-sm">{dignitary.name}</h3>
                              <p className="text-blue-600 font-medium text-xs mb-1">{dignitary.position}</p>
                            </div>
                            
                            <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">{dignitary.bio}</p>
                          </div>
                          
                          {/* Bottom Section - Achievements & Social */}
                          <div className="flex justify-between items-center">
                            {/* Achievements (compact) */}
                            <div className="flex flex-wrap gap-1">
                              {dignitary.achievements.slice(0, 2).map((achievement, index) => (
                                <Badge key={index} variant="secondary" className="text-[10px] px-1 py-0">
                                  {achievement.length > 15 ? `${achievement.substring(0, 12)}...` : achievement}
                                </Badge>
                              ))}
                            </div>
                            
                            {/* Social Links */}
                            <div className="flex space-x-1">
                              <Button size="sm" variant="ghost" className="p-1 h-6 w-6">
                                <Mail className="h-3 w-3" />
                              </Button>
                              <Button size="sm" variant="ghost" className="p-1 h-6 w-6">
                                <Linkedin className="h-3 w-3" />
                              </Button>
                              <Button size="sm" variant="ghost" className="p-1 h-6 w-6">
                                <Twitter className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="sm"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:shadow-xl h-12 w-12 rounded-full p-0 z-10"
            disabled={dignitaries.length <= cardsToShow}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:shadow-xl h-12 w-12 rounded-full p-0 z-10"
            disabled={dignitaries.length <= cardsToShow}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          {dignitaries.length > cardsToShow && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-600 scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Leaders
          </Button>
        </div>
      </div>
    </section>
  );
}