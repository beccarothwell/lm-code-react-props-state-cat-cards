import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
import { useState } from "react";
import Cat from "./data/cat";
import catData from "./data/cat-data";
import Dog from "./data/dog";
import dogData from "./data/dog-data";
import AddPetForm from "./components/add_pet_form";

function App(): JSX.Element {
  // JavaScript/TypeScript code can be inserted here!
  const [cats, setCats] = useState<Array<Cat>>(catData);
  const [dogs, setDogs] = useState<Array<Dog>>(dogData);

  const catCount = cats.length;
  const dogCount = dogs.length;

  return (
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount} />

      <main>
        <AddPetForm setCats={setCats} />
        <div className="cards__wrapper">
          {cats.map((cat) => (
            <Card
              key={cat.id}
              name={cat.name}
              species={cat.species}
              favFoods={cat.favFoods}
              birthYear={cat.birthYear}
              image={cat.image}
            />
          ))}
          {dogs.map((dog) => (
            <Card
              key={dog.id}
              name={dog.name}
              species={dog.species}
              favFoods={dog.favFoods}
              birthYear={dog.birthYear}
              image={dog.image}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
