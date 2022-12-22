import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { IListItem } from '../../../types';

export default function DetailsListItem({ item, index, onDelete, onChecked, onChange }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState(item.value);
  const inputRef = useRef(null);

  const changeValue = (e) => setValue(e.target.value);

  const editItem = () => {
    setIsEditMode(!isEditMode);
    if (value !== item.value && !!value) {
      onChange(index, value);
    }
  };

  const getItemMode = () => {
    return isEditMode ? (
      <input
        type="text"
        className="details-list__change"
        value={value}
        ref={inputRef}
        onChange={changeValue}
      />
    ) : (
      <p className="details-list__title">{value}</p>
    );
  };

  useEffect(() => {
    if (isEditMode) inputRef.current.focus();
  }, [isEditMode]);

  useEffect(() => {
    setValue(item.value);
  }, [item.value]);

  return (
    <li className={classNames('details-list__item', { completed: item.completed })}>
      <div className="details-list__item-wrap">
        <label className="details-list__checkbox" htmlFor={item.id}>
          <input
            type="checkbox"
            defaultChecked={item.completed}
            id={item.id}
            onChange={(e) => onChecked(index, e)}
          />
          <span />
        </label>
        <p className="details-list__index">{index + 1})</p>
        {getItemMode()}
        <div className="details-list__actions">
          <button
            type="button"
            className={classNames('details-list__edit', { editing: isEditMode })}
            onClick={editItem}
          />
          <button type="button" className="details-list__remove" onClick={() => onDelete(index)} />
        </div>
      </div>
    </li>
  );
}

DetailsListItem.propTypes = {
  item: PropTypes.shape(IListItem).isRequired,
  onDelete: PropTypes.func.isRequired,
  onChecked: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
