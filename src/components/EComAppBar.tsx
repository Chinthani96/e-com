import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { LOGIN } from '../shared/routes';
import { useHistory } from 'react-router';

const EComAppBar = () => {
  const history =  useHistory();

  // TODO : Fix navigation fail
  const onClickNavigate = (route: string) => {
    history.push(route);
  }
    return(
        <Box sx={{ flexGrow: 1, backgroundColor:"yellow" }}>
        <AppBar position="static" sx={{ backgroundColor:"#413E5C" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            e-com
          </Typography>
          <Button color="inherit" onClick={() => onClickNavigate(LOGIN)}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    )
}
export default EComAppBar;