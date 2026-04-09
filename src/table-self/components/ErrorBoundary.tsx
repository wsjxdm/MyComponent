import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import styles from './table.module.css';

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
        <div className={styles.tableBody}>
          <div className={styles.errorState}>
            Something went wrong in the table body.
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
