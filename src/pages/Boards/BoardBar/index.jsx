import Box from '@mui/material/Box'

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      backgroundColor: 'primary.dark',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center'
    }}>
          Board Bar
    </Box>
  )
}

export default BoardBar
