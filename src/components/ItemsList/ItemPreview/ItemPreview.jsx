import PropTypes from 'prop-types';
import { formatDate } from '../../../helpers/formatDate';
import './ItemPreview.scss';

export default function ItemPreview({ title, date, onClick, id, onDelete }) {
  const deleteListItem = (event) => {
    event.stopPropagation();
    onDelete(id);
  };

  return (
    <div className="list-preview" onClick={() => onClick(id)}>
      <button type="button" className="list-preview__delete" onClick={deleteListItem}>
        delete
      </button>
      <h2 className="list-preview__title">{title}</h2>
      <div className="list-preview__container">
        {Array(5)
          .fill('')
          .map((item, index) => (
            <div className="list-preview__item" key={index}></div>
          ))}
      </div>
      <div className="list-preview__date">
        <span>Created: </span>
        <span>{formatDate(date)}</span>
      </div>
    </div>
  );
}

ItemPreview.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func,
};

ItemPreview.defaultTypes = {
  onClick: () => {},
  onDelete: () => {},
};
