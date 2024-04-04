import {useLingui} from 'react-exo/i18n';
import {useParams} from 'react-exo/router';
import {useTasks} from 'tasks/hooks/useTasks';
import {TasksList} from 'tasks/components/TasksList';
import {TasksInput} from 'tasks/components/TasksInput';
import {Page} from 'core/components/Page';

export default function ScreenTaskDetails() {
  const {id} = useParams<{id: string}>();
  const tasks = useTasks(id);
  useLingui();
  return (
    <Page title={id}>
      <TasksList {...tasks} />
      <TasksInput onSubmit={tasks.addActive}/>
    </Page>
  );
}
