import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Domains from './pages/Domains';
import Layout from './layout/Layout';
import Hosting from './pages/Hosting';
import Wordpress from './pages/Wordpress';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/domains" element={<Domains />} />
                    <Route path="/hosting" element={<Hosting />} />
                    <Route path="/wordpress" element={<Wordpress />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
