import { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Link } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { supabase } from './supa'; // Asegúrate de la ruta correcta a tu archivo supabaseClient.js
import Image from '../assets/virtu.png';
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (event) => {
    event.preventDefault();
    setError('');

   
const { data, error } = await supabase.auth.signInWithPassword({
  email: email,
  password: password,
})

    if (error) {
      setError(error.message);
    } else {
      console.log('User logged in:', data.user);
      navigate("/home"); // Redirige a la ruta deseada
      // Redirige o maneja la sesión como necesites
    }
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
        <img src={Image} alt="Virtu Logo" style={{ width: 190, marginBottom: 16 }} />
        <LockIcon style={{ fontSize: 50, color: '#00497E' }} />
        <Typography variant="caption" gutterBottom style={{ marginTop: 16, fontSize: 16 }}>
          Por favor, introduce tus credenciales
        </Typography>
        <form onSubmit={handleSignIn}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Correo electrónico"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <Box component="span" display="flex" alignItems="center" mr={1}>
                  <MailOutlineIcon />
                </Box>
              ),
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <Box component="span" display="flex" alignItems="center" mr={1}>
                  <LockOutlinedIcon />
                </Box>
              ),
            }}
          />
          {error && (
            <Typography color="error" variant="body2" align="center">
              {error}
            </Typography>
          )}
          <Box display="flex" justifyContent="flex-end" width="100%" mt={1}>
            <Link href="#" variant="body2">
              ¿Olvidaste tu contraseña?
            </Link>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: '24px 0px 16px', backgroundColor: '#00497E' }}
          >
            Iniciar Sesión
          </Button>
        </form>
        <Box display="flex" justifyContent="center" width="100%" mt={2}>
          <Typography variant="body2">
            ¿No te has registrado?{' '}
            <Link href="#" variant="body2">
              Regístrate
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
