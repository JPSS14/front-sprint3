import { useProducts } from '../../contexts/ProductsContext';
import './style.css';

export default function Product() {

    const {products} = useProducts();

    return (
        <section className="main__products products">
            <div className="products__row">
                <ol className="products__list">
                    {products.map((item, key) => (
                        <li className="products__card card" key={key}>
                        <div className="card">
                            <img className="card__img" src={item.image} alt="teste"/>
                            <p className="card__description">
                                {item.name}
                            </p>
                            <p className="card__price">
                                R$ {item.price}
                            </p>
                        </div>
                    </li>
                    ))}        
                </ol>
            </div>
        </section>
    );
}