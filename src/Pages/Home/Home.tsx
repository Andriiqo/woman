
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../../Widgets/Layout/Layout';
import { Task, Tasks } from '../../Shared/ui';

const Home = () => { 
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Tasks />} />
        <Route path="task/:id" element={<Task />} />
      </Route>
    </Routes>
  );
};

export default Home;