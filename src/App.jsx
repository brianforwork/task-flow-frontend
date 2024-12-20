import Button from '@mui/material/Button'
import { AccessAlarm, ThreeDRotation} from '@mui/icons-material' // Tree Shaking Import: Slow
import HomeIcon from '@mui/icons-material/Home' // Faster 6x
import { useColorScheme } from '@mui/material/styles';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

function App() {


  return (
    <>
      <ModeToggle />
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
