import { decrement, increment, incrementByValue } from "./redux/features/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks"

function App() {
  const {count} = useAppSelector((state)=> state.counter)
  const dispatch = useAppDispatch()
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex bg-amber-100 p-5 gap-5 items-center">
        <button  onClick={() => dispatch(increment())} className="bg-green-400 p-5  rounded-3xl">Increment</button>
        <h1>{count}</h1>
        <button onClick={() => dispatch(decrement())} className="bg-red-400 p-5 rounded-3xl">Decrement</button>
        <button onClick={() => dispatch(incrementByValue(5))} className="bg-red-400 p-5 rounded-3xl">IncrementBY5</button>
      </div>
    </div>
  )
}

export default App
