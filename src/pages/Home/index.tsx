import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { BASE_API_URL, getAccessTokens } from '../../utils';

const Home = () => {
  const navigate = useNavigate();
  const tokens = getAccessTokens();

  const onLogin = () => {
    if (tokens?.accessToken.length) {
      navigate('/dashboard');
      return;
    }
    window.location.href = `${BASE_API_URL}/oauth/login`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-accent">
      <header className="flex items-center justify-between py-2 px-[2%] sm:px-6">
        <Link to={'/'} className="flex items-center justify-center gap-2">
          <img className="w-10" src="/logo.svg" alt="spotwave-logo" />
          <h1 className="font-bold">Spotwave</h1>
        </Link>
        <Button variant="primary" classNames="btn btn-primary" onClick={onLogin}>
          {tokens?.accessToken?.length ? 'Dashboard' : 'Login'}
        </Button>
      </header>
      <main className="px-[2%] py-2 min-h-[87vh] flex flex-col justify-center">
        <section id="main" className="flex justify-center items-center flex-col">
          <h1 className="font-bold text-3xl sm:text-6xl sm:w-[60%] text-center">
            Download your Spotify playlist in just a few clicks!
          </h1>
          <p className="mt-4 text-center">
            Log into your Spotify account, and choose songs in your playlist to download.
          </p>
          <Button variant="primary" classNames="px-8 py-3 mt-8" onClick={onLogin}>
            Download Now!
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
