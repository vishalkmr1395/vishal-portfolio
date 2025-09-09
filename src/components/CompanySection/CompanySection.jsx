import React from 'react';

const CompanySection = () => {
  return (
    <div id='work' className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
        Over the last 4 years, I've built B2B SaaS & B2C products in
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-2">
        Saas, FinTech, EdTech{' '}
        <span className="text-yellow-500">&</span>
        </h2>
        
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
        User Experience Benchmarking
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-16">
        for customers across US and India.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded mr-3 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">Z</span>
                </div>
                <span className="text-2xl md:text-3xl font-semibold text-gray-800">Zluri</span>
            </div>
            <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900">amazon</div>
                <div className="w-16 h-1 bg-orange-400 rounded-full mx-auto mt-1 relative">
                    <div className="absolute -right-1 -top-1 w-0 h-0 border-l-2 border-l-orange-400 border-t-1 border-t-transparent border-b-1 border-b-transparent"></div>
                </div>
            </div>
            <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">Freshworks</div>
                <div className="text-xs md:text-sm text-gray-500 font-medium">Software Solutions</div>
            </div>
        <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-800">TCS</div>
                <div className="text-sm md:text-base text-blue-600 font-medium">Tata Consultancy Services</div>
                <div className="flex justify-center mt-1">
            <div className="w-6 h-1 bg-blue-600 rounded-full"></div>
            </div>
        </div>
        </div>
    </div>
    </div>
);
};

export default CompanySection;