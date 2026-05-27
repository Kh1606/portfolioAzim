import { ProjectDetail } from '~/components/project-detail';
import { getProject } from '~/data/projects';
import { baseMeta } from '~/utils/meta';

const project = getProject('noticehub');

export const meta = () => {
  return baseMeta({ title: project.title, description: project.blurb, prefix: 'Projects' });
};

export const NoticeHub = () => <ProjectDetail project={project} />;
