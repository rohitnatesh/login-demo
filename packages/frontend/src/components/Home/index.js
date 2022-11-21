// Libraries.

import { useSelector } from 'react-redux';

// Dependencies.

import LogoutButton from '../LogoutButton';

// Public.

const Home = () => {
  const name = useSelector((state) => state.auth.name);

  return (
    <section>
      <nav>
        <LogoutButton />
      </nav>
      <main style={{ marginTop: '20px' }}>
        <h1>Home</h1>
        <p>Welcome home, {name}!</p>
      </main>
    </section>
  );
};

export default Home;
