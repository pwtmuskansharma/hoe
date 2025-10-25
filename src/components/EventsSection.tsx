import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Youth Olympic Games Brisbane 2026",
    date: "July 23 - August 8, 2026",
    location: "Brisbane, Australia",
    type: "Youth Olympics",
    participants: "3,500+ Athletes",
    description: "The next Youth Olympic Games will showcase the future stars of Olympic sport in a celebration of youth, sport, and culture.",
    status: "Upcoming",
    color: "bg-green-100 text-green-800"
  },
  {
    id: 2,
    title: "Winter Olympics Milano Cortina 2026",
    date: "February 6 - 22, 2026",
    location: "Milano-Cortina, Italy",
    type: "Winter Olympics",
    participants: "2,900+ Athletes",
    description: "The 2026 Winter Olympics will bring together the world's best winter sports athletes in the heart of the Italian Alps.",
    status: "Preparation",
    color: "bg-blue-100 text-blue-800"
  },
  {
    id: 3,
    title: "Olympic Day Celebration 2025",
    date: "June 23, 2025",
    location: "Worldwide",
    type: "Celebration",
    participants: "Millions Worldwide",
    description: "Annual global celebration of Olympic values with events, activities, and educational programs in over 200 countries.",
    status: "Planning",
    color: "bg-purple-100 text-purple-800"
  },
  {
    id: 4,
    title: "Los Angeles 2028 Olympics",
    date: "July 14 - 30, 2028",
    location: "Los Angeles, USA",
    type: "Summer Olympics",
    participants: "10,500+ Athletes",
    description: "The City of Angels will host the Games of the XXXIV Olympiad, featuring new sports and innovative venues.",
    status: "Planning",
    color: "bg-orange-100 text-orange-800"
  }
];

export function EventsSection() {
  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Olympic Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the exciting Olympic events on the horizon, from Youth Games to the Olympics themselves, 
            bringing together athletes from around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={event.color}>
                    {event.status}
                  </Badge>
                  <Badge variant="outline">
                    {event.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{event.participants}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="flex space-x-3">
                  <Button size="sm" className="flex-1">
                    Learn More
                  </Button>
                  <Button size="sm" variant="outline">
                    Follow Updates
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View Complete Event Calendar
          </Button>
        </div>
      </div>
    </section>
  );
}