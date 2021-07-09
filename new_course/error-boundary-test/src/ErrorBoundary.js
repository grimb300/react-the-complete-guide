import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error) {
    console.log("Saw the error:");
    // console.log(error);
  }
  render() {
    if (this.state.hasError) {
      return <p>I saw an error!!!!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
