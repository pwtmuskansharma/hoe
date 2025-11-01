// import { useState } from "react";
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";
// import { Menu, Search, ChevronDown, ChevronUp } from "lucide-react";
// import { Link } from "react-router-dom";

// const menuItems = [
//   {
//     label: "About HOA",
//     path: "/home",
//     children: [
//       { label: "History", path: "/about/history" },
//       { label: "Members", path: "/about/members" },
//       { label: "Organisation", path: "/about/organisation" },
//     ],
//   },
//   {
//     label: "SPORTS",
//     path: "/sports",
//     // children: [
//     //   { label: "Football", path: "/sports/football" },
//     //   { label: "Basketball", path: "/sports/basketball" },
//     //   { label: "Swimming", path: "/sports/swimming" },
//     // ],
//   },
//   {
//     label: "ATHLETES",
//     path: "/athletes",
//     children: [
//       { label: "Register New", path: "/athletes/register" },
//       { label: "Athlete Login", path: "/athletes/login" },
//       { label: "Staff Register", path: "/staff/register" },
//       { label: "Staff Login", path: "/staff/login" },
//     ],
//   },
//   {
//     label: "COMPETITIONS",
//     path: "/competitions",
//     children: [
//       { label: "Upcoming Events", path: "/competitions/upcoming" },
//       { label: "Results", path: "/competitions/results" },
//       { label: "Participation", path: "/competitions/participation" },
//     ],
//   },
//   {
//     label: "AWARDS",
//     path: "/awards",
//     children: [
//       { label: "Padma Shri Awards", path: "/awards/padma-shri" },
//       { label: "Dronacharya Awards", path: "/awards/dronacharya" },
//       { label: "Arjuna Awards", path: "/awards/arjuna" },
//       { label: "Olympian/Other Awards", path: "/awards/olympian" },
//       { label: "HOA Awards", path: "/awards/hoa" },
//     ],
//   },
//   {
//     label: "MEDIA",
//     path: "/media",
//     children: [
//       { label: "Press Releases", path: "/media/press" },
//       { label: "Galleries", path: "/media/galleries" },
//     ],
//   },
//   { label: "CONTACT", path: "/contact" },
// ];

// export function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<number | null>(
//     null
//   );

//   return (
//     <header className="bg-white shadow-sm border-b">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-28">
//           {/* Logo */}
//           <div className="flex items-center space-x-3">
//             <Link to="/">
//               <img
//                 src="/images/logo.png"
//                 alt="HOA Logo"
//                 className="h-24 w-24 object-contain"
//               />
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <nav className="hidden lg:flex space-x-8 items-center relative">
//             {menuItems.map((item, idx) => (
//               <div key={idx} className="relative group">
//                 <Link
//                   to={item.path}
//                   className="text-gray-700 font-bold hover:text-blue-600 transition-colors flex items-center space-x-1"
//                 >
//                   <span>{item.label}</span>
//                   {item.children && <ChevronDown className="w-3 h-3" />}
//                 </Link>

//                 {/* Desktop Submenu */}
//                 {item.children && (
//                   <div className="absolute left-0 mt-2 w-48 bg-white font-bold shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-20">
//                     {item.children.map((sub, subIdx) => (
//                       <Link
//                         key={subIdx}
//                         to={sub.path}
//                         className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
//                       >
//                         {sub.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* Search + Mobile Menu */}
//           <div className="flex items-center space-x-4">
//             <div className="relative hidden md:block">
//               <Input
//                 type="text"
//                 placeholder="Search..."
//                 className="pl-10 pr-4 py-2 w-40 bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
//               />
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//             </div>

//             {/* Mobile menu button */}
//             <Button
//               className="lg:hidden"
//               variant="ghost"
//               size="sm"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               <Menu className="h-5 w-5" />
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden mt-2 border-t border-gray-200">
//             <div className="flex flex-col">
//               {menuItems.map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="flex flex-col border-b border-gray-100"
//                 >
//                   <button
//                     className="flex justify-between items-center px-4 py-3 w-full text-left text-gray-700 hover:bg-gray-50"
//                     onClick={() =>
//                       setMobileSubmenuOpen(
//                         mobileSubmenuOpen === idx ? null : idx
//                       )
//                     }
//                   >
//                     <span>{item.label}</span>
//                     {item.children &&
//                       (mobileSubmenuOpen === idx ? (
//                         <ChevronUp className="w-4 h-4" />
//                       ) : (
//                         <ChevronDown className="w-4 h-4" />
//                       ))}
//                   </button>

//                   {/* Mobile submenu */}
//                   {item.children && mobileSubmenuOpen === idx && (
//                     <div className="flex flex-col bg-gray-50">
//                       {item.children.map((sub, subIdx) => (
//                         <Link
//                           key={subIdx}
//                           to={sub.path}
//                           className="px-6 py-2 text-gray-700 hover:bg-gray-100"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           {sub.label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}

//               {/* Mobile direct links (no submenu) */}
//               {menuItems
//                 .filter((item) => !item.children)
//                 .map((item, idx) => (
//                   <Link
//                     key={idx}
//                     to={item.path}
//                     className="px-4 py-3 text-gray-700 hover:bg-gray-100"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {item.label}
//                   </Link>
//                 ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// import { useState } from "react";
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";
// import { Menu, Search, ChevronDown, ChevronUp } from "lucide-react";
// import { Link } from "react-router-dom";

// const menuItems = [
//   {
//     label: "About HOA",
//     path: "/home",
//     children: [
//       { label: "History", path: "/about/history" },
//       { label: "Members", path: "/about/members" },
//       { label: "Organisation", path: "/about/organisation" },
//     ],
//   },
//   {
//     label: "SPORTS",
//     path: "/sports",
//   },
//   {
//     label: "ATHLETES",
//     path: "/athletes",
//     children: [
//       { label: "Register New", path: "/athletes/register" },
//       { label: "Athlete Login", path: "/athletes/login" },
//       { label: "Staff Register", path: "/staff/register" },
//       { label: "Staff Login", path: "/staff/login" },
//     ],
//   },
//   {
//     label: "COMPETITIONS",
//     path: "/competitions",
//     children: [
//       { label: "Upcoming Events", path: "/competitions/upcoming" },
//       { label: "Results", path: "/competitions/results" },
//       { label: "Participation", path: "/competitions/participation" },
//     ],
//   },
//   {
//     label: "AWARDS",
//     path: "/awards",
//     children: [
//       {
//         label: "Rajiv Gandhi khel Ratna Award",
//         path: "/rajiv-gandhi-khel-ratan-awards",
//       },
//       { label: "Dronacharya Awards", path: "/dronacharya-awards" },
//       // { label: "Dhyanchand Awards", path: "/dhyanchand-awards" },
//       // { label: "Arjuna Awards", path: "/arjuna-awards" },
//       // { label: "HOA Awards", path: "/awards/hoa" },
//     ],
//   },
//   {
//     label: "MEDIA",
//     path: "/media",
//     children: [
//       { label: "Press Releases", path: "/media/press" },
//       { label: "Galleries", path: "/media/galleries" },
//     ],
//   },
//   { label: "CONTACT", path: "/contact" },
// ];

// export function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<number | null>(
//     null
//   );

//   return (
//     <header className="bg-white shadow-sm border-b">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-28">
//           {/* Logo */}
//           <div className="flex items-center space-x-3">
//             <Link to="/">
//               <img
//                 src="/images/logo.png"
//                 alt="HOA Logo"
//                 className="h-24 w-24 object-contain"
//               />
//             </Link>
//           </div>

//           {/* Desktop Menu (centered) */}
//           <nav className="hidden lg:flex flex-1 justify-center space-x-8 items-center relative">
//             {menuItems.map((item, idx) => (
//               <div key={idx} className="relative group">
//                 <Link
//                   to={item.path}
//                   className="text-gray-700 font-bold hover:text-blue-600 transition-colors flex items-center space-x-1"
//                 >
//                   <span>{item.label}</span>
//                   {item.children && <ChevronDown className="w-3 h-3" />}
//                 </Link>

//                 {/* Desktop Submenu */}
//                 {item.children && (
//                   <div className="absolute left-0 mt-2 w-48 bg-white font-bold shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-20">
//                     {item.children.map((sub, subIdx) => (
//                       <Link
//                         key={subIdx}
//                         to={sub.path}
//                         className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
//                       >
//                         {sub.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* Search + Mobile Menu */}
//           <div className="flex items-center space-x-4">
//             <div className="relative hidden md:block">
//               <Input
//                 type="text"
//                 placeholder="Search..."
//                 className="pl-10 pr-4 py-2 w-40 bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
//               />
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//             </div>

//             {/* Mobile menu button */}
//             <Button
//               className="lg:hidden"
//               variant="ghost"
//               size="sm"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               <Menu className="h-5 w-5" />
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden mt-2 border-t border-gray-200">
//             <div className="flex flex-col">
//               {menuItems.map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="flex flex-col border-b border-gray-100"
//                 >
//                   <button
//                     className="flex justify-between items-center px-4 py-3 w-full text-left text-gray-700 hover:bg-gray-50"
//                     onClick={() =>
//                       setMobileSubmenuOpen(
//                         mobileSubmenuOpen === idx ? null : idx
//                       )
//                     }
//                   >
//                     <span>{item.label}</span>
//                     {item.children &&
//                       (mobileSubmenuOpen === idx ? (
//                         <ChevronUp className="w-4 h-4" />
//                       ) : (
//                         <ChevronDown className="w-4 h-4" />
//                       ))}
//                   </button>

//                   {/* Mobile submenu */}
//                   {item.children && mobileSubmenuOpen === idx && (
//                     <div className="flex flex-col bg-gray-50">
//                       {item.children.map((sub, subIdx) => (
//                         <Link
//                           key={subIdx}
//                           to={sub.path}
//                           className="px-6 py-2 text-gray-700 hover:bg-gray-100"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           {sub.label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}

//               {/* Mobile direct links (no submenu) */}
//               {menuItems
//                 .filter((item) => !item.children)
//                 .map((item, idx) => (
//                   <Link
//                     key={idx}
//                     to={item.path}
//                     className="px-4 py-3 text-gray-700 hover:bg-gray-100"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {item.label}
//                   </Link>
//                 ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// import { useState, useEffect } from "react";
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";
// import { Menu, Search, ChevronDown, ChevronUp } from "lucide-react";
// import { Link } from "react-router-dom";
// import { apiFetch } from "../../services/api/Navbar";

// // ====== Interfaces ======
// interface MenuChild {
//   id?: number;
//   title?: string;
//   label?: string;
//   url?: string;
//   path?: string;
//   children?: MenuChild[];
// }

// interface MenuItem extends MenuChild {}

// // ====== Static Fallback Menu ======
// const staticMenuItems: MenuItem[] = [
//   {
//     label: "About HOA",
//     children: [
//       { label: "History", path: "/about/history" },
//       { label: "Members", path: "/about/members" },
//       { label: "Organisation", path: "/about/organisation" },
//     ],
//   },
//   {
//     label: "SPORTS",
//     path: "/sports",
//   },
//   {
//     label: "ATHLETES",
//     children: [
//       { label: "Register New", path: "/athletes/register" },
//       { label: "Athlete Login", path: "/athletes/login" },
//       { label: "Staff Register", path: "/staff/register" },
//       { label: "Staff Login", path: "/staff/login" },
//     ],
//   },
//   {
//     label: "COMPETITIONS",
//     children: [
//       { label: "Upcoming Events", path: "/competitions/upcoming" },
//       { label: "Results", path: "/competitions/results" },
//       { label: "Participation", path: "/competitions/participation" },
//     ],
//   },
//   {
//     label: "AWARDS",
//     children: [],
//   },
//   {
//     label: "MEDIA",
//     children: [
//       { label: "Press Releases", path: "/media/press" },
//       { label: "Galleries", path: "/media/galleries" },
//     ],
//   },
//   { label: "CONTACT", path: "#contact" },
// ];

// // ====== Component ======
// export function Header() {
//   const [menuItems, setMenuItems] = useState<MenuItem[]>(staticMenuItems);
//   const [loading, setLoading] = useState(true);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<number | null>(
//     null
//   );

//   useEffect(() => {
//     const fetchAwardsMenu = async () => {
//       setLoading(true);
//       try {
//         const res = await apiFetch("menu");
//         console.log("🔍 Full menu API response:", res);

//         const menuItemsData = res?.data?.data?.items || [];

//         const awardsSection = menuItemsData.find(
//           (item: any) => item.title?.toUpperCase() === "AWARDS"
//         );

//         if (awardsSection && Array.isArray(awardsSection.children)) {
//           const updatedMenu = staticMenuItems.map((item) =>
//             item.label === "AWARDS"
//               ? {
//                   ...item,
//                   children: awardsSection.children.map((sub: any) => ({
//                     id: sub.id,
//                     title: sub.title,
//                     url: sub.url || "#",
//                     children:
//                       sub.children?.map((nested: any) => ({
//                         id: nested.id,
//                         title: nested.title,
//                         url: nested.url || "#",
//                       })) || [],
//                   })),
//                 }
//               : item
//           );

//           setMenuItems(updatedMenu);
//           console.log("✅ Dynamic AWARDS Menu:", awardsSection.children);
//         } else {
//           console.warn("⚠️ Using static AWARDS menu fallback");
//           setMenuItems(staticMenuItems);
//         }
//       } catch (error) {
//         console.error("❌ Error fetching awards menu:", error);
//         setMenuItems(staticMenuItems);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAwardsMenu();
//   }, []);

//   // ====== Scroll to footer handler ======
//   const handleContactClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     const footer = document.querySelector("footer");
//     if (footer) {
//       footer.scrollIntoView({ behavior: "smooth" });
//     }
//   };
//   return (
//     <header className="bg-white shadow-sm border-b">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-28">
//           {/* Logo */}
//           <div className="flex items-center space-x-3">
//             <Link to="/">
//               <img
//                 src="/images/logo.png"
//                 alt="HOA Logo"
//                 className="h-24 w-24 object-contain"
//               />
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <nav className="hidden lg:flex flex-1 justify-center space-x-8 items-center relative">
//             {loading ? (
//               <span className="text-gray-400">Loading...</span>
//             ) : (
//               menuItems.map((item) => (
//                 <div
//                   key={item.id || item.title || item.label}
//                   className="relative group"
//                 >
//                   <Link
//                     to={item.url || item.path || "#"}
//                     className="text-gray-700 font-bold hover:text-blue-600 transition-colors flex items-center space-x-1"
//                   >
//                     <span>{item.title || item.label}</span>
//                     {item.children && item.children.length > 0 && (
//                       <ChevronDown className="w-3 h-3" />
//                     )}
//                   </Link>

//                   {/* Submenu */}
//                   {item.children && item.children.length > 0 && (
//                     <div
//                       className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md z-50
//                       transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100"
//                     >
//                       {item.children.map((sub) => (
//                         <Link
//                           key={sub.id || sub.title || sub.label}
//                           to={sub.url || sub.path || "#"}
//                           className="block px-4 py-2 font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 "
//                         >
//                           {sub.title || sub.label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))
//             )}
//           </nav>

//           {/* Search + Mobile Menu Button */}
//           <div className="flex items-center space-x-4">
//             <div className="relative hidden md:block">
//               <Input
//                 type="text"
//                 placeholder="Search..."
//                 className="pl-10 pr-4 py-2 w-40 bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
//               />
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//             </div>

//             {/* Mobile Menu Button */}
//             <Button
//               className="lg:hidden"
//               variant="ghost"
//               size="sm"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               <Menu className="h-5 w-5" />
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden mt-2 border-t border-gray-200">
//             {loading ? (
//               <div className="p-4 text-gray-400">Loading...</div>
//             ) : (
//               <div className="flex flex-col">
//                 {menuItems.map((item, idx) => (
//                   <div
//                     key={item.id || item.title || item.label}
//                     className="flex flex-col border-b border-gray-100"
//                   >
//                     <button
//                       onClick={(e) => {
//                         if (item.label === "CONTACT") {
//                           handleContactClick(e);
//                           setMobileMenuOpen(false);
//                         } else if (item.children && item.children.length > 0) {
//                           setMobileSubmenuOpen(
//                             mobileSubmenuOpen === idx ? null : idx
//                           );
//                         } else if (item.path || item.url) {
//                           setMobileMenuOpen(false);
//                         }
//                       }}
//                       className="flex justify-between items-center px-4 py-3 text-left font-bold text-gray-700 hover:bg-gray-50"
//                     >
//                       {item.path || item.url ? (
//                         <Link
//                           to={item.url || item.path || "#"}
//                           className="flex-1 text-left"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           {item.title || item.label}
//                         </Link>
//                       ) : (
//                         <span>{item.title || item.label}</span>
//                       )}

//                       {item.children &&
//                         item.children.length > 0 &&
//                         (mobileSubmenuOpen === idx ? (
//                           <ChevronUp className="w-4 h-4" />
//                         ) : (
//                           <ChevronDown className="w-4 h-4" />
//                         ))}
//                     </button>

//                     {item.children &&
//                       item.children.length > 0 &&
//                       mobileSubmenuOpen === idx && (
//                         <div className="flex flex-col bg-gray-50 transition-all duration-300">
//                           {item.children.map((sub) => (
//                             <Link
//                               key={sub.id || sub.title || sub.label}
//                               to={sub.url || sub.path || "#"}
//                               className="px-6 py-2 text-gray-700 hover:bg-gray-100"
//                               onClick={() => setMobileMenuOpen(false)}
//                             >
//                               {sub.title || sub.label}
//                             </Link>
//                           ))}
//                         </div>
//                       )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Menu, Search, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { apiFetch } from "../../services/api/Navbar";

// ====== Interfaces ======
interface MenuChild {
  id?: number;
  title?: string;
  label?: string;
  url?: string;
  path?: string;
  children?: MenuChild[];
}

interface MenuItem extends MenuChild {}

// ====== Static Fallback Menu ======
const staticMenuItems: MenuItem[] = [
  {
    label: "About HOA",
    children: [
      { label: "History", path: "/about/history" },
      { label: "Members", path: "/about/members" },
      { label: "Organisation", path: "/about/organisation" },
    ],
  },
  {
    label: "SPORTS",
    path: "/sports",
  },
  {
    label: "ATHLETES",
    children: [
      { label: "Register New", path: "/athletes/register" },
      { label: "Athlete Login", path: "/athletes/login" },
      { label: "Staff Register", path: "/staff/register" },
      { label: "Staff Login", path: "/staff/login" },
    ],
  },
  {
    label: "COMPETITIONS",
    children: [
      { label: "Upcoming Events", path: "/competitions/upcoming" },
      { label: "Results", path: "/competitions/results" },
      { label: "Participation", path: "/competitions/participation" },
    ],
  },
  {
    label: "AWARDS",
    children: [],
  },
  {
    label: "MEDIA",
    children: [
      { label: "Press Releases", path: "/media/press" },
      { label: "Galleries", path: "/media/galleries" },
    ],
  },
  { label: "CONTACT", path: "#contact" },
];

// ====== Component ======
export function Header() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(staticMenuItems);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<number | null>(
    null
  );

  useEffect(() => {
    const fetchAwardsMenu = async () => {
      setLoading(true);
      try {
        const res = await apiFetch("menu");
        console.log("🔍 Full menu API response:", res);

        const menuItemsData = res?.data?.data?.items || [];

        const awardsSection = menuItemsData.find(
          (item: any) => item.title?.toUpperCase() === "AWARDS"
        );

        if (awardsSection && Array.isArray(awardsSection.children)) {
          const updatedMenu = staticMenuItems.map((item) =>
            item.label === "AWARDS"
              ? {
                  ...item,
                  children: awardsSection.children.map((sub: any) => ({
                    id: sub.id,
                    title: sub.title,
                    url: sub.url || "#",
                    children:
                      sub.children?.map((nested: any) => ({
                        id: nested.id,
                        title: nested.title,
                        url: nested.url || "#",
                      })) || [],
                  })),
                }
              : item
          );

          setMenuItems(updatedMenu);
          console.log("✅ Dynamic AWARDS Menu:", awardsSection.children);
        } else {
          console.warn("⚠️ Using static AWARDS menu fallback");
          setMenuItems(staticMenuItems);
        }
      } catch (error) {
        console.error("❌ Error fetching awards menu:", error);
        setMenuItems(staticMenuItems);
      } finally {
        setLoading(false);
      }
    };

    fetchAwardsMenu();
  }, []);

  // ====== Scroll to footer handler ======
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="HOA Logo"
                className="h-24 w-24 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex flex-1 justify-center space-x-8 items-center relative">
            {loading ? (
              <span className="text-gray-400">Loading...</span>
            ) : (
              menuItems.map((item) => (
                <div
                  key={item.id || item.title || item.label}
                  className="relative group"
                >
                  {item.label === "CONTACT" ? (
                    <a
                      href="#contact"
                      onClick={handleContactClick}
                      className="text-gray-700 font-bold hover:text-blue-600 transition-colors flex items-center space-x-1 cursor-pointer"
                    >
                      <span>{item.title || item.label}</span>
                    </a>
                  ) : (
                    <Link
                      to={item.url || item.path || "#"}
                      className="text-gray-700 font-bold hover:text-blue-600 transition-colors flex items-center space-x-1"
                    >
                      <span>{item.title || item.label}</span>
                      {item.children && item.children.length > 0 && (
                        <ChevronDown className="w-3 h-3" />
                      )}
                    </Link>
                  )}

                  {/* Submenu */}
                  {item.children && item.children.length > 0 && (
                    <div
                      className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md z-50
                      transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100"
                    >
                      {item.children.map((sub) => (
                        <Link
                          key={sub.id || sub.title || sub.label}
                          to={sub.url || sub.path || "#"}
                          className="block px-4 py-2 font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 "
                        >
                          {sub.title || sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </nav>

          {/* Search + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-40 bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>

            <Button
              className="lg:hidden"
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 border-t border-gray-200">
            {loading ? (
              <div className="p-4 text-gray-400">Loading...</div>
            ) : (
              <div className="flex flex-col">
                {menuItems.map((item, idx) => (
                  <div
                    key={item.id || item.title || item.label}
                    className="flex flex-col border-b border-gray-100"
                  >
                    <button
                      onClick={(e) => {
                        if (item.label === "CONTACT") {
                          handleContactClick(e);
                          setMobileMenuOpen(false);
                        } else if (item.children && item.children.length > 0) {
                          setMobileSubmenuOpen(
                            mobileSubmenuOpen === idx ? null : idx
                          );
                        } else if (item.path || item.url) {
                          setMobileMenuOpen(false);
                        }
                      }}
                      className="flex justify-between items-center px-4 py-3 text-left font-bold text-gray-700 hover:bg-gray-50"
                    >
                      {item.path || item.url ? (
                        <Link
                          to={item.url || item.path || "#"}
                          className="flex-1 text-left"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.title || item.label}
                        </Link>
                      ) : (
                        <span>{item.title || item.label}</span>
                      )}

                      {item.children &&
                        item.children.length > 0 &&
                        (mobileSubmenuOpen === idx ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        ))}
                    </button>

                    {item.children &&
                      item.children.length > 0 &&
                      mobileSubmenuOpen === idx && (
                        <div className="flex flex-col bg-gray-50 transition-all duration-300">
                          {item.children.map((sub) => (
                            <Link
                              key={sub.id || sub.title || sub.label}
                              to={sub.url || sub.path || "#"}
                              className="px-6 py-2 text-gray-700 hover:bg-gray-100"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {sub.title || sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
