import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  // static getDerivedStateFromError(error) {
  //   return { hasError: true };
  // }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    error.preventDefault();
    console.log("Saw an error!!!!");
    // console.log(error);
    // console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
