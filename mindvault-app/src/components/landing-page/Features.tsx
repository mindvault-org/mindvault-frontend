import Image from "next/image";
import {
  BrainCog,
  Search,
  CalendarDays,
  Sparkles,
  FileText,
  RefreshCcw,
} from "lucide-react";
import PlanetImg from "@/app/favicon.ico";

export default function Features() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Built for clarity, designed for thinkers
            </h2>
          </div>

          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-cyan-600/30 before:to-purple-700/40 before:blur-3xl">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-gray-300 md:*:p-10 *:relative *:p-6 *:rounded-2xl *:bg-gray-900/30 *:backdrop-blur-md *:border *:border-white/10">
            <FeatureItem
              icon={BrainCog}
              color="#D56434"
              title="Linked Thoughts"
              desc="Connect notes together like a mind map — discover patterns and connections you didn’t even know were there."
            />
            <FeatureItem
              icon={Search}
              color="#6D66E7"
              title="Fast Search"
              desc="Search through your entire vault instantly. Everything is indexed, even inside nested pages."
            />
            <FeatureItem
              icon={CalendarDays}
              color="#00CFC5"
              title="Daily Notes"
              desc="Capture fleeting thoughts, journaling, or planning — a fresh canvas every day to stay focused."
            />
            <FeatureItem
              icon={Sparkles}
              color="#D56434"
              title="AI Summaries"
              desc="Summarize long notes into key takeaways with one click. Perfect for review or sharing."
            />
            <FeatureItem
              icon={FileText}
              color="#6D66E7"
              title="Markdown & Rich Text"
              desc="Write how you want — whether plain Markdown or rich formatting with tags, checklists and embeds."
            />
            <FeatureItem
              icon={RefreshCcw}
              color="#00CFC5"
              title="Cross-Platform Sync"
              desc="Pick up where you left off — your knowledge vault syncs across desktop, tablet and mobile."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { LucideIcon } from "lucide-react";

function FeatureItem({
  icon: Icon,
  color,
  title,
  desc,
}: {
  icon: LucideIcon;
  color: string;
  title: string;
  desc: string;
}) {
  return (
    <article>
      <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
        <Icon size={20} strokeWidth={2} color={color} />
        <span>{title}</span>
      </h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </article>
  );
}
