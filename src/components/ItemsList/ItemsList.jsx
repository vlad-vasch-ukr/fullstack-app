import PropsTypes from 'prop-types';
import format from 'date-fns/format';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import ItemPreview from './ItemPreview/ItemPreview';
import ModalRoot from '../Modals/ModalRoot/ModalRoot';
import { useFetchListsQuery, useDeleteListByIdMutation } from '../../services/lists';
import './ItemsList.scss';

export default function ItemsList({ items, clickItem }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currItemId, setCurrItemId] = useState(null);
  const [deleteList] = useDeleteListByIdMutation();
  const { currItem } = useFetchListsQuery(undefined, {
    selectFromResult: ({ data, isSuccess, error }) => ({
      currItem: data?.find((item) => item.id === currItemId),
      isSuccess,
      error,
    }),
  });

  const toogleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onDeleteItemHandler = (id) => {
    setCurrItemId(id);
    toogleModal();
  };

  const deleteListItem = async (id) => {
    await toast
      .promise(
        deleteList(id).unwrap(),
        {
          loading: 'Removing...',
          success: 'Success!',
          error: 'Something wrong!',
        },
        {
          duration: 3000,
          position: 'top-right',
        },
      )
      .then(() => toogleModal());
  };

  const getModalBody = ({ name, created }) => {
    return (
      <div className="delete-list">
        <div className="delete-list__row">
          <span>Name: </span>
          <span>{name}</span>
        </div>
        <div className="delete-list__row">
          <span>Created: </span>
          <span>{format(new Date(created), 'MM/dd/yyyy')}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="items-list">
        {items.map(({ created, id, name }) => {
          return (
            <ItemPreview
              date={created}
              title={name}
              onClick={clickItem}
              id={id}
              key={id}
              onDelete={onDeleteItemHandler}
            />
          );
        })}
      </div>
      {isModalOpen && (
        <ModalRoot
          title="Do you really want to delete this list?"
          acceptButtonText="delete"
          theme="error"
          onClose={toogleModal}
          onAccept={() => deleteListItem(currItemId)}>
          {currItem ? getModalBody(currItem) : <div></div>}
        </ModalRoot>
      )}
    </>
  );
}

ItemsList.propTypes = {
  items: PropsTypes.oneOfType([PropsTypes.arrayOf([PropsTypes.object]), PropsTypes.array])
    .isRequired,
  clickItem: PropsTypes.func,
};
