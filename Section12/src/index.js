import ReactDOM from 'react-dom/client';

import './index.css';
import { DummyContextProvider } from './store/dummy-context';
import App from './App';
import { CartContextProvider } from './store/cart-context';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <DummyContextProvider>
        <CartContextProvider>
            <App />
        </CartContextProvider>
    </DummyContextProvider>
);
