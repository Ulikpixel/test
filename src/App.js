import React, { useState } from "react";
import { useStore } from "./Provider";
import { Modal } from "./components";

const App = () => {
  const store = useStore();
  const [modal, setModal] = useState(false);
  return (
    <div className="app">
      <button onClick={() => setModal(true)}>Редактировать</button>
      <Modal modal={modal} setModal={setModal} store={store} />
    </div>
  );
}

export default App;
