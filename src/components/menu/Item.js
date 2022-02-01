const Item = ({ className, children, ref, ...params }) => {
  return (
    <button ref={ref} className={`menu__item ${className} `} {...params}>
      {children}
    </button>
  );
};

export default Item;
