import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'

function BoardContent() {

  return (
    <Box sx={{
      width: '100%',
      p: '10px 0',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      height: (theme) => theme.trello.boardContentHeight
    }}>
      {/* Column */}
      <ListColumns />

    </Box>
  )
}

export default BoardContent
