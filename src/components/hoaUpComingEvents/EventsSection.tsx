// import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
// import { Badge } from "../ui/badge";
// import { Button } from "../ui/button";
// import { Calendar, MapPin, Clock, Users } from "lucide-react";

// const upcomingEvents = [
//   {
//     id: 1,
//     title: "Youth Olympic Games Brisbane 2026",
//     date: "July 23 - August 8, 2026",
//     location: "Brisbane, Australia",
//     type: "Youth Olympics",
//     participants: "3,500+ Athletes",
//     description: "The next Youth Olympic Games will showcase the future stars of Olympic sport in a celebration of youth, sport, and culture.",
//     status: "Upcoming",
//     color: "bg-green-100 text-green-800"
//   },
//   {
//     id: 2,
//     title: "Winter Olympics Milano Cortina 2026",
//     date: "February 6 - 22, 2026",
//     location: "Milano-Cortina, Italy",
//     type: "Winter Olympics",
//     participants: "2,900+ Athletes",
//     description: "The 2026 Winter Olympics will bring together the world's best winter sports athletes in the heart of the Italian Alps.",
//     status: "Preparation",
//     color: "bg-blue-100 text-blue-800"
//   },
//   {
//     id: 3,
//     title: "Olympic Day Celebration 2025",
//     date: "June 23, 2025",
//     location: "Worldwide",
//     type: "Celebration",
//     participants: "Millions Worldwide",
//     description: "Annual global celebration of Olympic values with events, activities, and educational programs in over 200 countries.",
//     status: "Planning",
//     color: "bg-purple-100 text-purple-800"
//   },
//   {
//     id: 4,
//     title: "Los Angeles 2028 Olympics",
//     date: "July 14 - 30, 2028",
//     location: "Los Angeles, USA",
//     type: "Summer Olympics",
//     participants: "10,500+ Athletes",
//     description: "The City of Angels will host the Games of the XXXIV Olympiad, featuring new sports and innovative venues.",
//     status: "Planning",
//     color: "bg-orange-100 text-orange-800"
//   }
// ];

// export function EventsSection() {
//   return (
//     <section id="events" className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">HOA Events</h2>
//          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             27th Haryana Events
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {upcomingEvents.map((event) => (
//             <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
//               <CardHeader>
//                 <div className="flex justify-between items-start mb-2">
//                   <Badge className={event.color}>
//                     {event.status}
//                   </Badge>
//                   <Badge variant="outline">
//                     {event.type}
//                   </Badge>
//                 </div>
//                 <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
//               </CardHeader>
              
//               <CardContent>
//                 <div className="space-y-3 mb-6">
//                   <div className="flex items-center space-x-2 text-gray-600">
//                     <Calendar className="h-4 w-4" />
//                     <span className="text-sm">{event.date}</span>
//                   </div>
//                   <div className="flex items-center space-x-2 text-gray-600">
//                     <MapPin className="h-4 w-4" />
//                     <span className="text-sm">{event.location}</span>
//                   </div>
//                   <div className="flex items-center space-x-2 text-gray-600">
//                     <Users className="h-4 w-4" />
//                     <span className="text-sm">{event.participants}</span>
//                   </div>
//                 </div>
                
//                 <p className="text-gray-600 text-sm mb-6 leading-relaxed">
//                   {event.description}
//                 </p>
                
//                 <div className="flex space-x-3">
//                   <Button size="sm" className="flex-1">
//                     Learn More
//                   </Button>
//                   <Button size="sm" variant="outline">
//                     Follow Updates
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
        
//         <div className="text-center mt-12">
//           <Button size="lg" variant="outline">
//             View Complete Event Calendar
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }


import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Calendar, MapPin, Users, Medal, CalendarDays, MapPinned, Trophy } from "lucide-react";

export function EventsSection() {
  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">HOA Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            27th Haryana Events
          </p>
        </div>

        {/* Single Event Card */}
        <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
          <div className="flex flex-col md:flex-row items-center md:items-stretch">
            {/* Left Side: Image Section */}
            <div className="md:w-1/3 w-full bg-gradient-to-br from-yellow-100 to-orange-200 flex justify-center items-center p-8">
              <div className="w-48 h-48 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden">
                {/* Replace src with your uploaded logo */}
                <img
                  src="/images/logo approved.png"
                  alt="Event Logo"
                  className="w-40 h-40 object-contain"
                />
              </div>
            </div>

            {/* Right Side: Event Content */}
            <CardContent className="md:w-2/3 w-full p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                27th Haryana State Games
              </h3>

              <div className="space-y-3 mb-6">
              
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <span className="text-sm">Haryana, India</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="h-5 w-5 text-orange-500" />
                  <span className="text-sm">5000+ Athletes Participating</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                The 27th Haryana State Games celebrate excellence in sports with
                participation from across districts, promoting talent and
                teamwork for the upcoming national events.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button size="sm" className="flex-1 md:flex-none bg-orange-500 hover:bg-orange-600">
                  Learn More
                </Button>
                <Button size="sm" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-100">
                  Follow Updates
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Quick Actions Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-10">
            Quick Actions
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Sports", icon: <Medal className="h-8 w-8" /> },
              { name: "Schedule", icon: <CalendarDays className="h-8 w-8" /> },
              { name: "Venues", icon: <MapPinned className="h-8 w-8" /> },
              { name: "Results", icon: <Trophy className="h-8 w-8" /> },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-gradient-to-br from-orange-400 to-yellow-400 text-white py-10 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300 flex flex-col items-center justify-center group"
              >
                <div className="mb-3 text-white group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </div>
                <span className="text-lg font-semibold tracking-wide">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
