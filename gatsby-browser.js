require('bootstrap/dist/js/bootstrap')
require('bootstrap/dist/css/bootstrap.css')
export const onServiceWorkerUpdateReady = () => {
  window.location.reload(true)
}