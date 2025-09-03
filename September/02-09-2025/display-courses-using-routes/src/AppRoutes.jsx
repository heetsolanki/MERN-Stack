import { Route, Routes } from "react-router-dom";
import Linkp from './Linkp';
import Home from './Home';
import Courses from './Courses';
import AboutUs from './AboutUs';

function AppRoutes() {
  return (
    <div>
      <Linkp />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
