import React from 'react';
import zluriLogo from '../../assets/zluri.jpg';   // example path
import amazonLogo from '../../assets/amazon.png';
import freshworksLogo from '../../assets/freshworks.png';
import tcsLogo from '../../assets/tcs.avif';

const CompanySection = () => {
  return (
    <div id='work' className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
          Over the last 4 years, I have built B2B SaaS & B2C products in
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

        {/* Logos + Text */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* Zluri */}
          <div className="flex items-center gap-3">
            <img src={zluriLogo} alt="Zluri" className="w-20 h-14 object-contain mb-4" />
            {/* <span className="text-2xl md:text-3xl font-semibold text-gray-800">Zluri</span> */}
          </div>

          {/* Amazon */}
          <div className="flex items-center gap-3">
            <img src={amazonLogo} alt="Amazon" className="w-44 h-30 object-contain" />
            {/* <span className="text-3xl md:text-4xl font-bold text-gray-900">Amazon</span> */}
          </div>

          {/* Freshworks */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <img src={freshworksLogo} alt="Freshworks" className="w-25 h-25 object-contain" />
              {/* <span className="text-2xl md:text-3xl font-bold text-green-600">Freshworks</span> */}
            </div>
            {/* <div className="text-xs md:text-sm text-gray-500 font-medium">Software Solutions</div> */}
          </div>

          {/* TCS */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <img src={tcsLogo} alt="TCS" className="w-44 h-30 object-contain" />
              {/* <span className="text-3xl md:text-4xl font-bold text-blue-800">TCS</span> */}
            </div>
            {/* <div className="text-sm md:text-base text-blue-600 font-medium">Tata Consultancy Services</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
