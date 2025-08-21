import styles from "./Category.module.css";

function CategoryButton({ themeName, imgUrl,onClick, ...props }) {
  return (
    <>
      <button className={styles.categoryWrapper} onClick={onClick} {...props}>
        <img
          src={imgUrl}
          alt=""
        />
        <span>{themeName}</span>
      </button>
    </>
  );
}

export default CategoryButton;
