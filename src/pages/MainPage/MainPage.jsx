import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemsList from '../../components/ItemsList/ItemsList';
import { Loader } from '../../components/Loader/Loader';
import notification from '../../helpers/notification';
import { useFetchListsQuery } from '../../services/lists';
import './MainPage.scss';

export default function MainPage() {
  const navigate = useNavigate();
  const { data: lists, isLoading, error } = useFetchListsQuery();

  useEffect(() => {
    if (error) notification('Somethings wrong!', 'error');
  }, [error]);

  const clickItem = (id) => {
    navigate('/lists/details/' + id);
  };

  const emptyList = () => {
    return (
      <div className="empty-list">
        <div className="empty-list__title">List is empty :(</div>
        <div className="empty-list__folder"></div>
      </div>
    );
  };

  return (
    <div className="main-page">
      <h1 className="main-page__title">
        Welcome to <span>&quot;List Manager&quot;</span>!
      </h1>
      {lists?.length ? <ItemsList items={lists} clickItem={clickItem} /> : emptyList()}
      {isLoading && <Loader />}
      <button
        type="button"
        className="add-item-button"
        onClick={() => navigate('/create-new-list')}
      />
    </div>
  );
}
