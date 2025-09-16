import { Routes, Route } from 'react-router-dom';
import MainLink from './MainLink';
import Home from './Home';
import Movies from './Movies';
import AboutUs from './AboutUs';
import IronMan3 from './IronMan3';
import InfinityWar from './InfinityWar';
import Endgame from './Endgame';

function AppRoutes() {
    return (
        <div>
            <MainLink />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movies' element={<Movies />}>
                    <Route path='ironman3' element={<IronMan3 />} />
                    <Route path='infinitywar' element={<InfinityWar />} />
                    <Route path='endgame' element={<Endgame />} />
                </Route>
                <Route path='/about' element={<AboutUs />} />
            </Routes>
        </div>
    )
}

export default AppRoutes;