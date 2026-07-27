import Counter from "./components/Counter";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-10 w-[450px]">

        <h1 className="text-3xl font-bold text-center text-white">
          Context API Counter
        </h1>

        <p className="text-center text-slate-400 mt-2">
          Global State using React Context
        </p>

        <Counter />

        <Buttons />

      </div>
    </div>
  );
}

export default App;