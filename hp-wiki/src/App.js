import './App.css';
import CharList from "./CharList"
import Profile from "./Profile"
import Search from './Search';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Search />} />
          <Route path="/CharList" element={<CharList />} />
          <Route path={"/Profile"} element={<Profile />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
