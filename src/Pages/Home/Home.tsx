
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../../Widgets/Layout/Layout';
import { List, Edit } from '../../Shared/ui';

const Home = () => { 
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<List />} />
        <Route path="task/:id" element={<Edit />} />
      </Route>
    </Routes>
  );
};

export default Home;