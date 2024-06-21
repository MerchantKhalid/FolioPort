import React from 'react';
import java from '../../public/reactjs.png';
import python from '../../public/javascript.png';
import mongoDB from '../../public/mongodb.jpg';
import express from '../../public/express.png';
import reactjs from '../../public/css.jpg';
import nodejs from '../../public/node.png';
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: 'DoctorsPortal',
      lin: 'https://lovely-gumdrop-bae831.netlify.app/',
    },
    {
      id: 2,
      logo: express,
      name: 'EvoGym',
      lin: 'https://curious-fudge-e4ecda.netlify.app',
    },
    {
      id: 3,
      logo: reactjs,
      name: 'BistroBoss',
      lin: 'https://precious-axolotl-193487.netlify.app',
    },
    {
      id: 4,
      logo: nodejs,
      name: 'NextGen',
      lin: 'https://purplefrontier.netlify.app',
    },
    {
      id: 5,
      logo: python,
      name: 'PaintMe',
      lin: 'https://frolicking-phoenix-fce28b.netlify.app',
    },
    {
      id: 6,
      logo: java,
      name: 'AnimatedScroll',
      lin: 'https://neon-douhua-519a36.netlify.app',
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, lin }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700"></p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <a href={lin}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                    Video
                  </button>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
