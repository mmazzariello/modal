import openModal from "./components/openModal";

function App() {
  const handleOpenModal = () => {
    openModal();
  };
  return <button onClick={handleOpenModal}>Open modal</button>;
}

export default App;
