
import { Greeting } from '../Greeting/Greeting';
import { List } from '../List/List';
import { Image } from '../Image/Image';
import { myDishes } from '../Image/Image';

const myFavoriteFoods = ['Pizza', 'Sushi', 'Chocolate Cake', 'Burger', 'Pasta'];

export const Main = () => {
  return (
    <main>
      <Greeting greeting="Velkommen her" name="Dorte" />
      <h2>Her har vi både</h2>
      <List data={myFavoriteFoods} />
      <Image data={myDishes} />
    </main>
  );
};
