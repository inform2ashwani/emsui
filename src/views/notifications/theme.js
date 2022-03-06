
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
 overrides: {
    MuiOutlinedInput: {
        multiline: {
            fontWeight: 'bold',
            fontSize: '20px',
            color: 'purple',
            width: '50vw'
        }
    }
}
  
});
export default theme;