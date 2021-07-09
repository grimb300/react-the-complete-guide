import { Fragment } from "react";

import BuggyComponent from "./BuggyComponent";
import ErrorBoundary from "./ErrorBoundary";

import "./App.css";

function App() {
  return (
    <Fragment>
      <h1>This is my error boundary test!</h1>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </Fragment>
  );
}

export default App;
