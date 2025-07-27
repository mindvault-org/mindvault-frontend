import { faqs } from "@/lib/constants";

export default function FAQ() {
  return (
    <section className="bg-zinc-50 dark:bg-zinc-950 py-24 px-6 sm:px-10 text-zinc-900 dark:text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 space-y-6 text-left">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
