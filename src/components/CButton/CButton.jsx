import PropTypes from 'prop-types';
import classNames from 'classnames';
import './CButton.scss';

export default function CButton({
  type,
  children,
  className,
  size,
  filled,
  disabled,
  theme,
  onClick,
  ...args
}) {
  return (
    <button
      className={classNames('c-button', className, size, theme, { filled: filled })}
      disabled={disabled}
      type={type}
      onClick={onClick}
      {...args}>
      {children}
    </button>
  );
}

CButton.propTypes = {
  type: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  filled: PropTypes.bool,
  disabled: PropTypes.bool,
  theme: PropTypes.oneOf(['error', 'success', 'primary']),
  onClick: PropTypes.func,
};

CButton.defaultProps = {
  type: 'button',
  className: '',
  size: 'medium',
  filled: true,
  disabled: false,
  theme: 'primary',
  onClick: () => {},
};
