import PropTypes from 'prop-types';
import React from 'react';

import style from '../styles/social';

const Social = props => {
  const { links } = props;

  return (
    <div className={style}>
      {links.map(link => {
        const { url, icon: Icon } = link;
        return (
          <a href={url} key={url}>
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

Social.propTypes = {
  links: PropTypes.array.isRequired,
};

export default Social;
