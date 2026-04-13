import React from 'react';

const DoctorSpecialties = () => {
  // Array of doctor specialties
  const specialties = [
    { name: "Physician", link: "/doctors/General%20physician" },
    { name: "Gynecologist", link: "/doctors/Gynecologist" },
    { name: "Dermatology", link: "/doctors/Dermatologist" },
    { name: "Pediatrics", link: "/doctors/Pediatricians" },
    { name: "Gynecology", link: "/doctors/Neurologist" },
    { name: "Neurology", link: "/doctors/Gastroenterologist" }
  ];

  return (
    <div className="p-6 mt-5">
      {/* About Our Specialties Section */}
      <div className="text-center mb-12">
        <h1 className='text-3xl font-medium text-primary'>About Our Specialties</h1>
        <p className="mt-4 text-lg text-gray-700">
          We offer a wide range of medical specialties, including expert care from top doctors in various fields. 
          Our doctors are experienced and dedicated to providing you with the best healthcare solutions. 
          You can easily book an appointment with a specialist who meets your needs.
        </p>
      </div>

      {/* Click Below to Book Appointment Section */}
      <div className="text-center mb-12">
        <p className="text-xl font-semibold text-primary">Click below to book your appointment</p>
      </div>

      {/* Doctor Specialties Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {specialties.map((specialty, index) => (
          <a 
            key={index} 
            href={specialty.link} 
            className="relative group bg-purple-900 text-white p-6 rounded-lg text-center shadow-lg hover:scale-105 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-opacity-0 bg-black rounded-lg group-hover:bg-opacity-0 transition-all duration-300"></div>
            <h3 className="text-xl font-semibold">{specialty.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default DoctorSpecialties;
