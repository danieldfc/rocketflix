import React from 'react';
import { MdSearch } from 'react-icons/md';

// import Navbar from '../NavBar';
import { useAuth } from '../../hooks/auth';

import { Container, Link } from './styles';

import Logo from '../../assets/img/logo-purple.svg';
import colors from '../../styles/colors';

export default function Header() {
  const { signOut } = useAuth();
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
            <Link to="/home">HOME</Link>
            <Link to="/">COMUNIDADE</Link>
            <Link to="/">CONHEÇA</Link>

            <Link to="/signout" onClick={signOut}>
              LOGOUT
            </Link>

            <MdSearch
              size={20}
              color={colors.rocketseat}
              // onClick={handleOpenNavbar}
            />
          </nav>
        </header>
      </Container>
    </>
  );
}
