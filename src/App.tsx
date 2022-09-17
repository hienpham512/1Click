import "./App.css";
import { db } from "./firebase/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
function App() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "tasks"), {
        title: "title",
        description: "description",
        completed: false,
        created: Timestamp.now(),
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="App">
      <button onClick={handleSubmit}>click</button>
    </div>
  );
}

export default App;
