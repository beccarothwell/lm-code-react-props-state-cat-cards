import { ChangeEvent, MouseEvent, useState } from "react";
import Cat from "../data/cat";
import { v4 as uuidv4 } from "uuid";
import AddPetFormInput from "./add_pet_form_input";

type AddPetProps = {
  setCats: React.Dispatch<React.SetStateAction<Cat[]>>;
};

interface inputData {
  name: { value: string; error?: string };
  species: { value: string; error?: string };
  favFoods: { value: string; error?: string };
  birthYear: { value: string; error?: string };
}

const DEFAULT_INPUT_DATA = {
  name: { value: "" },
  species: { value: "" },
  favFoods: { value: "" },
  birthYear: { value: "" },
};

const AddPetForm: React.FC<AddPetProps> = ({ setCats }) => {
  const [inputData, setInputData] = useState<inputData>(DEFAULT_INPUT_DATA);

  function updateInputDataErrors(
    id: string,
    valid: boolean,
    errorMessage?: string
  ) {
    if (!valid) {
      setInputData((currentData) => ({
        ...currentData,
        [id]: { ...currentData[id as keyof inputData], error: errorMessage },
      }));
    } else {
      setInputData((currentData) => {
        const { error, ...validInput } = currentData[id as keyof inputData];
        return {
          ...currentData,
          [id]: validInput,
        };
      });
    }
  }

  function validateCatInput(inputData: inputData) {
    let isValid = true;
    console.log(inputData.name.value.length);
    if (inputData.name.value.length <= 0) {
      updateInputDataErrors("name", false, "please enter a name");
      isValid = false;
    } else {
      updateInputDataErrors("name", true);
    }
    if (inputData.species.value.length <= 0) {
      updateInputDataErrors("species", false, "please enter a species");
      isValid = false;
    } else {
      updateInputDataErrors("species", true);
    }
    if (inputData.favFoods.value.length <= 0) {
      updateInputDataErrors(
        "favFoods",
        false,
        "please enter at least one favourite food"
      );
      isValid = false;
    } else {
      updateInputDataErrors("favFoods", true);
    }
    if (inputData.birthYear.value.length !== 4) {
      updateInputDataErrors(
        "birthYear",
        false,
        "birth year must be four digits"
      );
      isValid = false;
    } else if (Number(inputData.birthYear.value) > new Date().getFullYear()) {
      updateInputDataErrors(
        "birthYear",
        false,
        "birth year cannot be in the future"
      );
      isValid = false;
    } else {
      updateInputDataErrors("birthYear", true);
    }
    if (!isValid) {
      return false;
    }
    return true;
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputData((currentData) => {
      return {
        ...currentData,
        [event.target.id]: {
          ...currentData[event.target.id as keyof inputData],
          value: event.target.value,
        },
      };
    });
  }

  function handleSubmitCat(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (validateCatInput(inputData)) {
      addCat();
      setInputData(DEFAULT_INPUT_DATA);
    }
  }

  function addCat() {
    const newCat: Cat = {
      name: inputData.name.value,
      species: inputData.species.value,
      favFoods: inputData.favFoods.value.split(","),
      birthYear: Number(inputData.birthYear.value),
      id: uuidv4(),
    };
    setCats((currentCats) => [...currentCats, newCat]);
  }

  return (
    <div className="add-pet__container">
      <h2 className="add-pet__title">Add a Cat</h2>
      <form className="add-pet__form">
        <AddPetFormInput
          label={"Name"}
          type={"text"}
          name={"name"}
          id={"name"}
          value={inputData.name.value}
          onChange={handleChange}
          validationError={inputData.name.error}
        />
        <AddPetFormInput
          label={"Species"}
          type={"text"}
          name={"species"}
          id={"species"}
          value={inputData.species.value}
          onChange={handleChange}
          validationError={inputData.species.error}
        />
        <AddPetFormInput
          label={"Favourite Foods"}
          type={"text"}
          name={"favFoods"}
          id={"favFoods"}
          value={inputData.favFoods.value}
          onChange={handleChange}
          validationError={inputData.favFoods.error}
        />
        <AddPetFormInput
          label={"Birth Year"}
          type={"number"}
          name={"birthYear"}
          id={"birthYear"}
          value={inputData.birthYear.value}
          onChange={handleChange}
          validationError={inputData.birthYear.error}
        />
        <button className="add-pet__button" onClick={handleSubmitCat}>
          Add a Cat
        </button>
      </form>
    </div>
  );
};

export default AddPetForm;
