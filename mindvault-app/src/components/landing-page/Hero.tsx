export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,#cbd5e1,transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Your ideas, <br className="max-lg:hidden" />
              connected and organized
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Mindvault is your intelligent knowledge base - capture, link,
                and resurface insights effortlessly. Built for thinkers,
                creators, and lifelong learners.
              </p>

              {/* Call to action */}
              <div
                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                data-aos="zoom-y-out"
                data-aos-delay={450}
              >
                <button className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#D56434] px-6 py-3 text-sm font-medium text-white shadow-md transition-colors duration-150 hover:bg-[#c4572b]">
                  Try Mindvault Free
                </button>
                <button className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-gray-800 px-6 py-3 text-sm font-medium text-gray-800 transition-colors duration-150 hover:bg-gray-100">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="aspect-video rounded-2xl bg-gray-100 shadow-xl flex items-center justify-center text-gray-400 text-lg font-mono">
              [ Product image here ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
