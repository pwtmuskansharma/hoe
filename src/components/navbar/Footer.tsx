// import { Link } from "react-router-dom";
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";
// import {
//   Trophy,
//   Facebook,
//   Twitter,
//   Instagram,
//   Youtube,
//   Mail,
//   Phone,
//   MapPin,
//   Linkedin,
//   X,
// } from "lucide-react";

// export function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Organization Info */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-3">
//               <Trophy className="h-8 w-8 text-blue-400" />
//               <div>
//                 <h3 className="font-semibold">Haryana Olympic Association</h3>
//                 <p className="text-sm text-gray-400">
//                   Excellence in Sports Excellence
//                 </p>
//               </div>
//             </div>
//             <p className="text-gray-300 leading-relaxed">
//               Committed to developing Olympic champions from Haryana and
//               promoting sporting excellence across all disciplines in the state.
//             </p>
//             <div className="flex space-x-3">
//               {/* Facebook */}
//               <a
//                 href="https://www.facebook.com/HaryanaOlympicAssociation"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Button
//                   size="sm"
//                   variant="ghost"
//                   className="text-gray-400 hover:text-blue-500 p-2"
//                 >
//                   <Facebook className="h-5 w-5" />
//                 </Button>
//               </a>

//               {/* Twitter / X */}
//               <a
//                 href="https://twitter.com/Haryana_olympic"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Button
//                   size="sm"
//                   variant="ghost"
//                   className="text-gray-400 hover:text-blue-500 p-2"
//                 >
//                   <Twitter className="h-5 w-5" />
//                 </Button>
//               </a>

//               {/* Instagram */}
//               <a
//                 href="https://www.instagram.com/haryanaolympicassociation"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Button
//                   size="sm"
//                   variant="ghost"
//                   className="text-gray-400 hover:text-pink-500 p-2"
//                 >
//                   <Instagram className="h-5 w-5" />
//                 </Button>
//               </a>

//               {/* YouTube */}
//               <a
//                 href="https://www.youtube.com/@HaryanaOlympicAssociation"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Button
//                   size="sm"
//                   variant="ghost"
//                   className="text-gray-400 hover:text-red-500 p-2"
//                 >
//                   <Youtube className="h-5 w-5" />
//                 </Button>
//               </a>

//               {/* LinkedIn */}
//               <a
//                 href="https://www.linkedin.com/company/haryanaolympicassociation"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Button
//                   size="sm"
//                   variant="ghost"
//                   className="text-gray-400 hover:text-blue-500 p-2"
//                 >
//                   <Linkedin className="h-5 w-5" />
//                 </Button>
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   to="#"
//                   className="text-gray-300 hover:text-white transition-colors"
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="#news"
//                   className="text-gray-300 hover:text-white transition-colors"
//                 >
//                   Latest News
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="#events"
//                   className="text-gray-300 hover:text-white transition-colors"
//                 >
//                   Upcoming Events
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="#gallery"
//                   className="text-gray-300 hover:text-white transition-colors"
//                 >
//                   Sports Gallery
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="#"
//                   className="text-gray-300 hover:text-white transition-colors"
//                 >
//                   Olympic Values
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="#"
//                   className="text-gray-300 hover:text-white transition-colors"
//                 >
//                   Anti-Doping
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="font-semibold mb-4">Contact Us</h4>
//             <div className="space-y-3">
//               <div className="flex items-center space-x-3">
//                 <MapPin className="h-4 w-4 text-gray-400" />
//                 <span className="text-sm text-gray-300">
//                   Olympic Bhawan, Sector 3, Panchkula, Haryana 134115
//                 </span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone className="h-4 w-4 text-gray-400" />
//                 <span className="text-sm text-gray-300">0172 258 6803</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Mail className="h-4 w-4 text-gray-400" />
//                 <span className="text-sm text-gray-300">
//                   hrolympicassociation@gmail.com
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h4 className="font-semibold mb-4">Stay Updated</h4>
//             <p className="text-sm text-gray-300 mb-4">
//               Subscribe to our newsletter for the latest Olympic news and
//               updates.
//             </p>
//             <div className="space-y-3">
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
//               />
//               <Button size="sm" className="w-full">
//                 Subscribe
//               </Button>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-sm text-gray-400">
//               © 2024 Haryana Olympic Association. All rights reserved.
//             </p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <Link
//                 to="#"
//                 className="text-sm text-gray-400 hover:text-white transition-colors"
//               >
//                 Privacy Policy
//               </Link>
//               <Link
//                 to="#"
//                 className="text-sm text-gray-400 hover:text-white transition-colors"
//               >
//                 Terms of Use
//               </Link>
//               <Link
//                 to="#"
//                 className="text-sm text-gray-400 hover:text-white transition-colors"
//               >
//                 Cookie Policy
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Trophy,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from "lucide-react";
import { apiFetch } from "../../services/api/Navbar"; // same API as menu
import { apiAboutPage } from "../../services/api/Pages";

interface FooterPage {
  name: string;
  url: string;
}

export function Footer() {
  const [footerPages, setFooterPages] = useState<FooterPage[]>([]);
  const [settings, setSettings] = useState<any>({});
  const [policyPages, setPolicyPages] = useState<PolicyPage[]>([]);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const res = await apiFetch("menu");
        const data = res?.data?.data;
        setSettings(data?.settings || {});
        setFooterPages(data?.footer_pages || []);
      } catch (err) {
        console.error("Footer fetch error:", err);
      }
    };

    fetchFooter();
  }, []);

  useEffect(() => {
    const fetchPolicyPages = async () => {
      try {
        const policySlugs = ["privacy-policy", "terms-of-use", "cookie-policy"];
        const promises = policySlugs.map(
          (slug) =>
            apiAboutPage(`pages/${slug}`)
              .then((res: any) => res?.data?.data)
              .catch(() => null) // agar fail ho jaye to null return kare
        );
        const pages = (await Promise.all(promises)).filter(Boolean); // null remove
        setPolicyPages(pages);
      } catch (err) {
        console.error("Policy pages fetch error:", err);
      }
    };
    fetchPolicyPages();
  }, []);

  interface PolicyPage {
    id: number;
    title: string;
    slug: string;
    body: string;
    image?: string;
  }
  const quickLinkSlugMap: Record<string, string> = {
    "about us": "about-us",
    "olympic values": "olympic-values",
    "anti-doping": "anti-doping",
  };
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {settings.favicon ? (
                <img
                  src={settings.favicon}
                  alt="favicon"
                  className="h-10 w-10 object-contain"
                />
              ) : (
                <Trophy className="h-8 w-8 text-blue-400" />
              )}
              <div>
                <h3 className="font-semibold">
                  {settings.app_name || "Haryana Olympic Association"}
                </h3>
                <p className="text-sm text-gray-400">
                  Excellence in Sports Excellence
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              {settings.description || ""}
            </p>
            <div className="flex space-x-3">
              {/* Facebook */}
              {settings.facebook_url && (
                <Link
                  to={settings.facebook_url}
                  // target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-gray-400 hover:text-blue-500 p-2"
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                </Link>
              )}

              {/* Twitter / X */}
              {settings.twitter_url && (
                <Link
                  to={settings.twitter_url}
                  // target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-gray-400 hover:text-blue-500 p-2"
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                </Link>
              )}

              {/* Instagram */}
              {settings.instagram_url && (
                <Link
                  to={settings.instagram_url}
                  // target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-gray-400 hover:text-pink-500 p-2"
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                </Link>
              )}

              {/* YouTube */}
              {settings.youtube_url && (
                <Link
                  to={settings.youtube_url}
                  // target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-gray-400 hover:text-red-500 p-2"
                  >
                    <Youtube className="h-5 w-5" />
                  </Button>
                </Link>
              )}

              {/* LinkedIn */}
              {settings.linkedin_url && (
                <Link
                  to={settings.linkedin_url}
                  // target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-gray-400 hover:text-blue-500 p-2"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-2">
              {/* ===== Backend pages (filtered) ===== */}
              {footerPages
                ?.filter((page) =>
                  ["about us", "olympic values", "anti-doping"].includes(
                    page.name.toLowerCase()
                  )
                )
                .map((page) => {
                  const slug = quickLinkSlugMap[page.name.toLowerCase()];

                  return (
                    <li key={page.name}>
                      <Link
                        to={`/pages/${slug}`}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {page.name}
                      </Link>
                    </li>
                  );
                })}

              {/* ===== Static pages ===== */}
              <li>
                <Link
                  to="/news"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Latest News
                </Link>
              </li>

              <li>
                <Link
                  to="/events"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Upcoming Events
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sports Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-300">
                  {settings.address}
                </span>
              </div>
              {settings.phone && (
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-300">
                    {settings.phone}
                  </span>
                </div>
              )}
              {settings.email && (
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-300">
                    {settings.email}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to our newsletter for the latest Olympic news and
              updates.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">{settings.footer_text}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {policyPages && policyPages.length > 0
                ? policyPages.map(
                    (page) =>
                      page?.slug && (
                        <Link
                          key={page.slug}
                          to={`/pages/${page.slug}`}
                          className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          {page.title}
                        </Link>
                      )
                  )
                : ["Privacy Policy", "Terms of Use", "Cookie Policy"].map(
                    (name) => (
                      <Link
                        key={name}
                        to="#"
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {name}
                      </Link>
                    )
                  )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
