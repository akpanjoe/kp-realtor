import DefaultLayout from "@/features/Layout/DefaultLayout/DefaultLayout";
import ContactForm from "@/features/common/modules/ContactForm/ContactForm";
import TextContentBox from "@/features/common/modules/TextContentBox/TextContentBox";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

const ContactPage = () => {
    return (
        <DefaultLayout>
            <Box backgroundColor="#f7f8f9" paddingY="3rem">
                <Grid templateColumns="repeat(6, 1fr)" gap="5" maxWidth="1280px" margin="0 auto">
                    <GridItem colSpan={{base: 6, sm:4}}>
                        <TextContentBox title="Contact Us at:">
                         <ContactForm />
                        </TextContentBox>
                    </GridItem>
                    <GridItem colSpan={{base:6, sm:2}}>
                        <TextContentBox title="For Inquiries Contact:">
                        <Text fontWeight="light" color="gray.600" fontSize="1rem" marginBottom="1rem">
                            Akpan Joseph<br />
                            Boss Dev Manager <br />
                            No.2 Abak RD, Uyo, Akwa-Ibom. 
                        </Text>
                        <Text fontWeight="light" color="gray.600" fontSize="1rem" marginBottom="1rem">
                            Kalapanzy<br />
                            Manager Kp-Law<br />
                            No.11 Oron RD, Uyo, Akwa-Ibom. 
                        </Text>
                        </TextContentBox>
                    </GridItem>
                </Grid>
            </Box>
        </DefaultLayout>
    );
}
 
export default ContactPage;