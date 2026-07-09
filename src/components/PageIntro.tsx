interface PageIntroProps {
  eyebrow: string;
  title: string;
  copy: string;
  align?: 'left' | 'center';
}

export function PageIntro({ eyebrow, title, copy, align = 'left' }: PageIntroProps) {
  return (
    <section className={`page-intro page-intro-${align} reveal`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </section>
  );
}