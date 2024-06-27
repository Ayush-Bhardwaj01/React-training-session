import React, { useState } from 'react';
import {CardContent, Typography, TextField, Container, Box, Card, FormControlLabel, Checkbox, Button} from '@mui/material';
import {styled} from '@mui/system';
import backgroundImg from './bgimg.jpg';

const BackgroundContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const CardLogin = styled(Card)({
  maxWidth: 400,
  width: '100%',
  padding: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '10px',
});

const LoginForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
});

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    terms: false,
  });

  const change = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const submit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <BackgroundContainer>
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <CardLogin>
            <CardContent>
              <Typography variant="h4" align="center" gutterBottom>
                Login
              </Typography>
              <LoginForm onSubmit={submit}>
                <TextField
                  label="Username"
                  name="username"
                  value={formData.username}
                  onChange={change}
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={change}
                  variant="outlined"
                  fullWidth
                  required
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.terms}
                      onChange={change}
                      name="terms"
                      color="primary"
                    />
                  }
                  label="Terms and conditions"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Login
                </Button>
              </LoginForm>
            </CardContent>
          </CardLogin>
        </Box>
      </Container>
    </BackgroundContainer>
  );
};

export default Login;
