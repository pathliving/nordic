import { Component, ReactNode } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  error?: {
    name: string;
    stack: string;
  };
  hasError?: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  //   state = { error: null };

  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // return { error: error };
    // Update state so the next render will show the fallback UI.
    // console.log({ error });
    return { hasError: true, error };
  }

  componentDidCatch(error: any, info: any) {
    // console.log({ error, info });
    return { error, info };
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App

    // logComponentStackToMyService(info.componentStack);
  }

  render() {
    // const err = this.state.error;
    // const err = this.state.hasError;

    /* if (err) {
      const mailTo = 'dev@example.com';
      const header = 'Bug Found';
      const message = `
      There was a bug found of type: "${err.name}".
      The message was: "${err.message}".
      The stack trace is:
      """
      ${err.stack}
      """
      `.trim();
      const encodedMsg = encodeURIComponent(message);
      const encodedHeader = encodeURIComponent(header);
      const href = `mailto:${mailTo}&subject=${encodedHeader}&body=${encodedMsg}`;
      return (
        <div>
          <h1>{err.name}</h1>
          <pre>
            <code>{err.message}</code>
          </pre>
          <a href={href}>Email us to report the bug</a>
          <br />
          <br />
          <details>
            <summary>Error stack</summary>
            <pre>
              <code>{err.stack}</code>
            </pre>
          </details>
        </div>
      );
    } */
    return this.props.children;
  }
}

export default ErrorBoundary;
