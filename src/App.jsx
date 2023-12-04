import {
  Stack,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  FormHelperText,
} from "@mui/material";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Stack
      px={4}
      py={6}
      minHeight="100vh"
      minWidth="100vw"
      alignItems="center"
      justifyContent="center"
    >
      <Stack onSubmit={onSubmit} component="form" width="600px" spacing={3}>
        <FormControl fullWidth variant="outlined">
          <InputLabel error={!!errors.name} htmlFor="name">
            Ingresa tu nombre
          </InputLabel>
          <OutlinedInput
            {...register("name", {
              required: {
                value: true,
                message: "El nombre es obligatorio",
              },
            })}
            fullWidth
            id="name"
            type="text"
            label="Ingresa tu nombre"
            error={!!errors.name}
          />
          <FormHelperText sx={{ color: "#f44336" }}>
            {errors.name?.message}
          </FormHelperText>
        </FormControl>
        <FormControl fullWidth variant="outlined">
          <InputLabel error={!!errors.address} htmlFor="address">
            Ingresa tu correo
          </InputLabel>
          <OutlinedInput
            {...register("address", {
              required: {
                value: true,
                message: "El correo es obligatorio",
              },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "El correo debe ser válido",
              },
            })}
            fullWidth
            id="address"
            type="text"
            label="Ingresa tu correo"
            error={!!errors.address}
          />
          <FormHelperText sx={{ color: "#f44336" }}>
            {errors.address?.message}
          </FormHelperText>
        </FormControl>
        <FormControl fullWidth variant="outlined">
          <InputLabel error={!!errors.password} htmlFor="password">
            Ingresa tu contraseña
          </InputLabel>
          <OutlinedInput
            {...register("password", {
              required: {
                value: true,
                message: "La contraseña es obligatoria",
              },
            })}
            fullWidth
            id="password"
            type="text"
            label="Ingresa tu contraseña"
            error={!!errors.password}
          />
          <FormHelperText sx={{ color: "#f44336" }}>
            {errors.password?.message}
          </FormHelperText>
        </FormControl>
        <FormControl fullWidth variant="outlined">
          <InputLabel
            error={!!errors.confirmPassword}
            htmlFor="confirmPassword"
          >
            Confirma tu contraseña
          </InputLabel>
          <OutlinedInput
            {...register("confirmPassword", {
              
              required: {
                value: true,
                message: "La confirmacion es obligatoria",
              },
              validate: (value) =>
                value === watch("password") ||
                "Las contraseñas deben ser iguales",
            })}
            fullWidth
            id="confirmPassword"
            type="text"
            label="Confirma tu contraseña"
            error={!!errors.confirmPassword}
          />
          <FormHelperText sx={{ color: "#f44336" }}>
            {errors.confirmPassword?.message}
          </FormHelperText>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Registrarse
        </Button>
      </Stack>
    </Stack>
  );
};

export default App;
