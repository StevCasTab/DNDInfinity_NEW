
import { AppBar, Box, Toolbar, IconButton, Typography} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Grid, TextField } from "@mui/material"

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


export default function CreateCharacter() 
{

    return(
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
        </Toolbar>
      </AppBar>
    </Box>
    <Box sx={{flexGrow:10, bgcolor: '#ff26009c', width:'100%', height:'90.2vh', display: 'flex', border: 'none', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
        <Box sx={{width: "90%", marginLeft:5, marginRight:5, marginTop:10}}>
            <Grid container spacing={5}>
                <Grid size={4}>
                    <Item sx={{ width: "100%", height: "100%", minHeight: 10, maxHeight:60}}>
                        <TextField
                            label="Name"
                            fullWidth
                            variant="filled"
                            sx={{
                            
                                "& .MuiFilledInput-root": {
                                backgroundColor: "rgba(255,255,255,0.9)",
                                borderRadius: 2,
                                },
                                "& .MuiFilledInput-underline:before": { borderBottom: "none" },
                                "& .MuiFilledInput-underline:after": { borderBottom: "none" },
                                "& .MuiFilledInput-underline:hover:before": { borderBottom: "none" },
                            }}
                            />   
                    </Item>
                </Grid>
                <Grid size={8} sx={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} gap={2}>
                    <Item sx={{ width: "100%", height: "100%", maxHeight: 60, maxWidth:80}}>
                        <Box sx={{display:'flex', flexDirection: 'column', gap: 1}}>
                            <Box sx={{fontSize:15}}>
                                Strength
                            </Box>
                            <Box sx={{fontSize:18}}>
                                0
                            </Box>
                        </Box>
                    </Item>
                    <Item sx={{ width: "100%", height: "100%", maxHeight: 60, maxWidth:80}}>
                        <Box sx={{display:'flex', flexDirection: 'column', gap:1}}>
                            <Box sx={{fontSize:15}}>
                                Dexterity
                            </Box>
                            <Box sx={{fontSize:18}}>
                                0
                            </Box>
                        </Box>
                    </Item>
                    <Item sx={{ width: "100%", height: "100%", maxHeight: 60, maxWidth:80}}>
                        <Box sx={{display:'flex', flexDirection: 'column', gap:1}}>
                            <Box sx={{fontSize:15}}>
                                Constitution
                            </Box>
                            <Box sx={{fontSize:18}}>
                                0
                            </Box>
                        </Box>
                    </Item>
                    <Item sx={{ width: "100%", height: "100%", maxHeight: 60, maxWidth:80}}>
                        <Box sx={{display:'flex', flexDirection: 'column', gap:1}}>
                            <Box sx={{fontSize:15}}>
                                Intelligence
                            </Box>
                            <Box sx={{fontSize:18}}>
                                0
                            </Box>
                        </Box>
                    </Item>
                    <Item sx={{ width: "100%", height: "100%", maxHeight: 60, maxWidth:80}}>
                        <Box sx={{display:'flex', flexDirection: 'column', gap:1}}>
                            <Box sx={{fontSize:15}}>
                                Wisdom
                            </Box>
                            <Box sx={{fontSize:18}}>
                                0
                            </Box>
                        </Box>
                    </Item>
                    <Item sx={{ width: "100%", height: "100%", maxHeight: 60, maxWidth:80}}>
                        <Box sx={{display:'flex', flexDirection: 'column', gap:1}}>
                            <Box sx={{fontSize:15}}>
                                Charisma
                            </Box>
                            <Box sx={{fontSize:18}}>
                                0
                            </Box>
                        </Box>
                    </Item>
                </Grid>

                {/* Buffer */}
                <Grid size={12}></Grid>


                <Grid size={4}>
                    <Item sx={{ width: "100%", height:300}}>
                        <Box sx={{display:'flex', width:'100%', height: "100%", textAlign: 'center',alignItems: "center", justifyContent:'center'}}>
                            Image Goes Here
                        </Box>
                    </Item>
                </Grid>
                <Grid size={8}>
                    <Item>size=8</Item>
                </Grid>
            </Grid>
        </Box>
    </Box>
    </>
    );
}