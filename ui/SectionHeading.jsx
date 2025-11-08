const SectionHeading = ({ subtitle, title, className }) => {
  return (
    <div className="text-center text-white space-y-3 mb-[50px]">
      <h3 className="text-secondary text-[14px]">{ subtitle }</h3>
      <h2 className={`text-5xl ${className}`}>{ title }</h2>
    </div>
  );
};

export default SectionHeading;