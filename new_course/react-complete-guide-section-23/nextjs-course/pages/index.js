import Link from "next/link";
import { Fragment } from "react";

// ourdomain.com/

function HomePage() {
  return (
    <Fragment>
      <h1>The Home Page</h1>;
      <ul>
        <li>
          <Link href="news/news-item-1">News Item 1</Link>
        </li>
        <li>
          <Link href="news/news-item-2">News Item 2</Link>
        </li>
        <li>
          <Link href="news/news-item-3">News Item 3</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default HomePage;
