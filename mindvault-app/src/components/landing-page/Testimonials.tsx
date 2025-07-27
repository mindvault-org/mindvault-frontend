import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="bg-white dark:bg-zinc-900 py-24 px-6 sm:px-10 text-zinc-900 dark:text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
          What users say
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 mt-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm"
            >
              <p className="italic mb-4 text-zinc-700 dark:text-zinc-300">
                “{t.quote}”
              </p>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                <strong className="block text-zinc-800 dark:text-white">
                  {t.name}
                </strong>
                {t.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
