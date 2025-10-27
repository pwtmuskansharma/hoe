import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-sky-200 to-sky-200 px-6 py-12">
      {/* Container */}
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12">
        {/* Title Section */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6">
          Haryana Olympic Association
        </h1>

        {/* Divider */}
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>

        {/* Introduction Section */}
        <section className="text-gray-700 text-base md:text-lg leading-relaxed space-y-5">
          <p>
            The <strong>Haryana Olympic Association (HOA)</strong> is an
            autonomous sports body affiliated with the Indian Olympic
            Association in the state of Haryana, India. Founded in 1966, the HOA
            is the apex sports body in the State of Haryana which is responsible
            for governing all Olympic and Non-Olympic State Sports Associations
            in the State of Haryana.
          </p>

          <p>
            HOA is dedicated to promoting sports development and nurturing
            athletic talent in the state and works tirelessly to identify,
            train, and support athletes, coaches, and sports officials, enabling
            them to excel at national and international levels.
          </p>

          <p>
            HOA plays a vital role in shaping the sports landscape of Haryana,
            working closely with government agencies, sports federations, and
            other stakeholders to promote sports development and excellence in
            the state.
          </p>

          <p>
            HOA has constituted various committees for{" "}
            <strong>Athlete Welfare & Governance</strong>
            which play an important role in monitoring and governing the rules &
            regulations, ensuring fair play, transparency in the selection
            process, handling complaints against sexual harassment, and taking
            actions in disciplinary matters...
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
