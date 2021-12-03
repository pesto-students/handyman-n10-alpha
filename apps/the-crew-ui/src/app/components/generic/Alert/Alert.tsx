import { Alert } from '@material-ui/lab';

export interface AlertSummary {
  severity: number;
  message: string;
}

export default function AlertComponent(summary: AlertSummary) {
  switch (summary.severity) {
    case 1:
      return (
        <Alert variant="filled" severity="success">
          {summary.message}
        </Alert>
      );
    case 2:
      return (
        <Alert variant="filled" severity="error">
          {summary.message}
        </Alert>
      );
    case 3:
      return (
        <Alert variant="filled" severity="warning">
          {summary.message}
        </Alert>
      );
    default:
      return (
        <Alert variant="filled" severity="info">
          {summary.message}
        </Alert>
      );
      break;
  }
}
