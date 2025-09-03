import { Route, Routes } from "react-router-dom";
import Linkp from "./Linkp";
import Home from "./Home";
import Student from "./Student";
import About from "./About";

const Route1 = () => {
    return (
        <div>
            <Linkp />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/student/:firstName" element={<Student />} />
            </Routes>
        </div>
    )
}

export default Route1;