type GetStartedProps = {
  title?: string;
  leftLabel?: string;
  rightLabel?: string;
  leftHref?: string;
  rightHref?: string;
  className?: string;
};

export default function GetStarted({
  title = "Ready To Get Started Now?",
  leftLabel = "501 (c)3 Charities Click Here To Get Started!",
  rightLabel = "Pre-501 (c)3 Charities Click Here To Get Started!",
  leftHref = "#",
  rightHref = "#",
  className,
}: GetStartedProps) {
  return (
    <section className={className}>
      <div className="ffc-container">
        <h2 className="font-[var(--font-lato)] text-[36px] leading-[43px] text-center text-black">
          {title}
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <a
            href={leftHref}
            className="block text-center border-[5px] border-primary rounded-[20px] px-6 py-7 font-[var(--font-lato)] text-[25px] leading-[30px] text-black hover:bg-primary/5"
          >
            {leftLabel}
          </a>
          <a
            href={rightHref}
            className="block text-center border-[5px] border-primary rounded-[20px] px-6 py-7 font-[var(--font-lato)] text-[25px] leading-[30px] text-black hover:bg-primary/5"
          >
            {rightLabel}
          </a>
        </div>
      </div>
    </section>
  );
}


