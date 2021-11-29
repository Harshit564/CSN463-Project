import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        <button type="submit"><SearchIcon /></button>
    </form>
);

export default SearchBar;