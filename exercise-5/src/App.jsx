import Place from "./components/Place";
import { AVAILABLE_PLACES } from "./data.js";

function App() {
  const items = Array.isArray(AVAILABLE_PLACES) ? AVAILABLE_PLACES : [];

  if (!items.length) {
    return (
      <div style={{padding:20}}>
        <h1>PlacePicker</h1>
        <p>No places available — check <code>src/data.js</code>.</p>
      </div>
    );
  }

  return (
    <>
      <header>
        <h1></h1>
        <p></p>
      </header>
      <main>
        <section className="places-category">
          <ul className="places">
            {items.map((place) => (
              <Place key={place.id} {...place} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
