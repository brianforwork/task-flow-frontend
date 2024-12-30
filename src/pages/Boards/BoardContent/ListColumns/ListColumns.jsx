import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'

function ListColumns({ columns }) {

  return (
    <Box sx={{
      bgcolor: 'inherit',
      width: '100%',
      height: '100%',
      display: 'flex',
      overflowX: 'auto',
      overflowY: 'hidden',
      '&::-webkit-scrollbar-track': { m:2 }
    }}>
      {/*Box Column 1*/}
      {columns?.map(column => <Column column={column} key={column._id} />)}
      <Box sx={{
        minWidth: '200px',
        maxWidth: '200px',
        height: 'fit-content',
        mx: 2,
        bgcolor: '#ffffff3d',
        borderRadius: '6px'
      }}>
        <Button startIcon={<PlaylistAddIcon />} sx={{
          color: 'white',
          pl: 2.5,
          py: 1,
          justifyContent: 'flex-start',
          width: '100%'
        }}
        >
          Add New Column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns