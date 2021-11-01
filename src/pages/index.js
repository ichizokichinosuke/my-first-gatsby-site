import * as React from "react";
import { Link } from "gatsby";


const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/about">About</Link>
      <p>I am making this by following Gatsby Tutorial.</p>
    </main>
  );
}

export default IndexPage;