import "./index.scss";

const Container = ({ children, className, ...params }) => {
  return (
    <menu className={`navimation-menu ${className}`} {...params}>
      {children}
    </menu>
  );
};

export default Container;
