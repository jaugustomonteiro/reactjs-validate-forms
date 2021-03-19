import { useState } from 'react';
import './_global.css';

function App() {
  const [values, setValues] = useState({
    name: '',
    email: '',
  });

  const validation = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = '* name required';
    }

    if (!values.email) {
      errors.email = '* email required';
    }
    if (Object.keys(errors).length === 0) {
      alert('Dados cadastrados com sucesso!');
      setValues({ name: '', email: '' });
    }
    return errors;
  };

  const [errors, setErrors] = useState({});

  const onSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });

    //console.log(values);
  };

  return (
    <div className="wrapper">
      <form>
        <div className="form-group">
          <h2>Formulário</h2>
          <label>
            Nome<span>*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="your name"
            value={values.name}
            onChange={handleChange}
          />
          <div className="errors">
            {errors.name && <span>{errors.name}</span>}
          </div>
        </div>
        <div className="form-group">
          <label>
            Email <span>*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="your email"
            value={values.email}
            onChange={handleChange}
          />
          <div className="errors">
            {errors.email && <span>{errors.email}</span>}
          </div>
        </div>
        <button onClick={onSubmit} type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
