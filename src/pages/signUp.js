import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";

import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import EmailIcon from "@mui/icons-material/Email";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Card, Typography } from "@mui/material";

const SignUp = () => {
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
            <Typography variant="h3"> Nice to meet you </Typography>
          </Box>
          <Card sx={{ padding: "24px", mt: 5 }}>
            <Box display="flex" flexDirection="column" textAlign="center">
              <TextField
                label="Enter your email"
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ m: 3 }}
              />
              <TextField
                label="Create a username"
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                sx={{ m: 3 }}
              />
              <TextField
                type="password"
                label="Create a password"
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOpenIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ m: 3 }}
              />
              <TextField
                type="password"
                label="Confirm your password"
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <RefreshIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ m: 3 }}
              />
            </Box>
            <Box display="flex" flexDirection="row" sx={{ m: 3 }}>
              <Typography>
                Already have an account? <a href="/signin">Sign In</a>
              </Typography>
            </Box>
            <Box sx={{ m: 3 }}>
              <Button
                fullWidth
                variant="contained"
                sx={{ borderRadius: "12px" }}
              >
                Create Account
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUp;
