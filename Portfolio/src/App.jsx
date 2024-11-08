import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

import Header from './components/header';
import footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <footer />
    </>
  );
}

export default App;