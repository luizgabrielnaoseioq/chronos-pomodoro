import { CountDown } from '../../components/CountDown';
import { MainTemplate } from '../../templates/MainTemplate';
import { MainForm } from '../../components/MainForm';
import { Container } from '../../components/Container';
import type { TaskStateModel } from '../../models/TaskStateModel';

export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomeProps) {
  // Destructuring props to extract state and setState
  return (
    <MainTemplate>
      <Container>
        <CountDown{...props}/>
      </Container>
      
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );

}