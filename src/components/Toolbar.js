const Toolbar = ({ user }) => {
  return (
    <div className="flex">
      <span className="mr-2">UserName:</span>
      <h1>{user.name}</h1>
    </div>
  );
};

export default Toolbar;
