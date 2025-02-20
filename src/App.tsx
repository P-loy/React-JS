import Buttons from "./Components/Buttons";
import Alert from "./Components/Alert";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && <Alert>My Alert</Alert>}
      <button
        color="primary"
        onClick={(setAlertVisibility) => console.log("Clicked")}
      >
        My Button
      </button>
    </div>
  );
}

export default App;
