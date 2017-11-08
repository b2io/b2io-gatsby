import React from 'react';
import md from '../util/md';

class ServicesSection extends React.Component {
  render() {
    return md`
      # react-markings

      Normal paragraph.

      ${<p>Interpolated paragraph.</p>}
    `;
  }
}

export default ServicesSection;
