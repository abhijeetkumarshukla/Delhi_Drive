import {
    Box,
    Flex,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    Button,
    Link,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react';
  import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
  import React from 'react';
  
  const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  
    return (
      <Box bg="gray.800" color="white" px={8}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Text fontSize="xl" fontWeight="bold">
          𝐀ᑲɦ𝗂𝗃𝖾𝖾𝗍 𝐒ɦυ𝗄ᥣα
          </Text>
  
          {/* Full-screen navigation (hidden on small screens) */}
          <Flex alignItems="center" display={{ base: 'none', md: 'flex' }}>
            <Link href="#" mx={4}>
            𝐇ⱺꭑ𝖾
            </Link>
            <Link href="#" mx={4}>
            𝐀ᑲⱺυ𝗍
            </Link>
  
            {/* Mega Menu */}
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                bg="gray.800"
                _hover={{ bg: 'gray.700' }}
              >
                𝐒𝖾𝗋𝗏𝗂𝖼𝖾𝗌
              </MenuButton>
              <MenuList bg="white" color="gray.800" p={4} borderRadius="md" shadow="lg">
                <Flex>
                  <Box p={4}>
                    <MenuGroup title="Web Development">
                      <MenuItem>Frontend</MenuItem>
                      <MenuItem>Backend</MenuItem>
                      <MenuItem>Full Stack</MenuItem>
                    </MenuGroup>
                  </Box>
                  <Box p={4}>
                    <MenuGroup title="Design">
                      <MenuItem>UI Design</MenuItem>
                      <MenuItem>UX Design</MenuItem>
                      <MenuItem>Graphic Design</MenuItem>
                    </MenuGroup>
                  </Box>
                  <Box p={4}>
                    <MenuGroup title="Marketing">
                      <MenuItem>SEO</MenuItem>
                      <MenuItem>Content Marketing</MenuItem>
                      <MenuItem>Social Media</MenuItem>
                    </MenuGroup>
                  </Box>
                </Flex>
              </MenuList>
            </Menu>
  
            <Link href="#" mx={4}>
            𝐂ⱺ𐓣𝗍α𝖼𝗍
            </Link>
          </Flex>
  
          {/* Hamburger Menu for small screens */}
          <IconButton
            ref={btnRef}
            icon={<HamburgerIcon />}
            variant="outline"
            color="white"
            onClick={onOpen}
            display={{ base: 'flex', md: 'none' }}
          />
  
          {/* Drawer for small screens */}
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
  
              <DrawerBody>
                {/* Drawer content (same as the right-side nav links and mega menu) */}
                <Link href="#" display="block" py={2}>
                𝐇ⱺꭑ𝖾
                </Link>
                <Link href="#" display="block" py={2}>
                𝐀ᑲⱺυ𝗍
                </Link>
  
                {/* Services - Mega Menu */}
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    w="100%"
                    bg="gray.100"
                    mb={4}
                  >
                     𝐒𝖾𝗋𝗏𝗂𝖼𝖾𝗌
                  </MenuButton>
                  <MenuList bg="white" color="gray.800" p={4} borderRadius="md">
                    <Box p={4}>
                      <MenuGroup title="Web Development">
                        <MenuItem>Frontend</MenuItem>
                        <MenuItem>Backend</MenuItem>
                        <MenuItem>Full Stack</MenuItem>
                      </MenuGroup>
                    </Box>
                    <Box p={4}>
                      <MenuGroup title="Design">
                        <MenuItem>UI Design</MenuItem>
                        <MenuItem>UX Design</MenuItem>
                        <MenuItem>Graphic Design</MenuItem>
                      </MenuGroup>
                    </Box>
                    <Box p={4}>
                      <MenuGroup title="Marketing">
                        <MenuItem>SEO</MenuItem>
                        <MenuItem>Content Marketing</MenuItem>
                        <MenuItem>Social Media</MenuItem>
                      </MenuGroup>
                    </Box>
                  </MenuList>
                </Menu>
  
                <Link href="#" display="block" py={2}>
                𝐂ⱺ𐓣𝗍α𝖼𝗍
                </Link>
              </DrawerBody>
  
              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>
    );
  };
  
  export default Navbar;
  