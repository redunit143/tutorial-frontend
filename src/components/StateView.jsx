
import { useSelector } from 'react-redux';

const StateView = () => {
  const stateToShow = useSelector((s) => { return s.todoReducer; });

  return <div><h2>State View</h2><p> State is: {stateToShow}</p></div>;
};

export default StateView;