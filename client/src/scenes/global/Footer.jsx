import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            Zahra Store
          </Typography>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Profesiones</Typography>
          <Typography mb="30px">Nuestras Tiedas</Typography>
          <Typography mb="30px">Terminos y Condiciones</Typography>
          <Typography mb="30px">Politica de Privacidad</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Centro de Ayuda</Typography>
          <Typography mb="30px">Estado de tu Orden</Typography>
          <Typography mb="30px">Compras Empresariales</Typography>
          <Typography mb="30px">Retornos y Reembolsos</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contactenos
          </Typography>
          <Typography mb="30px">
            Cordoba, Cordoba Capital, Argentina
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: ericdenislaura@gmail.com
          </Typography>
          <Typography mb="30px">(222)333-4444</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;