type VolunteerCTAProps = {
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export default function VolunteerCTA({
  title = "Volunteer with Us",
  body = "Your time and skills can create a lasting impact. Whether you're assisting with outreach, providing technical expertise, or supporting our programs, your contributions are invaluable to our mission.",
  ctaLabel = "Volunteer Now",
  ctaHref = "#volunteer",
  className,
}: VolunteerCTAProps) {
  return (
    <section className={className}>
      <div className="bg-primary text-white">
        <div className="ffc-container py-12 text-center">
          <h2 className="font-[var(--font-faustina)] text-[48px] leading-[60px]">{title}</h2>
          <p className="mt-4 font-[var(--font-lato)] text-[25px] leading-[30px] max-w-[1157px] mx-auto">
            {body}
          </p>
          <div className="mt-6">
            <a href={ctaHref} className="inline-flex items-center justify-center rounded-[27px] bg-white text-[#113563] px-8 py-4 text-[20px] font-[var(--font-lato)]">
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


