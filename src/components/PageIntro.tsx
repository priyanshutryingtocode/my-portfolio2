interface PageIntroProps {
  eyebrow: string;
  title: string;
  copy: string;
  align?: 'left' | 'center';
}

export function PageIntro({ eyebrow, title, copy, align = 'left' }: PageIntroProps) {
  return (
    <section className={`page-intro page-intro-${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{copy}</p>
    </section>
  );
}
