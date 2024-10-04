import About from "../../components/about/About";
import Banner from "../../components/banner/Banner";
import Brand from "../../components/brand/Brand";
import Products from "../../components/products/Products";
import Add from "../../components/add/Add"
import Footer from "../../components/foooter/Fooater";
const Home = () => {
    return (
        <div>
            <Banner />
            <Products/>
            <Brand/>
            <About/>
            <Add/>
            <Footer/>
        </div>
    )
}

export default Home