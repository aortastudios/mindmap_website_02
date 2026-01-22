interface ButtonProp {
  title: string;
  className: string;
}

const FeatureButton = ({ title, className }: ButtonProp) => {
  return <button className={className}>{title}</button>;
};

export default FeatureButton;
