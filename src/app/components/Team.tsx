type TeamMember = {
  name: string;
  title: string;
  imageUrl?: string;
};

type TeamProps = {
  title?: string;
  members: TeamMember[];
  className?: string;
};

export default function Team({ title = "The Free For Charity Team", members, className }: TeamProps) {
  return (
    <section className={className}>
      <div className="ffc-container py-12">
        <h2 className="font-[var(--font-faustina)] text-[48px] leading-[60px] text-center">{title}</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {members.map((m, idx) => (
            <article key={`${m.name}-${idx}`} className="text-center">
              <div className="mx-auto w-[318px] h-[318px] rounded-full bg-[#D9D9D9] overflow-hidden grid place-items-center">
                {m.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.imageUrl} alt={m.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="font-[var(--font-faustina)] text-xl text-black/70">Photo</span>
                )}
              </div>
              <h3 className="mt-6 font-[var(--font-lato)] text-[32px] leading-[38px] text-black">{m.name}</h3>
              <p className="mt-2 font-[var(--font-lato)] text-[25px] leading-[38px] text-black/90">{m.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


