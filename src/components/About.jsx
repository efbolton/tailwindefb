import React from "react";

function About() {
  return (
    <div name="About" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Trusted by ...</h2>
          <p className="text-3xl py-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            atque, quae quam corrupti tenetur animi laudantium ad vitae
            excepturi obcaecati!
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600 className='text-gray-400 mt-2'">
              100%
            </p>
            <p className="text-gray-400 mt-2">Complettion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600 className='text-gray-400 mt-2'">
              24/7
            </p>
            <p className="text-gray-400 mt-2">Delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600 className='text-gray-400 mt-2'">
              100k
            </p>
            <p className="text-gray-400 mt-2">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
