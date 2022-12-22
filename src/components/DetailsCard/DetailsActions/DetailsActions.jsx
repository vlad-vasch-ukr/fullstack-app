import PropTypes from 'prop-types';
import CButton from '../../CButton/CButton';
import './DetailsActions.scss';

export default function DetailsActions({ onCancel, onSave, disabled }) {
  return (
    <div className="details-actions">
      <CButton theme="success" onClick={onSave} disabled={disabled}>
        save
      </CButton>
      <CButton theme="error" onClick={onCancel}>
        cancel
      </CButton>
    </div>
  );
}

DetailsActions.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

DetailsActions.defaultProps = {
  disabled: false,
};
