import FilterItem from "../FilterItem";
import './style.css';

export default function Filters() {
    return (
        <section className="main__filters filters">
            <ul className="filters__list">
                <FilterItem/>
            </ul>
        </section>
    );
}