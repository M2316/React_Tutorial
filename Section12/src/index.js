import ReactDOM from 'react-dom/client';

import './index.css';
import { DummyContextProvider } from './store/dummy-context';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DummyContextProvider>
        <App />
    </DummyContextProvider>
);
