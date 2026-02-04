import "../Style/diffsec.css";

const items = [
  { num: "01", title: "Direction" },
  { num: "02", title: "Industry Tools" },
  { num: "03", title: "Roadmap" },
  { num: "04", title: "Resources to start immediately" }
];

const DifferenceSection = () => {
  return (
    <section className="difference-section">
      <h2 className="difference-title">WHY THIS SESSION IS DIFFERENT</h2>

      <p className="difference-sub">
        Most webinars give information.
      </p>
      <p className="difference-sub bold">
        This webinar gives:
      </p>

      <div className="difference-grid">
        {items.map((item, index) => (
          <div className="difference-card" key={index}>
            <span className="diff-num">{item.num}</span>
            <span className="diff-text">{item.title}</span>
          </div>
        ))}
      </div>
      <div className="ribbonss-wrapper">
        <div className="ribbonss">
          <p>Everyone is welcome. Seats limited to 300 only.</p>
        </div>
        <div className="ribbonss-shadow"></div>
      </div>
    </section>
    
  );
};

export default DifferenceSection;





