const Item = ({ className, children, ...params }) => {
  return (
    <button className={`menu__item ${className} `} {...params}>
      {children}
    </button>
  );
};

export default Item;
