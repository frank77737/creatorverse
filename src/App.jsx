import { useRoutes } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import DeleteCreator from './pages/DeleteCreator'; // Import DeleteCreator

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <ShowCreators /> },
    { path: "/creator/:id", element: <ViewCreator /> },
    { path: "/edit/:id", element: <EditCreator /> },
    { path: "/delete/:id", element: <DeleteCreator /> }, // New route for deleting
    { path: "/new", element: <AddCreator /> },
  ]);

  return (
    <div>
      {routes}
    </div>
  );
};

export default App;
