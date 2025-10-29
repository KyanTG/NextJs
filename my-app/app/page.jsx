import './App.css';
import MyButton from "/components/components.jsx"

function App() {
  return (
    <>
      <section>
        <h1>hi wereld</h1>
      </section>
      <Text />
      <Custom show="kijk het werkt" />
      <MyButton />
    </>
  );
}

function Text() {
  return (
    <>
      <section>
        <p>kiekeboe</p>
      </section>
    </>
  )
}

function Custom({show}) {
  return (
    <p>{show}</p>
  )
}

export default App