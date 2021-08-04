import React from "react";



export default function Profile() {
    return (
        <form>
            <input id="fName" name="fName" placeholder="First Name" />
            <input id="lName" name="lName" placeholder="Last Name"/>
            <input type="number" id="userAge" name="userAge" min="13" max="100"/>
            <input type="checkbox" id="dietPref" value="Low Sodium"/>
            <input type="checkbox" id="dietPref" value="Low Fat"/>
            <input type="checkbox" id="dietPref" value="Low Sugar"/>
            <input type="checkbox" id="dietPref" value="Vegan"/>
            <input type="checkbox" id="dietPref" value="Vegetarian"/>
            <input type="checkbox" id="dietPref" value="Low Carb"/>
            <input type="checkbox" id="dietPref" value="High protein"/>
            <input type="checkbox" id="dietPref" value="Pescetarian"/>
            <input type="checkbox" id="dietPref" value="Low Cholesterol"/>
        </form>

    );
}