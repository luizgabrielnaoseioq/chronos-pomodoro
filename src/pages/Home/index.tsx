import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../templates/MainTemplate';

export function Home() {
  // Destructuring props to extract state and setState
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>
      
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );

}