import CategoryButton from "./CategoryButton";
import styles from "./Category.module.css";

const themes = [
  { name: 'Utsikt', id: 1 },
  { name: 'Mysigt', id: 2 },
  { name: 'Lugnt', id: 3 },
  { name: 'Skog', id: 4 },
  { name: 'Vatten', id: 5 }
];
function CategoryBox() {
    return (
        <>
        <div className={styles.outerBox}>
            <div className={styles.headerBox}>
                <h2>Skräddarsy din promenad</h2>
                <p>Välj en eller tryck generera för att slumpa fram</p>
            </div>
            <div className={styles.box}>
                {
                themes.map(theme => 
                    <CategoryButton themeName={theme.name} key={theme.id}/>
                )
                }
            </div>
            <button>Generera</button>
        </div>

        </>
    )
}

export default CategoryBox;
