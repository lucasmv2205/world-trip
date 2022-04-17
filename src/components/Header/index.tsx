import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from "react-icons/ri"

export default function Header() {
  const { asPath } = useRouter()
  const notHomePage = asPath !== "/"

  return (
    <Flex
      bg="white"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        {notHomePage && (
          <Link href="/">
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[20,40]} justifySelf="start" />
            </a>
          </Link>
        )}
        <Image
          src="/Logo.svg"
          w={["81px", "184px"]}
          gridColumn="2"
          justifySelf="center"
          alt="avião voando sobre o nome da marca da empresa world trip"

        />
      </Grid>
    </Flex>
  );
}
