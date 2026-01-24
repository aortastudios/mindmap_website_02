import React from "react";
interface ContainerProp {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProp) => {
  return <div className="max-w-310 px-5 lg:px-0 mx-auto">{children}</div>;
};

export default Container;
