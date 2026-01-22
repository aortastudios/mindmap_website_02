import React from "react";
interface ContainerProp {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProp) => {
  return <div className="max-w-310 px-5 xl:px-10 mx-auto">{children}</div>;
};

export default Container;
