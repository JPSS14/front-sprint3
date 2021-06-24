import Breadcrumbs from "../Breadcrumbs";
import Filters from "../Filters";
import Product from "../Product";
import './style.css';

export default function ProductsPage(){
    return(
        <main className="main">
            <Breadcrumbs/>
            <Filters/>
            <Product/>
        </main>
    );
}