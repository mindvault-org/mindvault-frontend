import { features } from "@/lib/constants";

export default function Features() {
  return (
    <section className="bg-zinc-50 dark:bg-zinc-950 py-24 px-6 sm:px-10 text-zinc-900 dark:text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
          Built for thinkers
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-xl mx-auto">
          MindVault gives you powerful tools to make sense of your thoughts and
          never lose an insight again.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
