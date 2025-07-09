import { TaskContext } from "../../contexts/TaskContext";
import styles from "./styles.module.css";

export function CountDown() {
  const taskContext = TaskContext.useTaskContext();
  console.log(taskContext);
  return <div className={styles.container}></div>;
}
