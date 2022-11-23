
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../../Widgets/Layout/Layout';
import { List, Detailed } from '../../Shared/ui';

const Home = () => { 
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<List />} />
        <Route path="task/:id" element={<Detailed />} />
      </Route>
    </Routes>
  );
};

export default Home;