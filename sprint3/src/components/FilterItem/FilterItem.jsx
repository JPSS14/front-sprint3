import { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductsContext';
import './style.css';

export default function FilterItem() {

    const {filters, findProducts} = useProducts();

    useEffect(() => {
        findProducts();
    },[])

    return (
        <>
        {filters.map((item, key) => (
            <li className="filters__item" key={key}>
                <span className="filters__label">{item.label}</span>
                <img className="filters__img" src="assets/filter.svg" alt=""/>
            </li>
        ))}
            
        </>
    );
}