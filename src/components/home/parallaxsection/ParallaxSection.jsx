import { FaPeopleGroup } from "react-icons/fa6";
import "./ParallaxSection.css";

const stats = [
  {
    icon: <FaPeopleGroup alt="Employees Icon" className="stat-icon" />,
    number: "65,000+",
    title: "EMPLOYEES",
  },
  {
    icon: <FaPeopleGroup alt="Employees Icon" className="stat-icon" />,
    number: "65,000+",
    title: "EMPLOYEES",
  },
  {
    icon: <FaPeopleGroup alt="Employees Icon" className="stat-icon" />,
    number: "65,000+",
    title: "EMPLOYEES",
  },
  {
    icon: <FaPeopleGroup alt="Employees Icon" className="stat-icon" />,
    number: "65,000+",
    title: "EMPLOYEES",
  },
  {
    icon: <FaPeopleGroup alt="Employees Icon" className="stat-icon" />,
    number: "65,000+",
    title: "EMPLOYEES",
  },
  {
    icon: <FaPeopleGroup alt="Employees Icon" className="stat-icon" />,
    number: "65,000+",
    title: "EMPLOYEES",
  },
  {
    icon: <FaPeopleGroup alt="Employees Icon" className="stat-icon" />,
    number: "65,000+",
    title: "EMPLOYEES",
  },
  {
    icon: <FaPeopleGroup alt="Employees Icon" className="stat-icon" />,
    number: "65,000+",
    title: "EMPLOYEES",
  },
  {
    icon: <FaPeopleGroup alt="Employees Icon" className="stat-icon" />,
    number: "65,000+",
    title: "EMPLOYEES",
  },
  {
    icon: <FaPeopleGroup alt="Employees Icon" className="stat-icon" />,
    number: "65,000+",
    title: "EMPLOYEES",
  },
];

const ParallaxSection = () => {
  return (
    <div>
      <section className="background_contentone">
        <div className="parallax-content">
          <div>
            <h1>About The Holding</h1>
            <p>
              Power International Holding (PIH) is a diversified business
              conglomerate, grouped into 5 main sectors: General Contracting,
              Industries & Services, Agriculture & Food Industries, Real Estate
              and Lifestyle (Hospitality, Entertainment & Catering).
            </p>
            <button>LEARN MORE</button>
          </div>

          <div className="stats-header">
            <h1>By The Numbers</h1>
          </div>
          <div className="stats-content">
            {stats.map((stat, index) => (
              <div key={index} className="stat">
                {stat.icon}
                <p className="stat-number">{stat.number}</p>
                <p className="stat-title">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParallaxSection;
