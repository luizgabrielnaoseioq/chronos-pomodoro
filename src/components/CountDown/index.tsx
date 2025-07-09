import { useTaskContext } from '../../contexts/TaskContext';
import styles from './styles.module.css';

export function CountDown() {
  const taskContext = useTaskContext();
  console.log(taskContext);
  const { state } = useTaskContext();

  return <div className={styles.container}>00:00</div>;
  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}