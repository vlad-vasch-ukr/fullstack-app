import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import DetailsDate from './DetailsDate/DetailsDate';
import DetailsList from './DetailsList/DetailsList';
import DetailsActions from './DetailsActions/DetailsActions';
import ModalRoot from '../Modals/ModalRoot/ModalRoot';
import './DetailsCard.scss';

export default function DetailsCard({ list }) {
  const navigation = useNavigate();
  const [isModalShown, setIsModalShown] = useState(false);
  const [currList, setCurrList] = useState(list);

  const deleteListItem = (index) => {
    const newArr = _.cloneDeep(currList.list_items);
    newArr.splice(index, 1);
    setCurrList({
      ...currList,
      list_items: [...newArr],
    });
  };

  const checkItem = (index, e) => {
    const copy = _.cloneDeep(currList.list_items);
    copy[index].completed = e.target.checked;
    setCurrList({
      ...currList,
      list_items: [...copy],
    });
  };

  const changeListItem = (index, newValue) => {
    if (newValue !== currList.list_items[index]) {
      const copy = _.cloneDeep(currList.list_items);
      copy[index].value = newValue;
      setCurrList({
        ...currList,
        list_items: [...copy],
      });
    }
  };

  const saveDateChanges = (key, value) => {
    setCurrList({
      ...currList,
      [key]: value,
    });
  };

  const cancelChanges = () => {
    const isEqual = _.isEqual(list, currList);

    if (isEqual) {
      navigation(-1);
    } else setIsModalShown(true);
  };

  return (
    <div className="details-card">
      <h1 className="details-card__title">{list.name}</h1>
      <DetailsDate
        startDate={currList.start_date}
        endDate={currList.end_date}
        onChange={saveDateChanges}
      />
      <DetailsList
        items={currList.list_items}
        onCheck={checkItem}
        onDelete={deleteListItem}
        onChange={changeListItem}
      />
      <DetailsActions
        onSave={() => {}}
        onCancel={cancelChanges}
        disabled={_.isEqual(list, currList)}
      />
      {isModalShown && (
        <ModalRoot
          onClose={() => setIsModalShown(false)}
          onAccept={() => navigation(-1)}
          theme="success">
          <div className="details-card__modal">
            <p>You didn&apos;t save your changes.</p>
            <p>Do you really want to cancel?</p>
          </div>
        </ModalRoot>
      )}
    </div>
  );
}
