
interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="mb-4">
      <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed">{skills.join(', ')}</p>
    </div>
  );
};

export default SkillCategory;
