import "./ParallaxSection.css"; // Ensure this CSS file contains your new styles
import { FaPeopleGroup } from "react-icons/fa6";

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
            <div className="stat">
              <FaPeopleGroup
                alt="Employees Icon"
                className="stat-icon"
              ></FaPeopleGroup>
              <p className="stat-number">65,000+</p>
              <p className="stat-title">EMPLOYEES</p>
            </div>
            <div className="stat">
              <FaPeopleGroup
                alt="Employees Icon"
                className="stat-icon"
              ></FaPeopleGroup>
              <p className="stat-number">65,000+</p>
              <p className="stat-title">EMPLOYEES</p>
            </div>
            <div className="stat">
              <FaPeopleGroup
                alt="Employees Icon"
                className="stat-icon"
              ></FaPeopleGroup>
              <p className="stat-number">65,000+</p>
              <p className="stat-title">EMPLOYEES</p>
            </div>
            <div className="stat">
              <FaPeopleGroup
                alt="Employees Icon"
                className="stat-icon"
              ></FaPeopleGroup>
              <p className="stat-number">65,000+</p>
              <p className="stat-title">EMPLOYEES</p>
            </div>
            <div className="stat">
              <FaPeopleGroup
                alt="Employees Icon"
                className="stat-icon"
              ></FaPeopleGroup>
              <p className="stat-number">65,000+</p>
              <p className="stat-title">EMPLOYEES</p>
            </div>
            <div className="stat">
              <FaPeopleGroup
                alt="Employees Icon"
                className="stat-icon"
              ></FaPeopleGroup>
              <p className="stat-number">65,000+</p>
              <p className="stat-title">EMPLOYEES</p>
            </div>
            <div className="stat">
              <FaPeopleGroup
                alt="Employees Icon"
                className="stat-icon"
              ></FaPeopleGroup>
              <p className="stat-number">65,000+</p>
              <p className="stat-title">EMPLOYEES</p>
            </div>
            <div className="stat">
              <FaPeopleGroup
                alt="Employees Icon"
                className="stat-icon"
              ></FaPeopleGroup>
              <p className="stat-number">65,000+</p>
              <p className="stat-title">EMPLOYEES</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParallaxSection;
