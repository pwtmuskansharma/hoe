import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PersonalityCard() {
  const person = {
    name: "From the HOA President’s Desk",
    image: "/images/hoa-president.jpg",
    pattern: "/images/pattern.jpg",
    description: `It is my privilege to extend a warm welcome to you all on behalf of the Haryana Olympic Association (HOA). Haryana has long been the heartbeat of Indian sports — a land that continues to produce champions who bring pride and glory to our nation. The Haryana Olympic Association remains committed to nurturing this sporting legacy. Our vision is to provide athletes with the infrastructure, guidance, and opportunities they need to excel — not just at the state or national level, but on the global stage. We believe that true sporting excellence is built on discipline, integrity, and passion — values that lie at the core of our work. Through this platform, we aim to keep our athletes, coaches, and sports enthusiasts informed about events, training programs, and developmental initiatives. More importantly, we wish to inspire every young athlete in Haryana to dream big and believe that with perseverance, anything is possible. Together, let us continue to strengthen Haryana’s position as a powerhouse of Indian sports and uphold the Olympic spirit of unity, respect, and excellence.`,
  };

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-r from-indigo-900 via-blue-800 to-teal-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <ImageWithFallback
        src={person.pattern}
        alt="Background pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-10 -z-10"
      />

      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-col lg:flex-col items-center text-center space-y-8">
          {/* Image */}
          <div className="w-full md:w-2/3 lg:w-1/2 mx-auto  overflow-hidden shadow-2xl">
            <ImageWithFallback
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
              {person.name}
            </h2>
            <p className="text-base sm:text-lg md:text-lg leading-relaxed text-gray-100 whitespace-pre-line">
              {person.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
