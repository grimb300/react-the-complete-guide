const BuggyComponent = (props) => {
  throw new Error("A buggy component has got to bug!");
  return <p>This is a buggy component!</p>;
};

export default BuggyComponent;
