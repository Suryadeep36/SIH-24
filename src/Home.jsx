"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  LightBulbIcon,
  ArrowTrendingUpIcon,
  SparklesIcon
} from "@heroicons/react/20/solid";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-green-300">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="p-1.5 flex flex-row">
            <img
                  alt="Soilsense logo"
                  src="./SoilSenseLogo.png"
                  className="w-10 h-auto mx-2"
                />
              <p className="text-xl  text-black font-bold">SoilSense</p>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">SoilSense</span>
                <img
                  alt="Soilsense logo"
                  src="./SoilSenseLogo.png"
                  className="w-10 h-auto mx-2"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
       
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Predict Plant Growth Like Never Before - Unlock the Future of
              Farming Today!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate impedit possimus error et aperiam placeat itaque voluptate commodi! Aliquid quae numquam labore corporis ipsa ex earum qui, iusto iure mollitia tenetur ipsum laboriosam odio ullam. Modi aliquam ut dolorum excepturi aspernatur maxime, nam necessitatibus dicta dolor tempora atque consequatur quasi similique unde voluptatem deleniti aut, velit amet explicabo, incidunt sint fugit sapiente neque quod. Harum eaque sed rerum nulla, recusandae quibusdam vel neque perferendis obcaecati asperiores perspiciatis repellat, at exercitationem magni quo fuga excepturi velit blanditiis? Blanditiis doloribus dicta aspernatur iusto perspiciatis architecto odit amet, illo, consequatur, illum esse!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                
              >
                Get started
              </a>
              
            </div>
          </div>
        </div>  
      </div>
      <div className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A better way to analayze your crops
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Here are some features provided by SoilSense:
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias officia possimus cupiditate vel sequi consequatur quisquam deserunt blanditiis ut? Repudiandae.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt=""
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                
                <ul role="list" className="space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    < LightBulbIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none text-green-600"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Better Decisions
                      </strong>{" "}
                      SoilSense anaylzes soil, weather and market trends to recommend the best crops for optimal results
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ArrowTrendingUpIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none text-green-600"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Increased profitablity
                      </strong>{" "}
                      It predicts crop prices and suggest ideal crops, helping farmers boost income. 
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <SparklesIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none text-green-600"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Resource Efficieny.
                      </strong>{" "}
                      By optimizing resource use, SoilSense reduces water, fertilizer waste, and efficieny.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
