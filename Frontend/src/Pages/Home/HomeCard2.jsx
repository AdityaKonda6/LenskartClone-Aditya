import React from "react";
import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import Slider from "./Slider";
/*adityakonda06... link:"https://github.com/AdityaKonda6"*/
/*adityakonda06... link:"https://github.com/AdityaKonda6"*/
const HomeCard2 = ({ type, src }) => {
  return (
    <Box justifyContent="left" w="95%" m="auto" mt="6" cursor="pointer">
      <Flex mt="7">
        <Box
          boxSize="sm"
          w={{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "50%",
            base: "none"
          }}
          cursor="pointer"
          pr={{ lg: "4", sm: "0", base: "0" }}
        >
          <Image
            src={src}
            boxSize="700px"
            h="200px"
            w={{
              xs: "80%",
              sm: "80%",
              md: "80%",
              lg: "100%",
              xl: "100%",
              base: "none"
            }}
          />
        </Box>
        <Spacer />
        <Box
          w={{ sm: "100%", md: "100%", lg: "100%", xl: "75%", base: "100%" }}
        >
          <Slider type={type} />
        </Box>
      </Flex>
    </Box>
  );
};
/*adityakonda06... link:"https://github.com/AdityaKonda6"*/
/*adityakonda06... link:"https://github.com/AdityaKonda6"*/
export default HomeCard2;
/*adityakonda06... link:"https://github.com/AdityaKonda6"*/
/*adityakonda06... link:"https://github.com/AdityaKonda6"*/