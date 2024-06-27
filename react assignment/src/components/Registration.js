import React, { useState } from 'react';
import { Container, Grid, TextField, Typography, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Checkbox, Button, Select, MenuItem, InputLabel } from '@mui/material';
import { styled } from '@mui/system';
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

const RegistrationForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  maxWidth: '600px',
  width: '100%',
  padding: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '10px',
});

const CenteredGridItem = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
    hobbies: {
      music: false,
      traveling: false,
      dancing: false,
      other: false,
    },
    profilePicture: null,
    country: '',
    agreeToTerms: false,
  });

  const change = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        profilePicture: event.target.files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const submit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <BackgroundContainer>
      <Container>
        <Grid container spacing={3}>
          <CenteredGridItem item md={6}>
            <Typography variant="h4" align="center" style={{ color: 'white' }}>
              Register Here
            </Typography>
          </CenteredGridItem>
          <Grid item md={6}>
            <RegistrationForm id="registrationForm" onSubmit={submit}>
              <FormControl fullWidth>
                <FormLabel htmlFor="fullName" className="required">Full Name</FormLabel>
                <TextField
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={change}
                  placeholder="Full Name"
                  variant="outlined"
                  required
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel htmlFor="username" className="required">Username</FormLabel>
                <TextField
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={change}
                  placeholder="Username"
                  variant="outlined"
                  required
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel htmlFor="password" className="required">Password</FormLabel>
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={change}
                  placeholder="Password"
                  variant="outlined"
                  required
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel htmlFor="confirmPassword" className="required">Confirm Password</FormLabel>
                <TextField
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={change}
                  placeholder="Confirm Password"
                  variant="outlined"
                  required
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel htmlFor="email" className="required">Email</FormLabel>
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={change}
                  placeholder="Email Address"
                  variant="outlined"
                  required
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel htmlFor="phone" className="required">Contact details</FormLabel>
                <TextField
                  id="phone"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={change}
                  placeholder="Phone Number"
                  variant="outlined"
                  required
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel htmlFor="dob" className="required">DOB</FormLabel>
                <TextField
                  id="dob"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={change}
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </FormControl>
              <FormControl component="fieldset">
                <FormLabel component="legend" className="required">Gender</FormLabel>
                <RadioGroup
                  name="gender"
                  value={formData.gender}
                  onChange={change}
                  row
                >
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel htmlFor="country" className="required">Country</InputLabel>
                <Select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={change}
                  variant="outlined"
                  required
                >
                  <MenuItem value=""><em>Select Country</em></MenuItem>
                  <MenuItem value="ind">India</MenuItem>
                  <MenuItem value="canada">Canada</MenuItem>
                  <MenuItem value="uk">UK</MenuItem>
                  <MenuItem value="us">USA</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel
                control={<Checkbox checked={formData.agreeToTerms} onChange={change} name="agreeToTerms" />}
                label="Agree to Terms and Conditions"
                required
              />
              <Grid container justifyContent="flex-end" spacing={2}>
                <Grid item>
                  <Button type="submit" variant="contained" color="primary">Submit</Button>
                </Grid>
                <Grid item>
                  <Button type="reset" variant="contained" color="error">Reset</Button>
                </Grid>
              </Grid>
            </RegistrationForm>
          </Grid>
        </Grid>
      </Container>
    </BackgroundContainer>
  );
};

export default Registration;
