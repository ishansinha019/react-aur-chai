import Card from './components/Card'
import './App.css'

function App() {
 
  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl'>Tailwind Test</h1>
      <Card username="Chemistry" btnText="Inorganic"/>
      <Card username="Mathematics" btnText="Algebra"/>
      <Card username="Physics" />

    </>
  )
}

export default App


