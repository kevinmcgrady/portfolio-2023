import cn from 'classnames';

import styles from './Container.module.scss';

type ContainerProps = {
  isNarrow?: boolean;
  children: JSX.Element[];
};

export const Container: React.FC<ContainerProps> = ({
  children,
  isNarrow = false,
}) => {
  return (
    <div
      className={cn(styles.container, isNarrow && styles.isNarrow)}
      role='main'
    >
      {children}
    </div>
  );
};
