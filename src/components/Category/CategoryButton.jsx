import styles from "./Category.module.css";

function CategoryButton({ themeName, onClick, ...props }) {
  return (
    <>
      <button className={styles.categoryWrapper} onClick={onClick} {...props}>
        <img
          src="https://media.istockphoto.com/id/2220123306/sv/foto/aerial-from-the-city-almere-in-the-netherlands.webp?s=1024x1024&w=is&k=20&c=lSfSJuwPssYcOiy0_a6NjxpJ3vCAC9NTYBg_0nWa_MA="
          alt=""
        />
        <span>{themeName}</span>
      </button>
    </>
  );
}

export default CategoryButton;
