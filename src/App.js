import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import MainPage from './MainPage';
import OtherPage from './OtherPage';

function App() {
    return (<Router>
        <Routes>
            <Route exact path="/" element={<MainPage />} />
             <Route exact path="/login" element={<OtherPage/>}/>
        {/* <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
        <Route path="*" element={<NotFound/>}/> */} 
        </Routes>
    </Router>
    );

}

export default App;
