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

// import { Card, CardContent } from "../ui/card";
// import { Button } from "../ui/button";
// import { Calendar, MapPin, Users, Medal, CalendarDays, MapPinned, Trophy } from "lucide-react";

// export function EventsSection() {
//   return (
//     <section id="events" className="py-16 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">HOA Events</h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             27th Haryana Events
//           </p>
//         </div>

//         {/* Single Event Card */}
//         <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
//           <div className="flex flex-col md:flex-row items-center md:items-stretch">
//             {/* Left Side: Image Section */}
//             <div className="md:w-1/3 w-full bg-gradient-to-br from-yellow-100 to-orange-200 flex justify-center items-center p-8">
//               <div className="w-48 h-48 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden">
//                 {/* Replace src with your uploaded logo */}
//                 <img
//                   src="/images/logo approved.png"
//                   alt="Event Logo"
//                   className="w-40 h-40 object-contain"
//                 />
//               </div>
//             </div>

//             {/* Right Side: Event Content */}
//             <CardContent className="md:w-2/3 w-full p-6">
//               <h3 className="text-2xl font-semibold mb-4 text-gray-900">
//                 27th Haryana State Games
//               </h3>

//               <div className="space-y-3 mb-6">

//                 <div className="flex items-center space-x-2 text-gray-600">
//                   <MapPin className="h-5 w-5 text-orange-500" />
//                   <span className="text-sm">Haryana, India</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-gray-600">
//                   <Users className="h-5 w-5 text-orange-500" />
//                   <span className="text-sm">5000+ Athletes Participating</span>
//                 </div>
//               </div>

//               <p className="text-gray-600 text-sm mb-6 leading-relaxed">
//                 The 27th Haryana State Games celebrate excellence in sports with
//                 participation from across districts, promoting talent and
//                 teamwork for the upcoming national events.
//               </p>

//               <div className="flex flex-wrap gap-3">
//                 <Button size="sm" className="flex-1 md:flex-none bg-orange-500 hover:bg-orange-600">
//                   Learn More
//                 </Button>
//                 <Button size="sm" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-100">
//                   Follow Updates
//                 </Button>
//               </div>
//             </CardContent>
//           </div>
//         </Card>

//         {/* Quick Actions Section */}
//         <div className="mt-20 text-center">
//           <h3 className="text-2xl font-bold text-gray-900 mb-10">
//             Quick Actions
//           </h3>

//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
//             {[
//               { name: "Sports", icon: <Medal className="h-8 w-8" /> },
//               { name: "Schedule", icon: <CalendarDays className="h-8 w-8" /> },
//               { name: "Venues", icon: <MapPinned className="h-8 w-8" /> },
//               { name: "Results", icon: <Trophy className="h-8 w-8" /> },
//             ].map((item) => (
//               <div
//                 key={item.name}
//                 className="bg-gradient-to-br from-orange-400 to-yellow-400 text-white py-10 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300 flex flex-col items-center justify-center group"
//               >
//                 <div className="mb-3 text-white group-hover:scale-110 transition-transform duration-200">
//                   {item.icon}
//                 </div>
//                 <span className="text-lg font-semibold tracking-wide">
//                   {item.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// working code

import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import {
  MapPin,
  Users,
  Medal,
  CalendarDays,
  MapPinned,
  Trophy,
  Image as ImageIcon,
  ListChecks,
  Calendar,
} from "lucide-react";

export function EventsSection() {
  const events = [
    {
      title: "27th Haryana State Games",
      date: "02/12/2025",
      location: "Haryana, India",
      athletes: "5000+ Athletes Participating",
      description:
        "The 27th Haryana State Games celebrate excellence in sports with participation from across districts, promoting talent and teamwork for the upcoming national events.",
      image: "/images/logo approved.png",
    },
    {
      title: "Haryana Youth Championship 2025",
      date: "02/11/2025",
      location: "Panchkula, Haryana",
      athletes: "2000+ Young Athletes",
      description:
        "Encouraging the next generation of sporting talent with thrilling competitions, skill showcases, and training sessions across multiple disciplines.",
      image: "/images/logo approved.png",
    },
    {
      title: "27th Haryana State Games",
      date: "02/12/2025",
      location: "Haryana, India",
      athletes: "5000+ Athletes Participating",
      description:
        "The 27th Haryana State Games celebrate excellence in sports with participation from across districts, promoting talent and teamwork for the upcoming national events.",
      image: "/images/logo approved.png",
    },
    {
      title: "Haryana Youth Championship 2025",
      date: "02/11/2025",
      location: "Panchkula, Haryana",
      athletes: "2000+ Young Athletes",
      description:
        "Encouraging the next generation of sporting talent with thrilling competitions, skill showcases, and training sessions across multiple disciplines.",
      image: "/images/logo approved.png",
    },
  ];

  const quickActions = [
    { name: "Sports", icon: <Medal className="h-6 w-6" /> },
    { name: "Schedule", icon: <CalendarDays className="h-6 w-6" /> },
    { name: "Venues", icon: <MapPinned className="h-6 w-6" /> },
    { name: "Results", icon: <Trophy className="h-6 w-6" /> },
    { name: "Medal Tally", icon: <ListChecks className="h-6 w-6" /> },
    { name: "Match Fixtures", icon: <CalendarDays className="h-6 w-6" /> },
    { name: "Media & Gallery", icon: <ImageIcon className="h-6 w-6" /> },
  ];

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">HOA Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore Haryana’s premier sports events and championships.
          </p>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {events.map((event) => (
            <Card
              key={event.title}
              className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
            >
              {/* Upper Part: Event Info */}
              <div className="flex flex-col sm:flex-row items-center sm:items-stretch">
                {/* Left: Event Image */}
                <div className="sm:w-1/3 w-full bg-gradient-to-br from-yellow-100 to-orange-200 flex justify-center items-center p-5 md:p-6">
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden">
                    <img
                      src={event.image}
                      alt="Event Logo"
                      className="object-contain w-24 h-24 md:w-28 md:h-28"
                    />
                  </div>
                </div>

                {/* Right: Event Details */}
                <CardContent className="sm:w-2/3 w-full p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-semibold mb-1 text-gray-900">
                    {event.title}
                  </h3>

                  <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="h-4 w-4 text-orange-500" />
                      <span className="text-xs md:text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="h-4 w-4 text-orange-500" />
                      <span className="text-xs md:text-sm">
                        {event.location}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="h-4 w-4 text-orange-500" />
                      <span className="text-xs md:text-sm">
                        {event.athletes}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-[11px] md:text-xs mb-3 md:mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      className="flex-1 md:flex-none bg-orange-500 hover:bg-orange-600 text-[11px] md:text-xs px-3 py-1.5"
                    >
                      Learn More
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-orange-500 text-orange-500 hover:bg-orange-100 text-[11px] md:text-xs px-3 py-1.5"
                    >
                      Follow
                    </Button>
                  </div>
                </CardContent>
              </div>

              {/* Lower Part: Quick Actions */}
              <div className="border-t border-gray-200 px-4 md:px-5 pb-4 md:pb-5 pt-3 md:pt-4 bg-gray-50">
                <h4 className="text-center text-xs md:text-sm font-semibold text-gray-800 mb-3 md:mb-4">
                  Quick Actions
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2.5 md:gap-3">
                  {quickActions.map((item) => (
                    <div
                      key={item.name}
                      className="bg-gradient-to-br from-orange-400 to-yellow-400 text-white py-1.5 md:py-2 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transform transition duration-300 flex flex-col items-center justify-center"
                    >
                      <div className="mb-0.5">{item.icon}</div>
                      <span className="text-[9px] md:text-[10px] font-medium text-center px-1 leading-tight">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// dummy code to Show
// import { Card, CardContent } from "../ui/card";
// import { Button } from "../ui/button";
// import {
//   MapPin,
//   Users,
//   Medal,
//   CalendarDays,
//   MapPinned,
//   Trophy,
//   Image as ImageIcon,
//   ListChecks,
//   Calendar,
// } from "lucide-react";

// export function EventsSection() {
//   const quickActions = [
//     { name: "Sports", icon: <Medal className="h-6 w-6" /> },
//     { name: "Schedule", icon: <CalendarDays className="h-6 w-6" /> },
//     { name: "Venues", icon: <MapPinned className="h-6 w-6" /> },
//     { name: "Results", icon: <Trophy className="h-6 w-6" /> },
//     { name: "Medal Tally", icon: <ListChecks className="h-6 w-6" /> },
//     { name: "Match Fixtures", icon: <CalendarDays className="h-6 w-6" /> },
//     { name: "Media & Gallery", icon: <ImageIcon className="h-6 w-6" /> },
//   ];

//   return (
//     <section id="events" className="py-12 bg-gray-50">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Title */}
//         <div className="text-center mb-10">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//             HOA Events
//           </h2>
//           <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
//             27th Haryana Events
//           </p>
//         </div>

//         {/* Event Card */}
//         <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white">
//           <div className="flex flex-col md:flex-row items-center md:items-stretch">
//             {/* Left Side: Event Logo */}
//             <div className="md:w-1/3 w-full bg-gradient-to-br from-yellow-100 to-orange-200 flex justify-center items-center p-6">
//               <div className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden">
//                 <img
//                   src="/images/logo approved.png"
//                   alt="Event Logo"
//                   className="w-28 h-28 md:w-32 md:h-32 object-contain"
//                 />
//               </div>
//             </div>

//             {/* Right Side: Event Info + Quick Actions */}
//             <CardContent className="md:w-2/3 w-full p-5 md:p-6">
//               <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
//                 27th Haryana State Games
//               </h3>

//               <div className="space-y-2 mb-4">
//                 <div className="flex items-center space-x-2 text-gray-600">
//                   <Calendar className="h-4 w-4 text-orange-500" />
//                   <span className="text-sm md:text-base">02/11/2025</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-gray-600">
//                   <MapPin className="h-4 w-4 text-orange-500" />
//                   <span className="text-sm md:text-base">Haryana, India</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-gray-600">
//                   <Users className="h-4 w-4 text-orange-500" />
//                   <span className="text-sm md:text-base">
//                     5000+ Athletes Participating
//                   </span>
//                 </div>
//               </div>

//               <p className="text-gray-600 text-xs md:text-sm mb-5 leading-relaxed">
//                 The 27th Haryana State Games celebrate excellence in sports with
//                 participation from across districts, promoting talent and
//                 teamwork for the upcoming national events.
//               </p>

//               {/* Buttons */}
//               <div className="flex flex-wrap gap-2 mb-6">
//                 <Button
//                   size="sm"
//                   className="flex-1 md:flex-none bg-orange-500 hover:bg-orange-600 text-xs md:text-sm"
//                 >
//                   Learn More
//                 </Button>
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   className="border-orange-500 text-orange-500 hover:bg-orange-100 text-xs md:text-sm"
//                 >
//                   Follow Updates
//                 </Button>
//               </div>
//             </CardContent>
//           </div>
//           <div className="border-t border-gray-200 px-4 md:px-5 pb-4 md:pb-5 pt-3 md:pt-4 bg-gray-50">
//             <h4 className="text-center text-xs md:text-sm font-semibold text-gray-800 mb-3 md:mb-4">
//               Quick Actions
//             </h4>
//             <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-2.5 md:gap-3">
//               {quickActions.map((item) => (
//                 <div
//                   key={item.name}
//                   className="bg-gradient-to-br from-orange-400 to-yellow-400 text-white py-1.5 md:py-2 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transform transition duration-300 flex flex-col items-center justify-center"
//                 >
//                   <div className="mb-0.5">{item.icon}</div>
//                   <span className="text-[9px] md:text-[10px] font-medium text-center px-1 leading-tight">
//                     {item.name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </Card>
//       </div>
//     </section>
//   );
// }
<<<<<<< Updated upstream
=======

// dummy code to Show
import React, { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import {
  MapPin,
  Users,
  Medal,
  CalendarDays,
  MapPinned,
  Trophy,
  Image as ImageIcon,
  ListChecks,
  Calendar,
} from "lucide-react";
import { apiFetch } from "../../services/api/Events";
import { Link } from "react-router-dom";

interface EventItem {
  title: string;
  date: string;
  location: string;
  athletes: string;
  description: string;
  image: string;
  sport_link?: string | null;
  schedule_link?: string | null;
  venue_link?: string | null;
  result_link?: string | null;
  medal_tally_link?: string | null;
  match_fixtures_link?: string | null;
  media_gallery_link?: string | null;
}

export function EventsSection() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [overflowing, setOverflowing] = useState<Record<number, boolean>>({});

  const descRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const quickActions = [
    { name: "Sports", key: "sport_link", icon: <Medal className="h-6 w-6" /> },
    {
      name: "Schedule",
      key: "schedule_link",
      icon: <CalendarDays className="h-6 w-6" />,
    },
    {
      name: "Venues",
      key: "venue_link",
      icon: <MapPinned className="h-6 w-6" />,
    },
    {
      name: "Results",
      key: "result_link",
      icon: <Trophy className="h-6 w-6" />,
    },
    {
      name: "Medal Tally",
      key: "medal_tally_link",
      icon: <ListChecks className="h-6 w-6" />,
    },
    {
      name: "Match Fixtures",
      key: "match_fixtures_link",
      icon: <CalendarDays className="h-6 w-6" />,
    },
    {
      name: "Media & Gallery",
      key: "media_gallery_link",
      icon: <ImageIcon className="h-6 w-6" />,
    },
  ];

  // Fetch events on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiFetch("athlete-register");
        console.log("API Response:", response?.data?.data?.events?.data);

        const formattedEvents: EventItem[] = (
          response?.data?.data?.events?.data || []
        ).map((item: any) => ({
          title: item.title,
          date: item.event_date,
          location: item.location,
          athletes: `${item.registered_count}+ Registered`,
          description: item.description,
          image: item.image_url || "/images/logo approved.png",
          sport_link: item.sport_link,
          schedule_link: item.schedule_link,
          venue_link: item.venue_link,
          result_link: item.result_link,
          medal_tally_link: item.medal_tally_link,
          match_fixtures_link: item.match_fixtures_link,
          media_gallery_link: item.media_gallery_link,
        }));

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // After render, detect which descriptions overflow 3 lines
  useEffect(() => {
    const newOverflowing: Record<number, boolean> = {};
    descRefs.current.forEach((ref, index) => {
      if (ref) {
        const lineHeight = parseFloat(getComputedStyle(ref).lineHeight) || 16;
        const maxHeight = lineHeight * 3;
        newOverflowing[index] = ref.scrollHeight > maxHeight + 2;
      }
    });
    setOverflowing(newOverflowing);
  }, [events]);

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">HOA Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore Haryana’s premier sports events and championships.
          </p>
        </div>

        {/* Loader */}
        {loading && (
          <div className="text-center text-gray-500 py-10 animate-pulse">
            Loading events...
          </div>
        )}

        {/* Error Message */}
        {!loading && error && (
          <div className="text-center text-red-500 py-10">{error}</div>
        )}

        {/* No Data Message */}
        {!loading && !error && events.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            No upcoming events found.
          </div>
        )}

        {/* Event Grid */}
        {!loading && !error && events.length > 0 && (
          <div
            className={`grid gap-6 md:gap-8 ${
              events.length === 1
                ? "place-items-center grid-cols-1"
                : "grid-cols-1 md:grid-cols-2"
            }`}
          >
            {events.map((event, index) => (
              <Card
                key={event.title}
                className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-stretch">
                  {/* Left: Event Image */}
                  <div className="sm:w-1/3 w-full bg-gradient-to-br from-yellow-100 to-orange-200 flex justify-center items-center p-5 md:p-6">
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden">
                      <img
                        src={event.image}
                        alt="Event Logo"
                        className="object-contain w-24 h-24 md:w-28 md:h-28"
                      />
                    </div>
                  </div>

                  {/* Right: Event Details */}
                  <CardContent className="sm:w-2/3 w-full p-4 md:p-5">
                    <h3 className="text-lg md:text-xl font-semibold mb-1 text-gray-900">
                      {event.title}
                    </h3>

                    <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="h-4 w-4 text-orange-500" />
                        <span className="text-xs md:text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="h-4 w-4 text-orange-500" />
                        <span className="text-xs md:text-sm">
                          {event.location}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Users className="h-4 w-4 text-orange-500" />
                        <span className="text-xs md:text-sm">
                          {event.athletes}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div
                      ref={(el) => {
                        descRefs.current[index] = el;
                      }}
                      className={`text-gray-600 text-[11px] md:text-xs leading-relaxed transition-all duration-300 ${
                        expanded[index]
                          ? "max-h-[400px]"
                          : "max-h-[4.5rem] overflow-hidden line-clamp-3"
                      }`}
                      dangerouslySetInnerHTML={{ __html: event.description }}
                    />

                    {/* Show More / Less button — only if overflow */}
                    {overflowing[index] && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-orange-500 text-[11px] md:text-xs mt-1 hover:underline focus:outline-none"
                      >
                        {expanded[index] ? "Show Less" : "Show More"}
                      </button>
                    )}

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Button
                        size="sm"
                        className="flex-1 md:flex-none bg-orange-500 hover:bg-orange-600 text-[11px] md:text-xs px-3 py-1.5"
                      >
                        Learn More
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-orange-500 text-orange-500 hover:bg-orange-100 text-[11px] md:text-xs px-3 py-1.5"
                      >
                        Follow
                      </Button>
                    </div>
                  </CardContent>
                </div>

                {/* Quick Actions */}
                <div className="border-t border-gray-200 px-4 md:px-5 pb-4 md:pb-5 pt-3 md:pt-4 bg-gray-50">
                  <h4 className="text-center text-xs md:text-sm font-semibold text-gray-800 mb-3 md:mb-4">
                    Quick Actions
                  </h4>
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2.5 md:gap-3">
                    {quickActions.map((item) => {
                      const link = event[item.key as keyof EventItem] as
                        | string
                        | null;
                      const isActive = Boolean(link);

                      return (
                        <a
                          key={item.name}
                          href={isActive ? link! : undefined}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${
                            isActive
                              ? "cursor-pointer hover:scale-105"
                              : "hover:scale-105 cursor-not-allowed"
                          } bg-gradient-to-br from-orange-400 to-yellow-400 text-white py-1.5 md:py-2 rounded-lg shadow-sm transition duration-300 flex flex-col items-center justify-center`}
                        >
                          <div className="mb-0.5 flex items-center gap-0.5">
                            {item.icon}
                          </div>
                          <span className="text-[9px] md:text-[10px] font-medium text-center px-1 leading-tight">
                            {item.name}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
      {/* View All Events Button */}
      <div className="text-center cursor-pointer mt-10">
        <Link
          to="/competitions/upcoming"
          className="inline-flex items-center gap-2 bg-gradient-to-br from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white font-medium text-sm md:text-base px-6 py-2.5 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          View All Events
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
>>>>>>> Stashed changes
