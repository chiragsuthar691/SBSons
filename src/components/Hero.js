import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation'




const responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];

const productTemplate = (product) => {
    return (
        <div className="border-1 surface-border border-round m-2 text-center py-3 hero-carousel">
            <div className="mb-3 rounded">
                <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name}
                    className="w-100 shadow-2 rounded" />
            </div>
            <div className='hero-carousel-data'>
                <h2 className="mb-1">{product.name}</h2>
                <h4 className="mt-0 mb-3">${product.price}</h4>
                <div className="mt-3">
                    <Button className="p-button p-button-rounded">Shop Now</Button>
                </div>
            </div>
        </div>
    );
};


const data = [{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
}, {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
}, {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
}, {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
}, {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
}, {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
}, {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
}, {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
}]



const Hero = () => {
    const pathname = usePathname()
    console.log('pathname', pathname)
    useEffect(() => { }, [])
    return (
        <main>
            <Carousel value={data} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                autoplayInterval={3000} itemTemplate={productTemplate} />
            <Button onClick={handleFacebookLogin}>FAcebook</Button>
        </main>
    );
}

export default Hero;

const handleFacebookLogin = () => {
    console.log('window.location.origin', window.location.origin)
    // Open a new window or redirect to the Facebook OAuth endpoint
    // window.location.href = `https://graph.facebook.com/oauth/authorize?client_id=${255284740175317}&redirect_uri=${window.location.origin}/auth/facebook/callback&response_type=token&scope=email`;
    // window.location.href = `https://graph.facebook.com/oauth/authorize?client_id=${255284740175317}&redirect_uri=${window.location.origin}/auth/facebook/callback&response_type=token&scope=email`;
    window.location.href = `http://www.facebook.com/dialog/oauth/?
    client_id=255284740175317
     &redirect_uri=${window.location.origin}/auth/facebook/callback
     &scope=email`;
    // window.location.href = `http://www.facebook.com/dialog/oauth/?
    // client_id=255284740175317
    //  &redirect_uri=${window.location.origin}
    //  &state=RANDOM_NUMBER_PREVENT_CSRF
    //  &scope=COMMA_SEPARATED_LIST_OF_PERMISSION_NAMES
    //  &response_type=RESPONSE_TYPE`;
}