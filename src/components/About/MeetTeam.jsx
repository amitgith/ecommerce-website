import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Amit Kumar Sharma",
    role: "Founder & CEO",
    avatar: "A",
    bg: "bg-indigo-400",
    text: "text-black",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Head of Product",
    avatar: "P",
    bg: "bg-blue-500",
    text: "text-white",
  },
  {
    id: 3,
    name: "Rohan Verma",
    role: "Lead Engineer",
    avatar: "R",
    bg: "bg-purple-500",
    text: "text-white",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    role: "Design Director",
    avatar: "S",
    bg: "bg-rose-500",
    text: "text-white",
  },
];

const MeetTeam = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Meet the Team
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group rounded-3xl border border-white bg-[#0F0F0F] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-indigo-600 hover:shadow-lg"
            >
              {/* Avatar */}
              <div
                className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${member.bg} ${member.text} text-3xl font-bold transition-transform duration-300 group-hover:scale-110`}
              >
                {member.avatar}
              </div>

              {/* Name */}
              <h3 className="mt-6 text-xl font-semibold text-white">
                {member.name}
              </h3>

              {/* Role */}
              <p className="mt-2 text-sm text-neutral-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;
