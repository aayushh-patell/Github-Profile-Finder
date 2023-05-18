import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Search from "./Search";
import Profile from "./Profile";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Navigate to="/search"/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;