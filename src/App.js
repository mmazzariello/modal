import { openModal, openModalAccount } from "./components/openModal";

function App() {
  const handleOpenModal = () => {
    openModal();
  };

  const handleOpenModal2 = () => {
    openModalAccount();
  };

  return (
    <div className="App">
      <button onClick={handleOpenModal}>Open modal</button>
      <button onClick={handleOpenModal2}>Open modal account</button>
    </div>
  );
}

export default App;
