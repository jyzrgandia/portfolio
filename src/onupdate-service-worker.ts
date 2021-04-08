import { message } from 'antd';

export const updateServiceWorker = async () => {
  try {
    const serviceWorker = await navigator.serviceWorker.getRegistration();

    if (serviceWorker?.waiting) {
      serviceWorker.waiting.postMessage({ type: 'SKIP_WAITING' });

      serviceWorker.waiting.addEventListener('statechange', (e: any) => {
        if (e.target.state === 'activated') {
          console.log(e);
          window.location.reload();
        }
      });
    }
  } catch (error) {
    message.success("Somethine wen't wrong with the service worker");
  }
};
