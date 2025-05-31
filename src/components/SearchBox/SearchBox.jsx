import { useDispatch } from "react-redux"
import styles from "./SearchBox.module.css"
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
    const dispatch = useDispatch();
    const handleChange = (e) => dispatch(changeFilter(e.target.value.toLowerCase()))

    return <div className={styles.searchBox}>
        <label htmlFor="search">Find contacts by name</label>
        <input id="search" type="search" onChange={handleChange} />
    </div>
}

export default SearchBox;