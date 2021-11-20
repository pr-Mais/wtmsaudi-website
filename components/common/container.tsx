import cn from "classnames";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const Container = ({ className, ...props }: ContainerProps) => {
  return (
    <div className={cn("container mx-auto px-2", className)} {...props}></div>
  );
};
