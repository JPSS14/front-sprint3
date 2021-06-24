import { useEffect } from "react";
import { useCategories } from "../../contexts/CategoriesContext";


export default function MenuItem() {

    // const { all, current } = useCategories();
    // const teste = current;
    // console.log(teste,"aqui");

    const { findCategories, all, current } = useCategories();

    useEffect(() => {
        findCategories();
    }, [])

    const teste = current;
    console.log(teste, "aqui");

    return (
        <>
            {all.map((item, key) => (
                <li className="menu__item" key={key}>
                    <a className="menu__link" href={item.link}>
                        {item.label}
                    </a>
                </li>
            ))}

        </>
    );
}