import { Route, Routes } from "react-router-dom";
import Linkp from './Linkp';
import Home from './Home';
import Post from './Post';
import AboutUs from './AboutUs';

function AppRoutes() {
  return (
    <div>
      <Linkp />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
