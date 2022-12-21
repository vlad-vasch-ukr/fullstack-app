import { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { IListItem } from '../../../types';
import TransitionGroupWrapper from '../../TransitionGroupWrapper/TransitionGroupWrapper';
import DetailsListItem from './DetailsListItem';
import './DetailsList.scss';

export default function DetailsList({ items }) {
  const [currList, setCurrList] = useState(() =>
    items.map((item) => ({ ...item, nodeRef: createRef(null), id: uuid() })),
  );

  const deleteListItem = (index) => {
    const newArr = [...currList];
    newArr.splice(index, 1);
    setCurrList(newArr);
  };

  const checkItem = (index, e) => {
    const copy = [...currList];
    copy[index].completed = e.target.checked;
    setCurrList(copy);
  };

  return (
    <div className="details-list">
      <ul className="details-list__list">
        <TransitionGroupWrapper
          itemsList={currList}
          Component={DetailsListItem}
          onDelete={deleteListItem}
          onChecked={checkItem}
        />
      </ul>
    </div>
  );
}

DetailsList.propTypes = {
  item: PropTypes.shape(IListItem),
};
