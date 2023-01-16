import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const user = "Phoenix";

  return (
    <div className=" bg-blue-700">
      <div className="text-white font-extrabold bg-gray-500 flex justify-center items-center hover:text-green-400 hover:scale-95">
        {user}
      </div>
    </div>
  );
}

export default App;
