import FoodCard from "./FoodCard";

function Menu({ foods = [], addToCart }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "30px",
        marginTop: "60px",
        paddingBottom: "50px",
      }}
    >
      {foods?.length > 0 ? (
        foods?.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
            addToCart={addToCart}
          />
        ))
      ) : (
        <h2
          style={{
            color: "#aaa",
            marginTop: "40px",
          }}
        >
          No food found 🍽️
        </h2>
      )}
    </div>
  );
}

export default Menu;