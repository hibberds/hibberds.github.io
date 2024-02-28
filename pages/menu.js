import styles from "../styles/Menu.module.css";

const renderPrice = (price) => `£${price.toFixed(2)}`;

function MenuItem({ name, description, price }) {
  return (
    <div className={styles.dish}>
      <div className={styles.dishName}>{name}</div>
      {price && <div className={styles.dishPrice}>{renderPrice(price)}</div>}
      <div className={styles.dishDescription}>{description}</div>
    </div>
  );
}

const appetisers = [
  {
    name: "Lobster Thermidor",
    description: "Here's a description for an amazingly delicious dish",
    // price: 13.5,
  },
  {
    name: "Cheese Toastie",
    description: "Here's a description for an amazingly delicious dish",
    price: 6.5,
  },
];

const mains = [
  {
    name: "Lobster Thermidor",
    description: "Here's a description for an amazingly delicious dish",
    price: 13.5,
  },
  {
    name: "Cheese Toastie",
    description: "Here's a description for an amazingly delicious dish",
    price: 6.5,
  },
];

const renderDishes = (dishes) => dishes.map((dish) => <MenuItem {...dish} />);

const Flourish = () => (
  <img
    src="/images/flourish.svg"
    alt="Mains"
    className={styles.logo}
    width="100px"
  />
);

function Menu() {
  return (
    <div className={styles["menu-container"]}>
      <div className={styles.menu}>
        <h1 className={styles.header}>Menu</h1>
        <div className={styles.menuSection}>
          <Flourish />
          <h2 className={styles.header}>APPETISERS</h2>
          {renderDishes(appetisers)}
        </div>
        <div className={styles.menuSection}>
          <Flourish />
          <h2 className={styles.header}>MAINS</h2>
          {renderDishes(mains)}
        </div>
      </div>
    </div>
  );
}

export default Menu;
