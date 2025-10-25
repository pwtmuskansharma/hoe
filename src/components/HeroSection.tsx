import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Users, Trophy, Calendar } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Haryana's Journey to Olympic Glory
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Leading India's Olympic aspirations through world-class training, dedicated athletes, 
              and unwavering commitment to sporting excellence in Haryana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Explore Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Latest Updates
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-blue-300">
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-blue-200">Active Athletes</div>
              </div>
              <div className="text-center">
                <Trophy className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                <div className="text-2xl font-bold">25</div>
                <div className="text-sm text-blue-200">Sports Disciplines</div>
              </div>
              <div className="text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                <div className="text-2xl font-bold">15</div>
                <div className="text-sm text-blue-200">Olympic Medals</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="/images/HOA.webp"
              alt="Olympic ceremony with rings and stadium"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}