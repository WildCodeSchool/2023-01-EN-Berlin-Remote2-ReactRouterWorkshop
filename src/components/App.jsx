import { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Contact from "./Contact";
import Form from "./Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Sidebar />
        <div
          id="detail"
          // className={navigation.state === "loading" ? "loading" : ""}
        >
          <Routes>
            <Route path="contacts/:id" element={<Contact />} />
            <Route path="contacts/:id/edit" element={<Form />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
