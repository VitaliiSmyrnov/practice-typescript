import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { BiSolidCameraMovie } from "react-icons/bi";

import { Header, Link, Logo } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Logo>
          <BiSolidCameraMovie />
          Go Watch Movies
        </Logo>

        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
