import PropTypes from 'prop-types';
import CButton from '../../CButton/CButton';
import './ModalRoot.scss';

export default function ModalRoot({ title, children, onClose, onAccept, theme, acceptButtonText }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__header">
          <p className="modal__title">{title}</p>
          <button type="button" className="modal__close" onClick={onClose} />
        </div>
        <div className="modal__body">{children}</div>
        <div className="modal__footer">
          <CButton theme={theme} onClick={onAccept}>
            {acceptButtonText}
          </CButton>
          <CButton onClick={onClose}>Close</CButton>
        </div>
      </div>
    </div>
  );
}

ModalRoot.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['error', 'success', 'primary']),
  acceptButtonText: PropTypes.string,
};

ModalRoot.defaultProps = {
  title: '',
  theme: 'primary',
  acceptButtonText: 'Accept',
};
