
interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[];
  details: string[];
}

const ProjectCard = ({ title, description, technologies, details }: ProjectCardProps) => {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 mb-3">{description}</p>
      {technologies && (
        <div className="mb-3">
          <span className="text-sm font-medium text-gray-600">Technologies: </span>
          <span className="text-sm text-gray-600">{technologies.join(', ')}</span>
        </div>
      )}
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {details.map((detail, index) => (
          <li key={index} className="text-sm leading-relaxed">{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
