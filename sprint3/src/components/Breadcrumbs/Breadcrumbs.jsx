import BreadcrumbItem from "../BreadcrumbItem";
import './style.css';

export default function Breadcrumbs() {
    return (
        <section className="main__breadcrumbs breadcrumbs">
            <nav>
                <ol className="breadcrumbs__list">
                    <BreadcrumbItem/>
                </ol>
            </nav>
        </section>
    );
}