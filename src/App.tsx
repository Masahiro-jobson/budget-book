import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AppLayout from './components/Layout/AppLayout';
import NoMatch from './components/NoMatch';
import Report from './components/Report';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />}/>
          <Route path='/report' element={<Report />}/>
          <Route path='*' element={<NoMatch />}/>
        </Route>
      </Routes>

    </Router>
  );
}

export default App;
