type IProps = {
  title: string;
};

export const Title = ({ title }: IProps) => {
  return <h3 className="text-center mb-3 bg-secondary rounded">{title}</h3>;
};
