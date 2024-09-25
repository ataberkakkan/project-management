import { Project } from "@/state/api";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="rounded border p-4 shadow">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>Start Date: {project.startDate}</p>
      <p>End Date: {project.endDate}</p>
    </div>
  );
};
export default ProjectCard;
