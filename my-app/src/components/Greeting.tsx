/* ---------------- CODE : 01 => EN JSX ---------------- */

/* 
import React from 'react'; 
const Greeting = ({ name }) => { 
return <div>Hello, {name}!</div>;
 };
 export default Greeting;
 */


/* ---------------- CODE : 01 => EN TSX ---------------- */


/*
    Création d'un type personnalisé pour l'argument passé en paramètre du composant 
        -> L'argument passé en paramètre du composant un un props
        -> Son type : type d'objet dont le "name" est une chaîne de caractères
        -> On nomme le type de l'argument en lui donnant un nom précédé du mot clé "type" et en lui assignant un objet 
        -> On type la valeur de retour de la fonction, ici c'est "JSX.Element" car la fonction retourne un composant
*/
type nameProps = {
  name: string; // On type le prop "name" comme "string"
};

const Greeting = ({ name }: nameProps): JSX.Element => {
  return <div>Hello, {name}</div>;
};

export default Greeting;
