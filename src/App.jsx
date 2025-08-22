import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Zeenia Naeem</h1>
          <p>Final Semester Computer Science Student at FCCU</p>
          <p>FullStack Developer</p>
        </div>
      </section>

      {/* Projects */}
      <section className="projects">
        <div className="container">
          <h2>My Projects</h2>
          <div className="card-grid">
            <div className="card">
              <img src="/foodpanda.jpg" alt="FoodPanda Ordering App" className="card-image" />
              <div className="card-content">
                <h3>FoodPanda Ordering App</h3>
                <p>
                  Built using Tkinter in Python with GUI for image input/output 
                  and object classification.
                </p>
              </div>
            </div>

            <div className="card">
              <img src="textile.png" alt="Textile Management System" className="card-image" />
              <div className="card-content">
                <h3>Textile Management System</h3>
                <p>
                  Developed in Python + MySQL to automate and streamline textile 
                  manufacturing processes.
                </p>
              </div>
            </div>

            <div className="card">
              <img src="dustbin.jpg" alt="Smart Motion-Detecting Dustbin" className="card-image" />
              <div className="card-content">
                <h3>Smart Motion-Detecting Dustbin</h3>
                <p>
                  Automated dustbin using Arduino, ultrasonic sensors, and servo 
                  motor. Focused on efficient sensor integration and responsiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="work">
        <div className="container">
          <h2>Work Experience</h2>
          <div className="card-grid">
            <div className="card">
              <img src="clicksotic.jpeg" alt="Clicksotic logo" className="card-image" />
              <div className="card-content">
                <h3>Back End Developer</h3>
                <p className="company"><strong>ClickSotic</strong> (2024-Present)</p>
                <p>
                  Designed and implemented backend systems for VR events, ensuring seamless 
                  functionality and collaboration across teams.
                </p>
              </div>
            </div>

            <div className="card">
              <img src="aitomation.jpg" alt="Aitomation logo" className="card-image" />
              <div className="card-content">
                <h3>Python Developer Intern</h3>
                <p className="company"><strong>Aitomation</strong> (Jan-Apr 2025)</p>
                <p>
                  Developed frontend and backend for an AI-powered plagiarism checker website 
                  using Django and React. Built an affiliate portal linked to the AI system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internships & Volunteer */}
      <section className="internships">
        <div className="container">
          <h2>Internships & Volunteer</h2>
          <div className="card-grid">
            <div className="card">
              <img src="netsol.png" alt="Netsol logo" className="card-image" />
              <div className="card-content">
                <h3>Intern</h3>
                <p className="company"><strong>NetSol Technologies</strong> (Aug – Sep 2025)</p>
                <p>Contributed to backend solutions, learned industry practices, and collaborated with development teams.</p>
              </div>
            </div>

            <div className="card">
              <img src="omnilife.png" alt="Omnilife logo" className="card-image" />
              <div className="card-content">
                <h3>Development Volunteer</h3>
                <p className="company"><strong>OmniLife VR FCCU Chapter</strong> (2022)</p>
                <p>Created VR filters and collaborated in a team to ensure smooth functionality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills">
        <div className="container">
          <h2>Technical Skills</h2>
          <div className="skills-content">
            <div className="skill-category">
              <h4>Languages:</h4>
              <p>Python, Visual Basic, MATLAB, RStudio, SQL/MySQL/PostGres SQL, C++</p>
            </div>
            <div className="skill-category">
              <h4>Tools:</h4>
              <p>Google Suite, Office 365</p>
            </div>
            <div className="skill-category">
              <h4>Core Skills:</h4>
              <p>Backend Development, Database Management, Statistical Analysis, Software Engineering</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="education">
        <div className="container">
          <h2>Education</h2>
          <div className="education-content">
            <div className="education-item">
              <h4>B.Sc. Computer Science</h4>
              <p className="institution">Forman Christian College</p>
              <p>Key Courses: Database Systems, Data Structures, Software Engineering, OOP, Python, SQA, C++, ML, AI</p>
            </div>
            <div className="education-item">
              <h4>A Levels – Computer Science</h4>
              <p className="institution">BeaconHouse Defence Campus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <strong>Email:</strong>
                <a href="mailto:zeenia.naeem@gmail.com">zeenia.naeem@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div>
                <strong>Phone:</strong>
                <span>+92 301 4586715</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💼</span>
              <div>
                <strong>LinkedIn:</strong>
                <a href="https://www.linkedin.com/in/zeenia-naeem-ba816025b/" target="_blank" rel="noreferrer">
                  linkedin.com/in/zeenia-naeem-ba816025b
                </a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">👩‍💻</span>
              <div>
                <strong>GitHub:</strong>
                <a href="https://github.com/zeenianaeem12" target="_blank" rel="noreferrer">
                  github.com/zeenianaeem12
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 Zeenia Naeem | Built with React + Vite</p>
        </div>
      </footer>
    </div>
  );
}

export default App;