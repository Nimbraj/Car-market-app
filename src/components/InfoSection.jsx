import React from 'react';

function InfoSection() {
    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                        <div className="relative z-10 lg:py-16">
                            <div className="relative h-64 sm:h-80 lg:h-full">
                                <img
                                    alt="Scenic landscape view"
                                    src="https://i.pinimg.com/originals/93/69/97/9369976caa0803b576406edec35edab7.jpg"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="relative flex items-center bg-gray-100">
                            <span
                                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                            ></span>

                            <div className="p-8 sm:p-16 lg:p-24">
                                <h2 className="text-2xl font-bold sm:text-3xl">
                                n the U.S., the Dodge Durango has become a popular family vehicle in its place, offering SUV capabilities.
                                </h2>

                                <p className="mt-4 text-gray-600">
                                    The Dodge Grand Caravan, a popular minivan that first debuted in 1983, was discontinued in 2020 due 
                                    to declining sales and a market shift toward SUVs. Despite being the best-selling minivan for Dodge, with
                                     122,000 units sold in 2019, the demand for minivans dropped significantly,
                                     leading Fiat Chrysler Automobiles (now Stellantis) to halt its production.
                                </p>

                                <a
                                    href="#"
                                    className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                >
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default InfoSection;
