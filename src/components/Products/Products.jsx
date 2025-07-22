import React from 'react'
import Product_card from './Product_card';
function Products({ limit = null  }) {
    console.log(limit)
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        // Fetch products from an API or a local file
        fetch('./items.json')
            .then(response => response.json())
            .then(data => {
                setProducts(data)
                if (limit) {
                    const shuffled = [...data].sort(() => 0.5 - Math.random());
                    setProducts(shuffled.slice(0, limit));
                } else {
                    setProducts(data);
                }
            })
            .catch(error => console.error('Error fetching products:', error));
    }, [limit]);
    return (
        <div className='lg:w-3/4 mx-auto py-10'>
            <div className='text-center mb-10'>
                <p className='text-rose-500'>crispy, every bite taste</p>
                <h2 className='text-4xl font-semibold'>Popular Fast Foods</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                <h3>prr {products.length}</h3>
                {products.map((product, idx) => (
                    <Product_card key={idx} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Products