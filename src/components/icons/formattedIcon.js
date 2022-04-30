import React from 'react';
import PropTypes from 'prop-types';
import {
  IconCodepen,
  IconExternal,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconTwitter,

} from '@components/icons';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'Codepen':
      return <IconCodepen />;
    

    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;

    case 'Twitter':
      return <IconTwitter />;

    default:
      return <IconExternal />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
