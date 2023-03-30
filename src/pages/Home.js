import React from "react";
import Navbar from "../components/Navbar";
import floatingCups from "../Assets/floatingCups.png";
import cups from "../Assets/cups.png";
import smallCup from "../Assets/smallCup.png";
import kpjCup from "../Assets/KPG-cup.png";
import { IoArrowForward, IoPersonCircleOutline } from "react-icons/io5";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function Home() {
  const people = [
    {
      name: "Mohammad Almosallam",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Majed Biazed",
      role: "Co-Founder",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Abdullelah Algamdi",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Meshal Aldajani",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];
  return (
    <div className="relative">
      <Navbar />
      <main>
        <div className="relative text-center overflow-hidden w-[100%]">
          <img
            className="z-[1] w-full  scale-125   md:scale-125  md:w-[100%]  max-w-[1150px] m-auto"
            src={floatingCups}
          />
          <h1
            style={{
              fontSize:
                "calc(100px + (300 - 100) * ((100vw - 100px) / (1600 - 900)))",
            }}
            className="  bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-100 absolute font-bold  left-[50%] z-[-1] top-[50%] translate-x-[-50%] translate-y-[-50%] "
          >
            PRINT
          </h1>
        </div>
        <div className="text-center my-16">
          <h1 className="text-[4rem] font-bold">Cups at your need</h1>
          <p className="  max-w-[50ch] m-auto">
            Exercitation nisi Lorem incididunt sunt. Veniam nulla anim dolore ad
            non velit consectetur. Sunt ex et qui exercitation adipisicing nisi
            non magna. Quis amet elit ullamco minim
          </p>
        </div>

        <section className="flex flex-col shadow-lg my-28  mx-4  md:mx-24 md:my-44 md:flex-row  ">
          <div className="flex-1">
            <img class=" w-[100%] h-[100%] object-cover" src={cups} />
          </div>
          <div className="flex-1 m-auto flex  flex-col  p-6 text-left ">
            <p className="text-sm  ">Lorem fugiat qui</p>
            <h1 className=" text-[3rem] font-bold">Cups?Logo? Print!</h1>
            <h2 className="mt-5 text-[2rem] font-extralight ">8.99 SAR</h2>
            <h3 className="mt-5 font-light">
              Est ex officia velit laboris commodo Lorem ullamco voluptate est
              est deserunt est. Aliquip ex consequat aliquip nostrud aute
              excepteur magna ipsum laboris culpa. Anim reprehenderit mollit ea
              labore quis cupidatat.
            </h3>
            <button className="mt-5 p-2 text-white hover:rounded-xl  flex  items-center gap-2 ease-in-out  duration-200 bg-black  w-fit ">
              Explore now
              <span></span>
              <IoArrowForward />
            </button>
          </div>
        </section>

        <section className="flex flex-col md:flex-row-reverse my-28  md:mx-24 md:my-44  mx-4">
          <div className="flex-1">
            <img class=" w-[100%] h-[100%] object-cover" src={smallCup} />
          </div>
          <div className="flex-1 m-auto flex  flex-col  p-6 text-left ">
            <p className="text-sm  ">Lorem fugiat qui</p>
            <h1 className=" text-[3rem] font-bold">Cups?Logo? Print!</h1>
            <h2 className="mt-5 text-[2rem] font-extralight ">8.99 SAR</h2>
            <h3 className="mt-5 font-light">
              Est ex officia velit laboris commodo Lorem ullamco voluptate est
              est deserunt est. Aliquip ex consequat aliquip nostrud aute
              excepteur magna ipsum laboris culpa. Anim reprehenderit mollit ea
              labore quis cupidatat.
            </h3>
            <button className="mt-5 p-2 text-white hover:rounded-xl  flex  items-center gap-2 ease-in-out  duration-200 bg-black  w-fit ">
              Explore now
              <span></span>
              <IoArrowForward className="  " />
            </button>
          </div>
        </section>

        <section className="my-28 md:mb-16 text-center md:mx-24 md:my-44  mx-4">
          <h1 className=" text-4xl mb-12 font-bold">
            Variety of Sizes and Textures
          </h1>
          <div className="flex flex-col md:flex-row text-left justify-between gap-8">
            <div className="w-full overflow-hidden shadow-lg ">
              <div>
                <img className=" bg-[#EDE6D7] " src={kpjCup} />
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h1 className="font-bold text-lg">Small Size</h1>
                  <p>
                    0.23 SAR{" "}
                    <span className=" text-[0.8rem] font-extralight">
                      (per 1000pcs)
                    </span>
                  </p>
                </div>
                <Link>
                  <IoArrowForward className="w-[2rem] h-[2rem] transition  hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="w-full overflow-hidden shadow-lg ">
              <div>
                <img className=" bg-[#EDE6D7] " src={kpjCup} />
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h1 className="font-bold text-lg">Medium Size</h1>
                  <p>
                    0.39 SAR{" "}
                    <span className=" text-[0.8rem] font-extralight">
                      (per 1000pcs)
                    </span>
                  </p>{" "}
                </div>
                <Link>
                  <IoArrowForward className="w-[2rem] h-[2rem] transition  hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="w-full overflow-hidden shadow-lg ">
              <div>
                <img className=" bg-[#EDE6D7] " src={kpjCup} />
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h1 className="font-bold text-lg">Large Size</h1>
                  <p>
                    0.67 SAR{" "}
                    <span className=" text-[0.8rem] font-extralight">
                      (per 1000pcs)
                    </span>
                  </p>
                </div>
                <Link>
                  <IoArrowForward className="w-[2rem] h-[2rem] transition  hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
          <button className="mt-5 p-2 transition hover:scale-110 rounded-xl m-auto  flex  items-center gap-2 ease-in-out  w-fit ">
            Explore now
            <span></span>
            <IoArrowForward className="  " />
          </button>
        </section>

        <section className=" mt-12">
          <div className="bg-white py-10 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Meet our leadership
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
                  vitae elementum enim vitae ullamcorper suspendisse.
                </p>
              </div>
              <ul
                role="list"
                className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-12 xl:col-span-2"
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="flex items-center gap-x-6">
                      <IoPersonCircleOutline className="w-16 h-16" />
                      <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                          {person.name}
                        </h3>
                        <p className="text-sm font-semibold leading-6 text-indigo-600">
                          {person.role}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-white my-16 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-center text-3xl pb-16 font-semibold leading-8 text-gray-900">
                Trusted by the world’s most innovative companies
              </h2>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                  alt="Transistor"
                  width={158}
                  height={48}
                />
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                  alt="Reform"
                  width={158}
                  height={48}
                />
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                  alt="Tuple"
                  width={158}
                  height={48}
                />
                <img
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                  src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                  alt="SavvyCal"
                  width={158}
                  height={48}
                />
                <img
                  className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                  src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default Home;