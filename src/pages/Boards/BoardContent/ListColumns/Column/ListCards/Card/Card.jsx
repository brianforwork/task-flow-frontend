import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import ChatIcon from '@mui/icons-material/Chat'
import AttachmentIcon from '@mui/icons-material/Attachment'

function Card() {
  return (
    <>
      <MuiCard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset'
      }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/naruto-s-akatsuki-villains.jpg"
          title="Akatsuki Gang" />
        <CardContent sx={{
          p: 1.5,
          '&:last-child': { p: 1.5 }
        }}>
          <Typography>
                  Akatsuki
          </Typography>
        </CardContent>
        <CardActions sx={{ p: '0px 4px 8px 4px' }}>
          <Button startIcon={<GroupIcon />} size="small">20</Button>
          <Button startIcon={<ChatIcon />} size="small">10</Button>
          <Button startIcon={<AttachmentIcon />} size="small">5</Button>
        </CardActions>
      </MuiCard><MuiCard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset'
      }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.ytimg.com/vi/4D6as7R0OGM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDBbbApNXBky6aR9IGq7_AazNLAnA"
          title="Uchiha Itachi" />
        <CardContent sx={{
          p: 1.5,
          '&:last-child': { p: 1.5 }
        }}>
          <Typography>
                      Itachi Uchiha
          </Typography>
        </CardContent>
      </MuiCard><MuiCard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset'
      }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.ytimg.com/vi/4D6as7R0OGM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDBbbApNXBky6aR9IGq7_AazNLAnA"
          title="Uchiha Itachi" />
        <CardContent sx={{
          p: 1.5,
          '&:last-child': { p: 1.5 }
        }}>
          <Typography>
                      Itachi Uchiha
          </Typography>
        </CardContent>
      </MuiCard></>
  )
}

export default Card