import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import Elevation, {trees, Wildlife} from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  console.log(trees)
  Wildlife()
  Elevation()
  return (
    <div>
      <MesaVerde />
    </div>
  )
}

export default ColoradoStateParks