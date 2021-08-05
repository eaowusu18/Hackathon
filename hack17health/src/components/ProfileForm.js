import React, {useState} from "react";
import '../css/App.css'
import {FormGroup, FormLabel, Input, FormControlLabel, Checkbox} from '@material-ui/core';



export default function Profile() {

    const useLoginInput = (initialValue) => {
        const [value, setValue] = useState(initialValue);
    
        const handleChange = e => {
            setValue(e.target.value);
        }
        return { value, onChange: handleChange }
    }

    const [checkedState, setCheckedState] = useState(
        new Array(8).fill(false)
    );

  

  
    
    const fName = useLoginInput('');
    const lName = useLoginInput('');
    const userAge = useLoginInput('');
    
    const HandleLogin = () => {
        console.log(fName);
        console.log(lName);
        
    }

    return (
        <form>
            <FormLabel for="fName">Enter First Name</FormLabel>
            <Input id="fName" {...fName}  name="fName" placeholder="First Name" />
            <br />
            <FormLabel for="lName">Enter Last Name</FormLabel>
            <Input id="lName" {...lName} name="lName" placeholder="Last Name"/>
            <br />
            <FormLabel for="userAge">Enter Age</FormLabel>
            <Input type="number" id="userAge" {...userAge} name="userAge" min="13" max="100"/>
            <br />
            <FormControlLabel
        control={
          <Checkbox
            name="Low Fat"
            color="primary"
          />
        }
        label="Low Fat"
      />
      <FormControlLabel
        control={
          <Checkbox
            name="Low Fat"
            color="primary"
          />
        }
        label="Low Sugar"
      /><FormControlLabel
      control={
        <Checkbox
          name="Low Fat"
          color="primary"
        />
      }
      label="Low Carb"
    /><FormControlLabel
    control={
      <Checkbox
        name="Low Fat"
        color="primary"
      />
    }
    label="High Protein"
  /><FormControlLabel
  control={
    <Checkbox
      name="Low Fat"
      color="primary"
    />
  }
  label="Vegetarian"
/><FormControlLabel
        control={
          <Checkbox
            name="Low Fat"
            color="primary"
          />
        }
        label="Vegan"
      />
      <a href="C:\Users\eaowu\Hackathon\hack17health\src\meal.html">
      <button>Meal</button>
      </a>
        </form>

    );
}