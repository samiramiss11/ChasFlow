import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main className="text-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/path/to/background.jpg')` }}>
        <section className="bg-black bg-opacity-60 text-white p-8 rounded-lg mx-auto max-w-4xl mt-16">
          <h1 className="text-3xl font-bold mb-4">Välkommen att boka rum hos oss!</h1>
          <p className="text-lg mb-2">Här kan du söka utifrån vilket rum du önskar eller utifrån vilket datum du önskar.</p>
          <p className="text-lg mb-4">Önskar du överblicka vilka rum som är lediga just nu kan du klicka på översikt.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-chasBlue text-white px-6 py-2 rounded-button hover:bg-opacity-90">Sök ledigt rum för bokning</button>
            <button className="border-2 border-chasBlue text-chasBlue px-6 py-2 rounded-button hover:bg-chasBlue hover:text-white">Se lediga rum för egna studier</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
