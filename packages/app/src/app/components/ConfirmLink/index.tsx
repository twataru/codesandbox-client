import * as React from 'react';
import { Link } from 'react-router-dom';

export type Props = {
  enabled: boolean;
  message: string;
  to: string;
};

export default class ConfirmLink extends React.PureComponent<Props> {
  confirm = e => {
    const { enabled, message } = this.props;

    if (enabled) {
      const yes = confirm(message); // eslint-disable-line no-alert

      if (!yes) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  };

  render() {
    const { enabled, message, ...props } = this.props;
    return <Link onClick={this.confirm} {...props} />;
  }
}