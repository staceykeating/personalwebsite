import React, { useState } from 'react';
import hamburger from '../src/hamburger.svg';
import CloseIcon from "@material-ui/icons/Close";
import './App.scss';

function Menu(props) {
  const [mode, setMode] = useState("EDIT");
  return (
    <div>
    {mode === "EDIT" && <div className="menu-section" onClick={() => setMode("SHOW")}>
    
        <h3 class="menu" >
    Menu
        </h3>
        <img src={hamburger}></img>
  
    </div>}
    {(mode === "SHOW") && (
        <>
          <h1 onClick={() => setMode("EDIT")}> Projects </h1>
        </>
      )}
      </div>
  );
    }

export default Menu; 


// import Menu from "./Menu";


//   return (
//     <div>
//       {mode === "EDIT" && <Menu onClick={() => setMode("SHOW")} />}
//       {(mode === "SHOW") && (
//         <>
//           <CloseIcon onClick={() => setMode("EDIT")} />
//         </>
//       )}

//     </div>
//   );
// }