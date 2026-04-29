import profileImg from "../assets/editor/men.jpg";
import gokhanImg from "../assets/editor/kids.jpg";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
const teamMembers = [
  {
    name: "Gökhan Özdemir",
    role: "Project Manager",
    image: gokhanImg,
  },
  {
    name: "Uğur Cihan İçöz",
    role: "Full Stack Developer",
    image: profileImg,
  },
  
];

export default function TeamPage() {
  return (
    <main className="px-6 py-16">
      <section className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-bold text-[#23A6F0]">WHAT WE DO</p>

        <h1 className="mt-4 text-4xl md:text-6xl font-bold text-[#252B42]">
          Innovation tailored for you
        </h1>

        <p className="mt-4 text-[#737373]">
          Meet the people behind our e-commerce project.
        </p>
      </section>

      <section className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[360px] object-cover object-top"
            />

            <h3 className="mt-6 text-lg font-bold text-[#252B42]">
              {member.name}
            </h3>

            <p className="mt-2 text-sm font-bold text-[#737373]">
              {member.role}
            </p>
          </div>
        ))}
      </section><section className="bg-gray-50 py-16 mt-16">
  <div className="max-w-3xl mx-auto text-center px-6">
    
    <h2 className="text-2xl md:text-3xl font-bold text-[#252B42]">
      Start your 14 days free trial
    </h2>

    <p className="mt-4 text-sm text-gray-500">
      Met minim Mollie non desert Alamo est sit cliquey dolor
      do met sent. RELIT official consequat.
    </p>

    <button className="mt-6 bg-[#23A6F0] text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-blue-600 transition">
      Try it free now
    </button>

    {/* Social Icons */}
    <div className="flex justify-center gap-4 mt-6 text-[#23A6F0] text-lg">
        <Twitter size={20} />
        <Facebook size={20} />
        <Instagram size={20} />
        <Linkedin size={20} />
    </div>

  </div>
</section>
    </main>
  );
}