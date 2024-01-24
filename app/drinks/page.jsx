const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const Drinks = async () => {

  const data = await fetchDrinks();
  console.log(data);

  return (
    <div className="text-3xl font-bold">Drinks</div>
  )
}

export default Drinks ;