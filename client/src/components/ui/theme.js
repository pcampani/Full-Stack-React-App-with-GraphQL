import { createMuiTheme } from '@material-ui/core/styles';

const gray = "#3A506B";
const darkGray = "#1C2541";
const mint =  "#5BC0BE";
const blue = "#0B132B";
const green = "#6FFFE9";

export default createMuiTheme({
  palette: {
    primary: {
      main: `${blue}`
    },
    secondary: {
      main: `${mint}`
    }
  }
  
})