import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { updateServiceWorker } from './onupdate-service-worker';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './styles/app.less';
import './styles/main.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

const { confirm } = Modal;

function showUpdateConfirm() {
  confirm({
    title: 'System update is available!',
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: 'Click confirm to update system cache',
    okText: 'Confirm!',
    cancelButtonProps: { style: { display: 'none' } },
    onOk: async () => {
      await updateServiceWorker();
    },
  });
}

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register({
  onSuccess: () => console.log('Success'),
  onUpdate: () => showUpdateConfirm(),
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
