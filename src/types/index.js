import PropTypes from 'prop-types';

export const IListItem = {
  value: PropTypes.string,
  completed: PropTypes.bool,
};

export const IList = {
  name: PropTypes.string,
  list_items: PropTypes.arrayOf(IListItem),
  start_date: PropTypes.string,
  end_date: PropTypes.string,
  created: PropTypes.string,
};
