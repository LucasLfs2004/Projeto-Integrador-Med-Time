import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './routes';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Content/>
      </BrowserRouter>
    </div>
  );
}

export default App;
