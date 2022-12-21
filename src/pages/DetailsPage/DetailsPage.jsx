import { useParams, Navigate } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { useFetchListByIdQuery } from '../../services/lists';
import DetailsCard from '../../components/DetailsCard/DetailsCard';
import './DetailsPage.scss';

export default function DetailsPage() {
  const { id } = useParams();
  const { data: currItem, isSuccess, error } = useFetchListByIdQuery(id);

  if ((!currItem?.data?.length && isSuccess) || error) return <Navigate to="/" replace />;

  return (
    <div className="list-editing">
      {!isSuccess ? <Loader /> : <DetailsCard list={currItem.data[0]} />}
    </div>
  );
}
