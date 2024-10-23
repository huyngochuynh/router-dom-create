import React, { useState, useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, IconButton, InputAdornment, Stack, Typography, Link } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Modal from '@mui/material/Modal';
import { AuthContext } from '../context/AuthContext';

export default function LoginForm({ open, handleClose, book }) {
  const { signIn } = useContext(AuthContext)
  const defaultValues = {
    username: "web virgil learner",
    password: "123456",
  }

  const methods = useForm({ defaultValues });
  const { 
    setError,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;
  
  const [showPassword, setShowPassword] = useState(false);
  
  const onSubmit = (data) => {
    signIn(data.username);
    setError("afterSubmit", { message: "Server Response Error"});
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} alignItems="center" sx={{ maxWidth: 400, mx: 'auto', mt: 5, padding: 3, bgcolor: 'grey.900', color: 'white', borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          <span role="img" aria-label="lock">🔒</span> Log in
        </Typography>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="User name"
              fullWidth
              variant="outlined"
              error={!!errors.username}
              helperText={errors.username ? errors.username.message : ''}
            />
          )}
          rules={{ required: 'User name is required' }}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          )}
          rules={{ required: 'Password is required' }}
        />

        <Button
          type="submit"
          fullWidth
          size="large"
          variant="contained"
          color="error"
          loading={isSubmitting}
        >
          SIGN IN
        </Button>

        <Stack direction="row" justifyContent="space-between" width="100%" sx={{ mt: 2 }}>
          <Link to="/" variant="body2" color="inherit">
            Forgot password?
          </Link>
          <Link to="/" variant="body2" color="inherit">
            Don't have an account? Sign Up
          </Link>
        </Stack>

        </Stack>
      </form>
    </Modal>
  );
}
