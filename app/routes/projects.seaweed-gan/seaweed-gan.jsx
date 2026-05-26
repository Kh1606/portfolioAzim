import { ProjectDetail } from '~/components/project-detail';
import { getProject } from '~/data/projects';
import { baseMeta } from '~/utils/meta';

const project = getProject('seaweed-gan');

export const meta = () => {
  return baseMeta({ title: project.title, description: project.blurb, prefix: 'Projects' });
};

// Export name kept as `SmartSparrow` to match the existing route.js re-export.
export const SmartSparrow = () => <ProjectDetail project={project} />;
