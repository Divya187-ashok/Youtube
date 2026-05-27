import logo from './logo.svg';
import Head from './components/header';
import MainContent from './components/mainContent';
import './App.css';
import store from './components/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Body from './Body';
import WatchPage from './components/WatchPage';


const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children: [
    {
    path:"/",
    element:<MainContent/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    }
  ]
}]);
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Head/>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
