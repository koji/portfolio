// eslint-disable-next-line @typescript-eslint/quotes
require('bootstrap/dist/js/bootstrap');
// eslint-disable-next-line @typescript-eslint/quotes
// require('bootstrap/dist/css/bootstrap.css');
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
import "./src/styles/global.css";
// for react-bootstrap
import "./node_modules/bootstrap/dist/css/bootstrap.css";
export const onServiceWorkerUpdateReady = () => {
  window.location.reload(true);
};
