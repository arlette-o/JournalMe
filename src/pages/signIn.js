import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";

import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Card, Typography } from "@mui/material";

import { login } from "../actions/auth.js";

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    const credentials = {
      username,
      password,
    };

    await login(credentials);
    navigate("/home");
  };
  return (
    <Box height="100vh" sx={{ background: "#F3EDE2" }}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={4}>
          <Box
            display="flex"
            flexDirection="column"
            textAlign="center"
            sx={{ mt: 15 }}
          >
            <Typography variant="h4"> JournalMe </Typography>
            <Typography variant="h3"> So good to see you again </Typography>
          </Box>
          <Card sx={{ padding: "24px", mt: 5 }}>
            <Box display="flex" flexDirection="column" textAlign="center">
              <TextField
                label="Username"
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                sx={{ m: 3 }}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                type="password"
                label="Password"
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOpenIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ m: 3 }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              sx={{ m: 3 }}
            >
              <Typography>
                Need an account? <a href="/signup">Sign Up</a>
              </Typography>
              <Typography> Forgot Password</Typography>
            </Box>
            <Box sx={{ m: 3 }}>
              <Button
                fullWidth
                variant="contained"
                sx={{ borderRadius: "12px" }}
                onClick={signIn}
              >
                Sign In
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignIn;
