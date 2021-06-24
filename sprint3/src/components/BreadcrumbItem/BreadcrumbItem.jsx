import { useEffect } from 'react';
import { useCategories } from '../../contexts/CategoriesContext';
import './style.css';

export default function BreadcrumbItem() {

    const { current } = useCategories();

    console.log("ue",current);
    return (
        <>
            {current.map((item, key) => (
                <li className="breadcrumbs__item" key={key}>
                    <a className="breadcrumbs__link" href={item.link}>{item.name}</a>
                </li>
            ))}
        </>
    );
}