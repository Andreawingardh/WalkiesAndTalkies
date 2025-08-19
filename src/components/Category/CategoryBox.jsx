import CategoryButton from "./CategoryButton";
import styles from "./Category.module.css";
function CategoryBox() {
    return (
        <div className={styles.box}>
            <CategoryButton themeName="Harmoni"/>
            <CategoryButton themeName="Lugn" />
            <CategoryButton themeName="Historia"/>
            <CategoryButton themeName="Utsikt"/>
        </div>
    )
}

export default CategoryBox;
