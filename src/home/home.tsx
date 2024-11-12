import React from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  // const navigate = useNavigate();

  // const handleMemberButton = () => {
  //     navigate('/grid-members'); // Navigate to /grid-members
  // };

  // const handleCharacterButton = () => {
  //     navigate('/characters'); // Navigate to /grid-members
  // };

  return (
    // <>
    // <button onClick={handleMemberButton}>Members</button>
    // <button onClick={handleCharacterButton}>Characters</button>
    // </>

    <>
      <h2>Hola desde Home</h2>
      <div>
        <Link to="/miembros">Members</Link>
      </div>
      <div>
        <Link to="/personajes">Characters</Link>
      </div>
    </>
  );
}; //need to do teh same for personajes
