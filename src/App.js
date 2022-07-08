import { useFormik } from "formik";

const App = () => {
  const formik = useFormik({
    initialValues:{
      name: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => console.log(values)
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input
        name="name"
        type="text"
        onChange={formik.handleChange}
        values={formik.values.name}
      />
      <label>Apellido</label>
      <input
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        values={formik.values.lastName}
      />
      <label>Email</label>
      <input
        name="email"
        type="text"
        onChange={formik.handleChange}
        values={formik.values.email}
      />
      <button type="submit"> Enviar </button>
    </form>
  )
}

export default App;
