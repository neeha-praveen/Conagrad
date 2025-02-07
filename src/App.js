import { useState } from "react";
import StudentAuth from "./components/studentAuth";
import ExpertAuth from "./components/expertAuth";

function App() {
  const [userType, setUserType] = useState(null);

  console.log("User type:", userType);

  return (
    <div>
      <h1>Select User Type:</h1>
      <button onClick={() => setUserType("stu")}>Student</button>
      <button onClick={() => setUserType("exp")}>Expert</button>

      {userType === "stu" && <StudentAuth />}
      {userType === "exp" && <ExpertAuth />}

    </div>
  );
}

export default App;
