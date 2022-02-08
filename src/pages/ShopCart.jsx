import Breadcrumb from '../components/Breadcrumb';
import BookTable from '../components/shopCart/BookTable';
import BookTotal from '../components/shopCart/BookTotal';

function ShopCart() {
    
    return (
        <>
            <div className="containers">
                <Breadcrumb currentPage={'Корзина'} />
                <h1 className="title mt-4 mb-4">Корзина</h1>
                <div className="content-container">
                    <BookTable />
                    <BookTotal btn={'Оформить заказ'} link={'/order'} />
                </div>
            </div>
        </>
    )
}

export default ShopCart