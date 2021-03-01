export const SectionTitle: React.FC = ({ children, ...rest }) => {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-theme-heading" {...rest}>
      {children}
    </h2>
  );
};
