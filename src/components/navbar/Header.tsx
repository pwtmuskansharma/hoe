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

// import { useState, useEffect } from "react";
// import { Button } from "../ui/button";
// import { Menu, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import { apiFetch } from "../../services/api/Navbar";

// /* ================= Interfaces ================= */
// interface MenuItem {
//   id?: number;
//   title?: string;
//   label?: string;
//   url?: string;
//   path?: string;
//   children?: MenuItem[];
// }

// /* ================= Static Items ================= */
// const STATIC_ITEMS: MenuItem[] = [{ label: "HOME", path: "/" }];

// /* ================= Helper: Backend → Frontend ================= */
// const mapBackendMenu = (items: any[]): MenuItem[] => {
//   return items.map((item) => ({
//     id: item.id,
//     title: item.title,
//     label: item.title,
//     url: item.url || "#",
//     children: item.children ? mapBackendMenu(item.children) : [],
//   }));
// };

// /* ================= Component ================= */
// export function Header() {
//   const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<number | null>(
//     null
//   );
//   const [mobileSubSubmenuOpen, setMobileSubSubmenuOpen] = useState<
//     number | null
//   >(null);

//   /* ================= Fetch Menu ================= */
//   useEffect(() => {
//     const fetchMenu = async () => {
//       setLoading(true);
//       try {
//         const res = await apiFetch("menu");
//         const backendItems = res?.data?.data?.items || [];

//         const dynamicMenu = mapBackendMenu(backendItems);

//         // HOME (static) + BACKEND MENU
//         setMenuItems([...STATIC_ITEMS, ...dynamicMenu]);
//       } catch (err) {
//         console.error("Menu fetch error", err);
//         setMenuItems(STATIC_ITEMS);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMenu();
//   }, []);

//   /* ================= Contact Scroll ================= */
//   const handleContactClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     const footer = document.querySelector("footer");
//     footer?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <header className="bg-white shadow-sm border-b">
//       <div className="max-w-7xl mx-auto px-4 lg:px-8">
//         <div className="flex justify-between items-center h-28">
//           {/* Logo */}
//           <Link to="/">
//             <img
//               src="/images/logo.png"
//               alt="HOA"
//               className="h-24 w-24 object-contain"
//             />
//           </Link>

//           {/* ================= Desktop Menu ================= */}
//           <nav className="hidden lg:flex flex-1 justify-center space-x-8">
//             {loading ? (
//               <span className="text-gray-400">Loading...</span>
//             ) : (
//               menuItems.map((item) => (
//                 <div key={item.id || item.label} className="relative group">
//                   <Link
//                     to={item.path || item.url || "#"}
//                     className="font-bold text-sm text-gray-700 flex items-center gap-1 hover:text-blue-600"
//                     onClick={
//                       item.label === "CONTACT" ? handleContactClick : undefined
//                     }
//                   >
//                     {item.title || item.label}
//                     {item.children?.length ? (
//                       <ChevronDown className="w-3 h-3" />
//                     ) : null}
//                   </Link>

//                   {/* Level 1 */}
//                   {item.children?.length ? (
//                     <div className="absolute left-0 mt-3 w-52 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
//                       {item.children.map((sub) => (
//                         <div
//                           key={sub.id || sub.label}
//                           className="relative group/sub"
//                         >
//                           <Link
//                             to={sub.url || "#"}
//                             className="flex justify-between px-4 py-2 font-bold text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
//                           >
//                             {sub.title}
//                             {sub.children?.length ? (
//                               <ChevronRight className="w-3 h-3" />
//                             ) : null}
//                           </Link>

//                           {/* Level 2 */}
//                           {sub.children?.length ? (
//                             <div className="absolute left-full top-0 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/sub:visible group-hover/sub:opacity-100 transition">
//                               {sub.children.map((third) => (
//                                 <Link
//                                   key={third.id}
//                                   to={third.url || "#"}
//                                   className="block px-4 py-2 w-56 font-bold text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
//                                 >
//                                   {third.title}
//                                 </Link>
//                               ))}
//                             </div>
//                           ) : null}
//                         </div>
//                       ))}
//                     </div>
//                   ) : null}
//                 </div>
//               ))
//             )}
//           </nav>

//           {/* ================= Right Side ================= */}
//           <div className="flex items-center gap-4">
//             {/* Register Button (STATIC) */}
//             <Link to="/athletes/register" className="hidden lg:block">
//               <button className="px-4 py-2 bg-[#0e276b] text-white rounded-md font-semibold hover:bg-blue-700">
//                 Register Now
//               </button>
//             </Link>

//             {/* Mobile Toggle */}
//             <Button
//               variant="ghost"
//               className="lg:hidden"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               <Menu />
//             </Button>
//           </div>
//         </div>

//         {/* ================= Mobile Menu ================= */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden border-t">
//             {menuItems.map((item, idx) => (
//               <div key={idx} className="border-b">
//                 <button
//                   className="w-full px-4 py-3 font-bold flex justify-between"
//                   onClick={() =>
//                     setMobileSubmenuOpen(mobileSubmenuOpen === idx ? null : idx)
//                   }
//                 >
//                   {item.title || item.label}
//                   {item.children?.length ? (
//                     mobileSubmenuOpen === idx ? (
//                       <ChevronUp />
//                     ) : (
//                       <ChevronDown />
//                     )
//                   ) : null}
//                 </button>

//                 {mobileSubmenuOpen === idx &&
//                   item.children?.map((sub, sIdx) => (
//                     <div key={sIdx} className="bg-gray-50">
//                       <button
//                         className="w-full px-6 py-2 font-bold flex justify-between"
//                         onClick={() =>
//                           setMobileSubSubmenuOpen(
//                             mobileSubSubmenuOpen === sIdx ? null : sIdx
//                           )
//                         }
//                       >
//                         {sub.title}
//                         {sub.children?.length ? <ChevronRight /> : null}
//                       </button>

//                       {mobileSubSubmenuOpen === sIdx &&
//                         sub.children?.map((third) => (
//                           <Link
//                             key={third.id}
//                             to={third.url || "#"}
//                             className="block px-10 py-2 font-bold"
//                             onClick={() => setMobileMenuOpen(false)}
//                           >
//                             {third.title}
//                           </Link>
//                         ))}
//                     </div>
//                   ))}
//               </div>
//             ))}

//             {/* Mobile Register */}
//             <Link to="/athletes/register">
//               <button className="w-full my-4 px-4 py-2 bg-[#0e276b] text-white rounded-md font-semibold">
//                 Register Now
//               </button>
//             </Link>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// working code
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { apiFetch } from "../../services/api/Navbar";

/* ================= Interfaces ================= */
interface MenuItem {
  id?: number;
  title?: string;
  label?: string;
  url?: string;
  path?: string;
  children?: MenuItem[];
}

/* ================= Static Items ================= */
const STATIC_ITEMS: MenuItem[] = [{ label: "HOME", path: "/" }];

/* ================= Helper: Backend → Frontend ================= */
const mapBackendMenu = (items: any[]): MenuItem[] => {
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    label: item.title,
    url: item.url || "#",
    children: item.children ? mapBackendMenu(item.children) : [],
  }));
};

/* ================= Component ================= */
export function Header() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [logo, setLogo] = useState<string>("");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<number | null>(
    null
  );
  const [mobileSubSubmenuOpen, setMobileSubSubmenuOpen] = useState<
    number | null
  >(null);

  /* ================= Fetch Menu ================= */
  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true);
      try {
        const res = await apiFetch("menu");
        const backendItems = res?.data?.data?.items || [];
        const dynamicMenu = mapBackendMenu(backendItems);
        /* 👉 YE ADD KARO */
        const backendLogo = res?.data?.data?.settings?.logo;
        if (backendLogo) {
          setLogo(backendLogo);
        }
        setMenuItems([...STATIC_ITEMS, ...dynamicMenu]);
      } catch (err) {
        console.error("Menu fetch error", err);
        setMenuItems(STATIC_ITEMS);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  /* ================= Contact Scroll ================= */
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.querySelector("footer");
    footer?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <Link to="/">
            {/* <img
              src="/images/logo.png"
              alt="HOA"
              className="h-24 w-24 object-contain"
            /> */}
            <img
              src={logo || "/images/logo.png"}
              alt="HOA"
              className="h-24 w-24 object-contain"
            />
          </Link>

          {/* ================= Desktop Menu ================= */}
          <nav className="hidden lg:flex flex-1 justify-center space-x-8">
            {loading ? (
              <span className="text-gray-400">Loading...</span>
            ) : (
              menuItems.map((item) => (
                <div key={item.id || item.label} className="relative group">
                  <Link
                    to={item.path || item.url || "#"}
                    className="font-bold text-sm text-gray-700 flex items-center gap-1 hover:text-blue-600"
                    onClick={
                      item.label === "CONTACT" ? handleContactClick : undefined
                    }
                  >
                    {item.title || item.label}
                    {item.children?.length ? (
                      <ChevronDown className="w-3 h-3" />
                    ) : null}
                  </Link>

                  {/* Level 1 */}
                  {item.children?.length ? (
                    <div
                      className="absolute left-0 mt-[16px]  w-52 bg-white shadow-lg rounded-md z-50
                      transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100"
                    >
                      {item.children.map((sub) => (
                        <div
                          key={sub.id || sub.label}
                          className="relative group/sub"
                        >
                          <Link
                            to={sub.url || "#"}
                            className="flex justify-between px-4 py-2 font-bold text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {sub.title}
                            {sub.children?.length ? (
                              <ChevronRight className="w-3 h-3" />
                            ) : null}
                          </Link>

                          {/* Level 2 */}
                          {sub.children?.length ? (
                            <div className="absolute left-full top-0 w-52 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/sub:visible group-hover/sub:opacity-100 transition duration-200">
                              {sub.children.map((third) => (
                                <Link
                                  key={third.id || third.label}
                                  to={third.url || "#"}
                                  className="block px-4 py-2 font-bold text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                >
                                  {third.title}
                                </Link>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))
            )}
          </nav>

          {/* ================= Right Side ================= */}
          <div className="flex items-center gap-4">
            <Link to="/athletes/register" className="hidden lg:block">
              <button className="px-4 py-2 bg-[#0e276b] text-white rounded-md font-semibold hover:bg-blue-700">
                Register Now
              </button>
            </Link>

            {/* Mobile Toggle */}
            <Button
              variant="ghost"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu />
            </Button>
          </div>
        </div>

        {/* ================= Mobile Menu ================= */}
        {/* ================= Mobile Menu ================= */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            {menuItems.map((item, idx) => {
              const hasChildren = item.children && item.children.length > 0;

              return (
                <div key={idx} className="border-b">
                  {/* LEVEL 1 */}
                  {hasChildren ? (
                    <button
                      className="w-full px-4 py-3 font-bold flex justify-between items-center"
                      onClick={() =>
                        setMobileSubmenuOpen(
                          mobileSubmenuOpen === idx ? null : idx
                        )
                      }
                    >
                      {item.title || item.label}
                      {mobileSubmenuOpen === idx ? (
                        <ChevronUp />
                      ) : (
                        <ChevronDown />
                      )}
                    </button>
                  ) : (
                    <Link
                      to={item.path || item.url || "#"}
                      className="block px-4 py-3 font-bold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title || item.label}
                    </Link>
                  )}

                  {/* LEVEL 2 */}
                  {mobileSubmenuOpen === idx &&
                    item.children?.map((sub, sIdx) => {
                      const hasSubChildren =
                        sub.children && sub.children.length > 0;

                      return (
                        <div key={sIdx} className="bg-gray-50">
                          {hasSubChildren ? (
                            <button
                              className="w-full px-6 py-2 font-bold flex justify-between items-center"
                              onClick={() =>
                                setMobileSubSubmenuOpen(
                                  mobileSubSubmenuOpen === sIdx ? null : sIdx
                                )
                              }
                            >
                              {sub.title}
                              <ChevronRight />
                            </button>
                          ) : (
                            <Link
                              to={sub.url || "#"}
                              className="block px-6 py-2 font-bold"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {sub.title}
                            </Link>
                          )}

                          {/* LEVEL 3 */}
                          {mobileSubSubmenuOpen === sIdx &&
                            sub.children?.map((third) => (
                              <Link
                                key={third.id}
                                to={third.url || "#"}
                                className="block px-10 py-2 font-bold text-sm"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {third.title}
                              </Link>
                            ))}
                        </div>
                      );
                    })}
                </div>
              );
            })}

            <Link
              to="/athletes/register"
              onClick={() => setMobileMenuOpen(false)}
            >
              <button className="w-full my-4 px-4 py-2 bg-[#0e276b] text-white rounded-md font-semibold">
                Register Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
