import PropTypes from 'prop-types';
import classNames from 'classnames';
import './CInput.scss';

export default function CInput({
  type,
  placeholder,
  label,
  name,
  error,
  className,
  register,
  onChange,
  ...args
}) {
  return (
    <div className={classNames('c-input', className, { error: !!error })}>
      {label && (
        <label className="c-input__label" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="c-input__wrap">
        <input
          type={type}
          placeholder={placeholder}
          id={name}
          onChange={onChange}
          {...register}
          {...args}
          className="c-input__field"
        />
      </div>
      <p className="c-input__error">{error}</p>
    </div>
  );
}

CInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  register: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

CInput.defaultProps = {
  type: 'text',
  className: '',
  register: {},
  onChange: () => {},
};
