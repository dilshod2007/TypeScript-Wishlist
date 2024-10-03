import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
// import ProductLikes from "../../routes/like/ProductLikes";

const Home = () => {
    return (
        <div>
            <Banner />
            <Products/>
            {/* <ProductLikes /> */}
        </div>
    )
}

export default Home