import React from 'react';

export default function OurStaff() {
  const staff = [
    {
      name: "KOZY IKWUAZOM",
      role: "Head Coach – Academy General Manager",
      credentials: "United Soccer Coach License",
      experience: "5+ years"
    },
    {
      name: "ZACK OGOO",
      role: "Head Coach – Academy Technical Director",
      credentials: "United Soccer Coach License",
      experience: "5+ years"
    },
    {
      name: "ALEC ADECLAT",
      role: "Head Coach – Academy Technical Director",
      credentials: "United Soccer Coach License",
      experience: "5+ years"
    },
     {
      name: "JOSHUA ALLEN",
      role: "Staff Coach – Boys & Girls",
      credentials: "United Soccer Coach License",
      experience: "4+ years"
    },
    {
      name: "JASON ALVAREZ",
      role: "Staff Coach – Boys & Girls",
      credentials: "United Soccer Coach License",
      experience: "4+ years"
    },
    { name: "JASON ALVAREZ",
      role: "Staff Coach – Boys & Girls",
      credentials: "United Soccer Coach License",
      experience: "4+ years"
    },
    { name: "CHRIS LEIDNER",
      role: "Staff Coach – Boys & Girls",
      credentials: "United Soccer Coach License",
      experience: "4+ years"
    },
    { name: "JORGE RODRIGUEZ",
      role: "Staff Coach – Boys & Girls",
      credentials: "United Soccer Coach License",
      experience: "4+ years"
    },
    { name: "KRISTINA GAMBINO",
      role: "Staff Coach – Boys & Girls",
      credentials: "United Soccer Coach License",
      experience: "4+ years"
    },
    { name: "PHIL IACONO",
      role: "Goalkeeper Coach – Boys & Girls",
      credentials: "United Soccer Coach License",
      experience: "4+ years"
    },
    { name: "MATTHEW IMBROSCIANO",
      role: "Coach & Equipment Director – Boys & Girls",
      credentials: "United Soccer Coach License",
      experience: "4+ years"
    },
     { name: "JOE OGOO",
      role: "Staff Coach – Boys & Girls",
      credentials: "United Soccer Coach License",
      experience: "4+ years"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Staff</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {staff.map((member) => (
          <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{member.name}</h2>
              <p className="text-[#8ED204] font-semibold mb-2">{member.role}</p>
              <div className="text-gray-600">
                <p>{member.credentials}</p>
                <p>{member.experience}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
