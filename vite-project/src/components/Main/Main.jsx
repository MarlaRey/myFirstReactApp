import { Greeting } from "../Greeting/Greeting"
import {List} from "../List/List";

const myFavoriteFoods = ['Pizza', 'Sushi', 'Chocolate Cake', 'Burger', 'Pasta'];

export const Main = () => {
  

  return (
    <main>
      <Greeting greeting="Velkommen her" name="Dorte" />
      <h2>Kan jeg byde på noget</h2>
      <List data={myFavoriteFoods}></List>
    </main>
  );
};