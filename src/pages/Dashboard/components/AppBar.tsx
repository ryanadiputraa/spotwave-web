import { useContext } from 'react';
import Cookies from 'universal-cookie';
import { Link, useNavigate } from 'react-router-dom';

import { AppContext } from '../../../context';

export const AppBar = () => {
  const { main } = useContext(AppContext);
  const navigate = useNavigate();
  const profileImage = main.user?.images.length ? main.user.images[0].url : '';
  const displayName = main.user?.display_name ?? '';

  const logout = () => {
    const cookies = new Cookies(null, { path: '/' });
    cookies.remove('auth');
    navigate('/');
  };

  return (
    <header className="flex items-center justify-between py-2 px-[2%] sm:px-6">
      <Link className="flex items-center justify-center gap-2" to={'/'}>
        <img className="w-10" src="/logo.svg" alt="spotwave-logo" />
        <h1 className="font-bold">Spotwave</h1>
      </Link>
      <div className="flex items-center justify-center gap-2">
        <img className="w-10 rounded-full" src={profileImage} alt="spotwave-logo" />
        <div className="hidden sm:flex flex-col items-start justify-center">
          <span className="font-bold">{displayName}</span>
          <span className="font-light text-sm italic underline cursor-pointer" onClick={logout}>
            logout
          </span>
        </div>
      </div>
    </header>
  );
};
