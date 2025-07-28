import Chai from "./Chai"

function App() {
  const username = ":Testing the file for bugs"
  return (
    <>               
    <Chai/>
    <p>Error {username}</p>     
    </>

  )
  // this {varaible} should only be an evaluated expression and not some definition or condition
  // this is a fragment, we can return multiple components under this
}

export default App
