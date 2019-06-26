import React from "react";

const Main = props => (  
      <form onSubmit={props.weatherMethod}>
      <input type="text" name="city" placeholder="city"/>
      <button>Получить погоду</button>
    </form>
    );
  
export default Main 