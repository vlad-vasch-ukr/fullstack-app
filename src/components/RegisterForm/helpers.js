import * as Yup from 'yup';

export const rules = Yup.object().shape({
  name: Yup.string().required('Required field'),
  email: Yup.string().required('Required field').email('Please enter correct email'),
  password: Yup.string().required('Required field').min(8, 'Min 8 characters'),
  confirmPassword: Yup.string()
    .required('Required field')
    .oneOf([Yup.ref('password'), null], 'passwords must much'),
});

export const fields = [
  {
    type: 'text',
    name: 'name',
    label: 'Enter login:',
  },
  {
    type: 'text',
    name: 'email',
    label: 'Enter email:',
  },
  {
    type: 'password',
    name: 'password',
    label: 'Enter password:',
  },
  {
    type: 'password',
    name: 'confirmPassword',
    label: 'Confirm password:',
  },
];
