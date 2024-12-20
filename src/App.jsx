import Button from '@mui/material/Button'
import { AccessAlarm, ThreeDRotation} from '@mui/icons-material' // Tree Shaking Import: Slow
import HomeIcon from '@mui/icons-material/Home' // Faster 6x
function App() {

  return (
    <>
      <div>BRIAN HO</div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <AccessAlarm />
      <ThreeDRotation />
      <HomeIcon />
    </>
  )
}

export default App
