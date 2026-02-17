import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppBar, Box, Toolbar, IconButton, Typography, Button, colors} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import logo from './assets/Images/Logo.png'
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
        console.log("Access Token:", tokenResponse.access_token);
      },
      onError: () => console.log("Login Failed"),
  });

  console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID);
  
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{borderTopLeftRadius:15, borderTopRightRadius:15}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DND Infinity
          </Typography>
          <Button color="inherit" onClick={() => login()}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Box sx={{flexGrow:10, bgcolor: '#ff26009c', width:'100%', height:'90.2vh', display: 'flex', border: 'none', borderBottomLeftRadius: 15, borderBottomRightRadius: 15, textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
      <img src={logo} style={{display:'flex', overflow: 'hidden', maxWidth: '1000px', minWidth: '600px'}}/>
    </Box>
    </>
  )
}

export default App
