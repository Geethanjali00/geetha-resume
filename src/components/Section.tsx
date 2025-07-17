
interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 border-b border-blue-200 pb-2 mb-4 uppercase tracking-wide">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
