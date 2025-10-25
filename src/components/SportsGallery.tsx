import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Play, Eye, Heart } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Swimming Excellence",
    sport: "Swimming",
    image: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbHltcGljJTIwc3dpbW1pbmclMjBwb29sfGVufDF8fHx8MTc1ODc3NTIzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "Photo",
    views: "12.5K",
    likes: "856"
  },
  {
    id: 2,
    title: "Track & Field Glory",
    sport: "Athletics",
    image: "https://images.unsplash.com/photo-1690289082557-3ea18ca34fa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbHltcGljJTIwdHJhY2slMjBmaWVsZHxlbnwxfHx8fDE3NTg3NzUyMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "Video",
    views: "25.3K",
    likes: "1.2K"
  },
  {
    id: 3,
    title: "Artistic Gymnastics",
    sport: "Gymnastics",
    image: "https://images.unsplash.com/photo-1630225758612-8c511aad6c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbHltcGljJTIwZ3ltbmFzdGljc3xlbnwxfHx8fDE3NTg3NzUyMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "Photo",
    views: "18.7K",
    likes: "943"
  },
  {
    id: 4,
    title: "Basketball Champions",
    sport: "Basketball",
    image: "https://images.unsplash.com/photo-1608270310720-1ab85574b779?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbHltcGljJTIwYmFza2V0YmFsbHxlbnwxfHx8fDE3NTg3NzUyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "Video",
    views: "31.2K",
    likes: "1.8K"
  },
  {
    id: 5,
    title: "Tennis Precision",
    sport: "Tennis",
    image: "https://images.unsplash.com/photo-1727433421243-ff1ce924092a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbHltcGljJTIwdGVubmlzfGVufDF8fHx8MTc1ODc3NTI0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "Photo",
    views: "14.9K",
    likes: "721"
  },
  {
    id: 6,
    title: "Diving Elegance",
    sport: "Diving",
    image: "https://images.unsplash.com/photo-1462947760324-15811216b688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbHltcGljJTIwZGl2aW5nfGVufDF8fHx8MTc1ODc3NTI0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "Video",
    views: "22.1K",
    likes: "1.1K"
  }
];

export function SportsGallery() {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Olympic Sports Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore breathtaking moments from Olympic sports, featuring the world's greatest athletes 
            in action across diverse disciplines and competitions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <Button 
                    size="sm" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {item.type === 'Video' ? (
                      <Play className="h-4 w-4 mr-2" />
                    ) : (
                      <Eye className="h-4 w-4 mr-2" />
                    )}
                    View {item.type}
                  </Button>
                </div>
                
                {/* Type Badge */}
                <Badge 
                  className={`absolute top-3 left-3 ${
                    item.type === 'Video' ? 'bg-red-600 text-white' : 'bg-blue-600 text-white'
                  }`}
                >
                  {item.type}
                </Badge>
                
                {/* Sport Badge */}
                <Badge variant="secondary" className="absolute top-3 right-3">
                  {item.sport}
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{item.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4" />
                    <span>{item.likes}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Explore Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}