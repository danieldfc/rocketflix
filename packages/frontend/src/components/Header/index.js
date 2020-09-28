import React from 'react';
import { MdSearch } from 'react-icons/md';

// import Navbar from '../NavBar';
import { useAuth } from '../../hooks/auth';

import { Container, Link } from './styles';

import Logo from '../../assets/img/logo-purple.svg';

const Header = () => {
  const { user, signOut } = useAuth();
  // const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  // const handleOpenNavbar = useCallback(() => {
  //   if (isOpenNavbar) {
  //     setIsOpenNavbar(false);
  //   } else {
  //     setIsOpenNavbar(true);
  //   }
  // }, [isOpenNavbar]);

  return (
    <>
      {/* {isOpenNavbar && <Navbar />} */}
      <Container>
        <header>
          <img src={Logo} alt="Rocketflix" />
          <nav>
            <Link to="/">HOME</Link>
            <Link to="/">COMUNIDADE</Link>
            <Link to="/">CONHEÇA</Link>
            {user ? (
              <Link to="/profile" onClick={signOut}>
                {user.name}
              </Link>
            ) : (
              <Link to="/signin">LOGIN</Link>
            )}

            <MdSearch
              size={20}
              color="#7159c1"
              // onClick={handleOpenNavbar}
            />
          </nav>
        </header>
      </Container>
    </>
  );
};

export default Header;
