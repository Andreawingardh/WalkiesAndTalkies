import styles from "./Category.module.css";

function CategoryButton({ themeName, imgUrl,onClick, isSelected, props}) {
  return (
    <>
      <button className={`${styles.categoryWrapper} ${isSelected ? styles.selected : ""}`} onClick={onClick} {...props}>
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
