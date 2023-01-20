import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PetStore from './Components/PetStore';

function App() {
    return (<Router>
        <Routes>
            <Route exact path="/" element={<PetStore />} />
        </Routes>
    </Router>
    );

}

export default App;
