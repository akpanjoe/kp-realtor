import { Image, SimpleGrid } from "@chakra-ui/react";
import { partners } from "./partnersConsts";

const Partners = () => {
    return (
        <SimpleGrid column={partners.lenth} margin="0 auto" minChildWidth="150px">
           {partners.map((partner) => (
            <Image key={partner} src={partner} alignself="center" padding={{base:"2rem", sm:"3rem"}} filter="grayscale(1)" opacity="0.4"/>
           ))}
        </SimpleGrid>
    );
}
 
export default Partners;