import Header from '../components/Header';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import SkillCategory from '../components/SkillCategory';

const Index = () => {
  const projects = [
    {
      title: "House Price Prediction",
      description: "Built a Linear Regression model to predict housing prices using Bengaluru housing dataset.",
      technologies: ["Python", "Linear Regression", "Pandas", "NumPy"],
      details: [
        "Performed comprehensive data cleaning and preprocessing on real estate dataset",
        "Implemented feature engineering including BHK extraction and sqft normalization",
        "Applied outlier removal techniques to improve model accuracy",
        "Conducted thorough exploratory data analysis (EDA) to identify key price factors"
      ]
    },
    {
      title: "SMS Spam Detection",
      description: "Developed a text classification model using Naive Bayes to identify spam messages.",
      technologies: ["Python", "Naive Bayes", "NLP", "Scikit-learn"],
      details: [
        "Implemented text preprocessing techniques including tokenization and stop word removal",
        "Performed exploratory data analysis on text data patterns",
        "Achieved high accuracy in spam classification using Naive Bayes algorithm",
        "Optimized model performance through feature selection and hyperparameter tuning"
      ]
    },
    {
      title: "Employee Salaries Analysis",
      description: "Conducted comprehensive EDA and applied multiple machine learning techniques to analyze salary patterns.",
      technologies: ["Python", "Machine Learning", "Clustering", "Data Visualization"],
      details: [
        "Applied various classification and regression algorithms for salary prediction",
        "Implemented clustering techniques to identify salary groups and patterns",
        "Created comprehensive visualizations to communicate insights effectively",
        "Performed statistical analysis to identify key factors affecting compensation"
      ]
    }
  ];

  const skillCategories = [
    {
      title: "Programming & Analytics",
      skills: ["Python", "SQL", "Machine Learning"]
    },
    {
      title: "Data Analysis Libraries",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"]
    },
    {
      title: "Data Visualization Tools",
      skills: ["Tableau", "Power BI"]
    },
    {
      title: "Data Science Techniques",
      skills: ["Exploratory Data Analysis (EDA)", "Feature Engineering", "Model Optimization", "Statistical Analysis"]
    }
  ];

  const certifications = [
    "Introduction to Programming using Python - Microsoft",
    "Python for Data Science - NPTEL",
    "AI: Transformation Learning with TechSaksham - Edunet Foundation (AICTE)"
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Header />
        
        <Section title="Career Objective">
          <p className="text-gray-700 leading-relaxed">
            Aspiring Data Science professional passionate about solving real-world problems using data-driven solutions. 
            Skilled in transforming raw data into actionable insights through Python, Machine Learning, and Data Visualization. 
            Seeking opportunities to apply analytical skills and contribute to data-driven decision making in a dynamic organization.
          </p>
        </Section>

        <Section title="Technical Skills">
          <div className="grid md:grid-cols-2 gap-4">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={index}
                title={category.title}
                skills={category.skills}
              />
            ))}
          </div>
        </Section>

        <Section title="Projects">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              details={project.details}
            />
          ))}
        </Section>

        <Section title="Education">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Bachelor of Technology (B.Tech) - Electronics and Communication Engineering
            </h3>
            <p className="text-gray-700 mb-1">
              G. Pulla Reddy Engineering College (Autonomous), Kurnool
            </p>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>2021 - 2025</span>
              <span className="font-medium">CGPA: 7.60</span>
            </div>
          </div>
        </Section>

        <Section title="Certifications">
          <div className="space-y-2">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm leading-relaxed">{cert}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Index;
