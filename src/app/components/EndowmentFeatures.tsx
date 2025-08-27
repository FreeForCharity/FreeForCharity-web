type Feature = {
  title: string;
  body: string;
};

type EndowmentProps = {
  title?: string;
  features: Feature[];
  className?: string;
};

import { HandCoins, Clock, Banknote, Users } from "lucide-react";

export default function EndowmentFeatures({
  title = "Free For Charity Endowment Features",
  features,
  className,
}: EndowmentProps) {
  function IconFor(title: string) {
    // Lazy import via top-level import list below
    if (/sustainable\s*funding/i.test(title)) return <HandCoins className="w-8 h-8 text-white" aria-hidden />;
    if (/long[-\s]*term\s*impact/i.test(title)) return <Clock className="w-8 h-8 text-white" aria-hidden />;
    if (/\$?1,?000,?000|goal/i.test(title)) return <Banknote className="w-8 h-8 text-white" aria-hidden />;
    if (/champion|change|people/i.test(title)) return <Users className="w-8 h-8 text-white" aria-hidden />;
    return <HandCoins className="w-8 h-8 text-white" aria-hidden />;
  }
  return (
    <section className={className}>
      <div className="ffc-container py-12">
        <h2 className="font-[var(--font-faustina)] text-[48px] leading-[60px] text-center text-black">{title}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <article key={i} className={i % 2 === 0 ? "ffc-card border-[5px] border-primary rounded-[20px] p-6" : "ffc-card border-[5px] border-primary rounded-[20px] p-6 bg-[#F5F5F5]"}>
              <div className="w-full grid place-items-center">
                <div className="shrink-0 w-16 h-16 rounded-full bg-primary grid place-items-center border-4 border-white shadow">
                  {IconFor(f.title)}
                </div>
              </div>
              <h3 className="mt-3 font-[var(--font-lato)] text-[36px] leading-[43px] text-center text-black">{f.title}</h3>
              <p className="mt-3 font-[var(--font-lato)] text-[25px] leading-[30px] text-center text-black">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


