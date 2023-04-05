import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <nav
          style={{
            margin: '10px',
          }}
        >
          <NavLink style={{ margin: '0 10px 0 0' }} to="/">
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
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
