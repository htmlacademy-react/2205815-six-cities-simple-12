import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProops = {
  placesCount: number;
}


function App({placesCount}: AppScreenProops): JSX.Element {
  return (
    <MainScreen placesCount={placesCount} />
  );
}

export default App;
