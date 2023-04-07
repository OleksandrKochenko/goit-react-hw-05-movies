import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: #212121;
  &.active {
    color: orangered;
  }
`;

const Layout = () => {
  return (
    <>
      <header>
        <nav
          style={{
            margin: '10px',
          }}
        >
          <StyledLink style={{ margin: '0 10px 0 0' }} to="/">
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

// import { NavLink, Outlet } from 'react-router-dom';
// import { fetchPhotos } from 'services/api';

// const Layout = () => {
//   const params = {
//     // query: 'avatar',
//     // include_adult: true,
//     // language: 'en-US',
//   };
//   const url = 'trending/movie/day';

//   const fetch = async () => {
//     const responce = await fetchPhotos(url, params);
//     console.log(responce);
//   };

//   return (
//     <>
//       <header>
//         <nav>
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="/dogs">Collection</NavLink>
//         </nav>
//       </header>
//       <main>
//         <Outlet />
//         <button type="button" onClick={fetch}>
//           Click
//         </button>
//       </main>
//       <footer>Footer</footer>
//     </>
//   );
// };

// export default Layout;
