import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import PropTypes from 'prop-types';
import isAfter from 'date-fns/isAfter';
import { formatDate } from '../../../helpers/formatDate';
import useClickOutside from '../../../hooks/cliskOutside';
import notification from '../../../helpers/notification';
import TransitionWrapper from '../../TransitionWrapper/TransitionWrapper';
import 'react-day-picker/dist/style.css';
import './DetailsDate.scss';

export default function DetailsDate({ startDate, endDate }) {
  const [switcher, setSwitcher] = useState(null);
  const [selected, setSelected] = useState({
    startDate: new Date(startDate),
    endDate: new Date(endDate),
  });
  const toggleDatepicker = (switchValue, e) => {
    e.stopPropagation();

    if (switchValue === switcher) {
      setSwitcher(null);
    } else setSwitcher(switchValue);
  };
  const outsideRef = useClickOutside(() => setSwitcher(null));
  const selectDates = (date, path) => {
    const result = isAfter(selected.startDate, date);

    if (result) {
      notification('Error! Check the dates!', 'error');
    } else setSelected({ ...selected, [path]: date });
  };

  return (
    <div className="details-date">
      <div className="details-date__start">
        <span className="details-date__title">Start date:</span>
        <span className="details-date__date" onClick={(e) => toggleDatepicker('start', e)}>
          {formatDate(selected.startDate)}
        </span>
        <TransitionWrapper in={switcher === 'start'}>
          <div className="details-date__daypicker" ref={outsideRef}>
            <DayPicker
              mode="single"
              selected={selected.startDate}
              onSelect={(date) => selectDates(date, 'startDate')}
            />
          </div>
        </TransitionWrapper>
      </div>
      <div className="details-date__end">
        <span className="details-date__title">End date:</span>
        <span className="details-date__date" onClick={(e) => toggleDatepicker('end', e)}>
          {formatDate(selected.endDate)}
        </span>
        <TransitionWrapper in={switcher === 'end'}>
          <div className="details-date__daypicker" ref={outsideRef}>
            <DayPicker
              mode="single"
              selected={selected.endDate}
              onSelect={(date) => selectDates(date, 'endDate')}
            />
          </div>
        </TransitionWrapper>
      </div>
    </div>
  );
}

DetailsDate.propsTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};
