import AddEmployee from './components/AddEmployee';
import './App.css';
import ListEmployee from './components/ListEmployee';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path='/' element={<ListEmployee />} />
          <Route path='/addEmployee' element={<AddEmployee />} />
          <Route path='/editEmployee/:id' element={<AddEmployee />} />
          <Route path='deleteEmployee/:id' element={<AddEmployee />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
