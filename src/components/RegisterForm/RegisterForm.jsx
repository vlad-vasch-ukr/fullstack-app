import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { rules, fields } from './helpers';
import CInput from '../CInput/CInput';
import CButton from '../CButton/CButton';
import './RegisterForm.scss';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(rules),
  });

  const onSubmit = () => {};

  return (
    <div className="auth-form">
      <h1 className="auth-form__title">
        Sign in to <span>Project X</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => {
          return (
            <CInput
              name={field.name}
              label={field.label}
              register={register(field.name)}
              error={errors[field.name]?.message}
              key={field.name}
            />
          );
        })}
        <CButton className="auth-form__submit" type="submit" theme="success" disabled={!isValid}>
          Sign in
        </CButton>
      </form>
    </div>
  );
}
