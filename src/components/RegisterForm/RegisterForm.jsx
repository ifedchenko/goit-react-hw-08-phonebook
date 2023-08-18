import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';
import css from './RegisterForm.module.css';
// import Notiflix from 'notiflix';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // .then(() => {
    //   Notiflix.Notify.success(`Thank you "${name}" for registration`);
    //   form.reset();
    // })
    // .catch(error => {
    //   console.log('Error:', error);
    //   Notiflix.Notify.failure('Contact could not be added');
    // });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
