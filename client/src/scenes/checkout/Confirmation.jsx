import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Confirmation = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Aprobado</AlertTitle>
        La Orden fue registrada correctamente —{" "}
        <strong>Gracias por comprar en Zarha!!!</strong>
      </Alert>
    </Box>
  );
};

export default Confirmation;
