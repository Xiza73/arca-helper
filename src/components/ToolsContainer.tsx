import { Title } from "./Title";

type IProps = {
  children: React.ReactNode;
  title: string;
};

export const ToolsContainer = ({ children, title }: IProps) => {
  return (
    <>
      <Title title={title} />
      <div
        className="d-flex justify-content-around align-items-center flex-wrap mb-5"
        style={{ gap: "60px" }}
      >
        {children}
      </div>
    </>
  );
};
