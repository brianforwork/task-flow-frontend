import Box from '@mui/material/Box'
import Card from './Card/Card'


function ListCards() {

  return (
    <Box sx={{
      gap: 1,
      display: 'flex',
      flexDirection: 'column',
      p: '0 5px',
      m: '0 5px',
      overflowX: 'hidden',
      overflowY: 'auto',
      maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${theme.trello.columnHeaderHeight} - ${theme.trello.columnFooterHeight})`,
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ced0da',
        borderRadius: '8px'
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#bfc2cf'
      }
    }}
    >
      <Card />

    </Box>
  )
}

export default ListCards