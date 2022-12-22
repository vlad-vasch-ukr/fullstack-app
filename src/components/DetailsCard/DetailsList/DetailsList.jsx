import PropTypes from 'prop-types';
import { IListItem } from '../../../types';
import DetailsListItem from './DetailsListItem';
import './DetailsList.scss';

export default function DetailsList({ items, onCheck, onDelete, onChange }) {
  return (
    <div className="details-list">
      <ul className="details-list__list">
        {items.map((item, index) => {
          return (
            <DetailsListItem
              item={item}
              index={index}
              onDelete={onDelete}
              onChange={onChange}
              onChecked={onCheck}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
}

DetailsList.propTypes = {
  item: PropTypes.shape(IListItem),
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
