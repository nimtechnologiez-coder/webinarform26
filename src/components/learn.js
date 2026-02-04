 import "../Style/learn.css";

const data = [
  {
    title: "How Cyber Security Works in Real Companies",
    desc: "SOC, VAPT, Bug Bounty explained in simple terms."
  },
  {
    title: "Tools Professionals Use Daily",
    desc: "Kali Linux, Burp Suite, Wireshark live overview."
  },
  {
    title: "How Beginners Enter IT Without Coding Background",
    desc: "Clear path anyone can follow."
  },
  {
    title: "Live Security Testing Workflow Demo",
    desc: "See how testing is actually done."
  },
  {
    title: "2026 IT / Cyber Security Career Roadmap",
    desc: "What companies will hire for."
  },
  {
    title: "How Students Earn via Bug Bounty & Freelancing",
    desc: "Practical earning path."
  }
];

const LearnSection = () => {
  return (
    <section className="learn-section">
      <h2 className="learn-title">
        WHAT YOU’LL LEARN IN THIS SESSION
      </h2>

      <div className="learn-grid">
        {data.map((item, index) => (
          <div className="learn-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearnSection;