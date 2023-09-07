import React, { useState } from "react";
import "./FilterComponent.css"; // Import the CSS file
import data from "./data"; // Import the data

function FilterComponent() {
  const [selectedOption, setSelectedOption] = useState("Option One"); // First option is initially active

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div>
        <button
          onClick={() => handleOptionClick("Option One")}
          className={selectedOption === "Option One" ? "active" : ""}
        >
          Option One
        </button>
        <button
          onClick={() => handleOptionClick("Option Two")}
          className={selectedOption === "Option Two" ? "active" : ""}
        >
          Option Two
        </button>
      </div>
      
      <div>
        {selectedOption === "Option One" ? (
          <div>
            <h2>Option One Data:</h2>
            {data.optionOne.map((item, index) => (
              <div key={index}>
                <img
                  src={item.image}
                  alt={`Option One Item ${index + 1}`}
                  className="image"
                />
                <p className="sentence">{item.sentence}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h2>Option Two Data:</h2>
            {data.optionTwo.map((item, index) => (
              <div key={index}>
                <img
                  src={item.image}
                  alt={`Option Two Item ${index + 1}`}
                  className="image"
                />
                <p className="sentence">{item.sentence}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterComponent;

// ==============================================================================================================
// import React, { useState } from "react";
// import "./FilterComponent.css"; // Import the CSS file

// function FilterComponent({ data }) {
//   const [selectedOption, setSelectedOption] = useState("Option One"); // First option is initially active

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   return (
//     <div>
//       <div>
//         <button
//           onClick={() => handleOptionClick("Option One")}
//           className={selectedOption === "Option One" ? "active" : ""}
//         >
//           Option One
//         </button>
//         <button
//           onClick={() => handleOptionClick("Option Two")}
//           className={selectedOption === "Option Two" ? "active" : ""}
//         >
//           Option Two
//         </button>
//       </div>
//       <div>
//         {selectedOption === "Option One" && (
//           <div>
//             <h2>Option One Data:</h2>
//             {/* Render the specific data for Option One */}
//             {data.optionOne.map((item, index) => (
//               <p key={index}>{item}</p>
//             ))}
//           </div>
//         )}
//         {selectedOption === "Option Two" && (
//           <div>
//             <h2>Option Two Data:</h2>
//             {/* Render the specific data for Option Two */}
//             {data.optionTwo.map((item, index) => (
//               <p key={index}>{item}</p>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default FilterComponent;

// import React, { useState } from "react";

// function FilterComponent({ data }) {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   const isOptionOneSelected = selectedOption === "Option One";
//   const isOptionTwoSelected = selectedOption === "Option Two";

//   return (
//     <div>
//       <div>
//         <button
//           onClick={() => handleOptionClick("Option One")}
//           className={isOptionOneSelected ? "active" : ""}
//         >
//           Option One
//         </button>
//         <button
//           onClick={() => handleOptionClick("Option Two")}
//           className={isOptionTwoSelected ? "active" : ""}
//         >
//           Option Two
//         </button>
//       </div>

//       <div>
//         {isOptionOneSelected && (
//           <div>
//             <h2>Option One Data:</h2>
//             {/* Render the specific data for Option One */}
//             {data.optionOne.map((item, index) => (
//               <p key={index}>{item}</p>
//             ))}
//           </div>
//         )}
//         {isOptionTwoSelected && (
//           <div>
//             <h2>Option Two Data:</h2>
//             {/* Render the specific data for Option Two */}
//             {data.optionTwo.map((item, index) => (
//               <p key={index}>{item}</p>
//             ))}
//           </div>
//         )}
//       </div>
//       <style>
//         {`
//           button.active {
//             background-color: lightblue;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default FilterComponent;

// ====================================================================================================================================

// import React, { useState } from "react";

// function FilterComponent({ data }) {
//   const [showOptionOne, setShowOptionOne] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const handleOptionOneClick = () => {
//     setShowOptionOne(true);
//   };

//   const handleOptionTwoClick = () => {
//     setShowOptionOne(false);
//   };

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div>
//       <div>
//         <button
//           onClick={handleOptionOneClick}
//           className={showOptionOne ? "active" : ""}
//         >
//           Option One
//         </button>
//         <button onClick={handleOptionTwoClick}>Option Two</button>
//       </div>
//       <div>
//         {showOptionOne ? (
//           <div>
//             <h2>Option One Data:</h2>
//             {data.optionOne.map((item, index) => (
//               <p key={index}>{item}</p>
//             ))}
//           </div>
//         ) : (
//           <div>
//             <h2>Option Two Data:</h2>
//             {data.optionTwo.map((item, index) => (
//               <p key={index}>{item}</p>
//             ))}
//           </div>
//         )}
//       </div>
//       <style>
//         {`
//           button.active {
//             background-color: ${isHovered ? "lightblue" : "lightgray"};
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default FilterComponent;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import React, { useState } from "react";
// import "./FilterComponent.css";

// function FilterComponent({ data }) {
//   const [showOptionOne, setShowOptionOne] = useState(false);

//   const handleOptionOneClick = () => {
//     setShowOptionOne(true);
//   };

//   const handleOptionTwoClick = () => {
//     setShowOptionOne(false);
//   };

//   return (
//     <div>
//       <div className="app__filtercomponent">
//         <button onClick={handleOptionOneClick}>Option One</button>
//         <button onClick={handleOptionTwoClick}>Option Two</button>
//       </div>
//       <div>
//         {showOptionOne ? (
//           // Render data for Option One
//           <div className="app__filtercomponent-items">
//             <h2>Option One Data:</h2>
//             {/* Render the specific data for Option One */}
//             {data.optionOne.map((item, index) => (
//               <p key={index}>{item}</p>
//             ))}
//           </div>
//         ) : (
//           // Render data for Option Two
//           <div>
//             <h2>Option Two Data:</h2>
//             {/* Render the specific data for Option Two */}
//             {data.optionTwo.map((item, index) => (
//               <p key={index}>{item}</p>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default FilterComponent;
