
import Footer from "../../common/modules/Footer/Footer";
import Navigation from "../../common/modules/Navigation/Navigation";

const  DefaultLayout = ({children}) => {
    return ( 
      <>
        <Navigation/>
        {children}
        <Footer/> 
      </>
    );
}
 
export default  DefaultLayout;