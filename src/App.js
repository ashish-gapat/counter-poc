export default function App({store}) {
  return (
    <div className="app">
      <h1>{store.getState()}</h1>
      <button onClick={e => store.dispatch({type: 'INCREMENT'})}>Increment</button>
      <button onClick={e => store.dispatch({type: 'DECREMENT'})}>Decrement</button>
    </div>
  )
}


