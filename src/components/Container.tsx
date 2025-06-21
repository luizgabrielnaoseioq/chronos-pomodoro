import styles from "./Container.model.css";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
