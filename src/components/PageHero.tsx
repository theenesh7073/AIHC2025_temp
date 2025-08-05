interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
}

const PageHero = ({ title, subtitle, description, children }: PageHeroProps) => {
  return (
    <section className="bg-primary text-white py-16 md:py-20 lg:py-24 relative min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex items-center">
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 text-gray-100">{subtitle}</p>
        )}
        {description && (
          <p className="text-base md:text-lg mb-6 md:mb-8 max-w-3xl mx-auto text-gray-200">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
};

export default PageHero; 