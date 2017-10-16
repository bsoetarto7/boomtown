import React from 'react';
import PropTypes from 'prop-types';
import {CardTitle} from 'material-ui/Card';

const CardTitleSubtitle = ({title, tags}) => {
  return(
    <CardTitle title={title} subtitle={tags.join(', ')} />
  )
}

CardTitleSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired
};

export default CardTitleSubtitle;