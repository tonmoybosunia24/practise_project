const SectionHeading = ({ subtitle, title }) => {
  return (
    <div className="text-center space-y-3">
      <h3 className="text-secondary">{ subtitle }</h3>
      <h2 className="text-5xl text-white">{ title }</h2>
    </div>
  );
};

export default SectionHeading;