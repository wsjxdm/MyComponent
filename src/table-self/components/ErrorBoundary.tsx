import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <tbody>
          <tr>
            <td colSpan={100} style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
              Something went wrong in the table body.
            </td>
          </tr>
        </tbody>
      );
    }

    return this.props.children;
  }
}
