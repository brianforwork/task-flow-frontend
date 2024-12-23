import { experimental_extendTheme as extendTheme } from '@mui/material/styles'


// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '48px',
    boardBarHeight: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#4A90E2'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#3C6EAD'
        }
      }
    }
  }
  // ...other properties
})

export default theme