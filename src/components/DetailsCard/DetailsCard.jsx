import DetailsDate from './DetailsDate/DetailsDate';
import DetailsList from './DetailsList/DetailsList';
import DetailsActions from './DetailsActions/DetailsActions';
import './DetailsCard.scss';

export default function DetailsCard({ list }) {
  return (
    <div className="details-card">
      <h1 className="details-card__title">{list.name}</h1>
      <DetailsDate startDate={list.start_date} endDate={list.end_date} />
      <DetailsList items={list.list_items} />
      <DetailsActions />
    </div>
  );
}
