import { ACTION_ALERT_USER } from './alertUser';


export default function() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(ACTION_ALERT_USER);
    }, 3000);
  };
}