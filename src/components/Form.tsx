import { Typography, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";
import FormSchema from "../schemas/Form";

const formSchema = FormSchema;

const Form = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Typography color="text.primary" variant="h5" component="h2" gutterBottom>
        Sign-In
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          variant="filled"
          id="email"
          name="email"
          label="Email"
          margin="normal"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="filled"
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <div className="grid justify-items-end">
          <Button
            endIcon={<SendIcon />}
            sx={{ mt: 4, width: [1 / 1, 1 / 3] }}
            color="primary"
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default Form;
