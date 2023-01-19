
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Banner() {
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                    >
                        Pet store
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Banner;