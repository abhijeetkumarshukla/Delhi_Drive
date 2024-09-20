import { useReducer } from "react";
import {
  SimpleGrid,
  Button,
  Input,
  FormControl,
  FormLabel,
  Box,
  Heading,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

const initialvalue = {
  username: "",
  email: "",
  password: "",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "Username":
      return { ...state, username: payload };
    case "Email":
      return { ...state, email: payload };
    case "Password":
      return { ...state, password: payload };
    default:
      return state;
  }
};

const SignUp = () => {
  const [credentials, dispatch] = useReducer(reducer, initialvalue);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("credentials", credentials);
  };

  return (
    <SimpleGrid placeItems="center" minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <Box
        p={8}
         maxWidth="900px"
        width={'400px'}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        bg={'#BBFF99'}
      
      >
        <Stack spacing={4}>
          <Heading textAlign="center" fontSize="2xl">
            Sign Up
          </Heading>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input
                 
                color={"white"}
                border={'1px solid black'}
                  type="text"
                  placeholder="Enter Username"
                  onChange={(e) =>
                    dispatch({ type: "Username", payload: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                color={"white"}
                border={'1px solid black'}
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) =>
                    dispatch({ type: "Email", payload: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                color={"white"}
                border={'1px solid black'}
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) =>
                    dispatch({ type: "Password", payload: e.target.value })
                  }
                />
              </FormControl>
              <Button
              bg={'#4DFFFF'}
              color={'black'}
              border={'1px solid black'}
              type="submit"
              colorScheme="#4D0033"
              width="70%"
              m={'auto'}
              mt={'5'}
              >
                Sign Up
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </SimpleGrid>
  );
};

export default SignUp;
