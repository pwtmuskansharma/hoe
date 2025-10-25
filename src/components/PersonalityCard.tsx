import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PersonalityCard() {
  const person = {
    name: "From the HOA President’s Desk",
    image: "/images/hoa-president.jpg",
    pattern: "/images/pattern.jpg",
    description: `It is my privilege to extend a warm welcome to you all on behalf of the Haryana Olympic Association (HOA). Haryana has long been the heartbeat of Indian sports — a land that continues to produce champions who bring pride and glory to our nation.The Haryana Olympic Association remains committed to nurturing this sporting legacy. Our vision is to provide athletes with the infrastructure, guidance, and opportunities they need to excel — not just at the state or national level, but on the global stage. We believe that true sporting excellence is built on discipline, integrity, and passion — values that lie at the core of our work.Through this platform, we aim to keep our athletes, coaches, and sports enthusiasts informed about events, training programs, and developmental initiatives. More importantly, we wish to inspire every young athlete in Haryana to dream big and believe that with perseverance, anything is possible.Together, let us continue to strengthen Haryana’s position as a powerhouse of Indian sports and uphold the Olympic spirit of unity, respect, and excellence.`,
  };

  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
      {/* Background Pattern */}
      <ImageWithFallback
        src={person.pattern}
        alt="Background pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-10 -z-10"
      />

      <div className="relative w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
          {/* Left Side — Image */}
          <div className="h-[80%] md:h-auto">
            <ImageWithFallback
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side — Text */}
          <div className="flex flex-col justify-center p-6 md:p-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
              {person.name}
            </h2>
            <p className="text-lg leading-relaxed whitespace-pre-line text-blue-100">
              {person.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
