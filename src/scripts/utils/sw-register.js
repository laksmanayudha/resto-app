import * as WorkboxWindow from 'workbox-window';

const serviceWorkerRegister = async (serviceWorkerPath) => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in this browser');
    return;
  }

  const wb = new WorkboxWindow.Workbox(serviceWorkerPath);
  try {
    await wb.register();
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default serviceWorkerRegister;
