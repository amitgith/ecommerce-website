import React from "react";
import { Zap, ShieldCheck, Tag } from "lucide-react";

const FeatureBadges = () => {
  const badges = [
    {
      id: 1,
      icon: Zap,
      title: "Fast Delivery",
      desc: "Same-day on select items",
      iconColor: "text-lime-400",
      bg: "bg-lime-400/10",
    },
    {
      id: 2,
      icon: ShieldCheck,
      title: "Secure Payments",
      desc: "100% encrypted checkout",
      iconColor: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      id: 3,
      icon: Tag,
      title: "Best Prices",
      desc: "Price-match guarantee",
      iconColor: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
  ];

  return (
    <section
      className="
      w-full
      bg-[#0a0a0a]
      py-10
      px-4
      sm:px-6
    "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-3
        gap-5
      "
      >
        {badges.map((badge) => {
          const Icon = badge.icon;

          return (
            <div
              key={badge.id}
              className="
                  group
                  flex
                  items-center
                  gap-5
                  bg-[#111111]
                  border
                  border-neutral-800
                  rounded-2xl
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-lime-400/30
                  hover:shadow-lg
                "
            >
              {/* Icon */}

              <div
                className={`
                    w-12
                    h-12
                    rounded-xl
                    ${badge.bg}
                    flex
                    items-center
                    justify-center
                    shrink-0
                    group-hover:scale-110
                    transition
                    duration-300
                  `}
              >
                <Icon size={24} strokeWidth={2} className={badge.iconColor} />
              </div>

              {/* Content */}

              <div className="min-w-0">
                <h4
                  className="
                      text-white
                      text-base
                      font-semibold
                      tracking-tight
                    "
                >
                  {badge.title}
                </h4>

                <p
                  className="
                      text-sm
                      text-neutral-400
                      mt-1
                    "
                >
                  {badge.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureBadges;
