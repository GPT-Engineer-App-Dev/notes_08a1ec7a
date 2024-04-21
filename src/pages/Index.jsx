import { useState } from "react";
import { Box, Button, Container, Flex, Heading, Input, Stack, Text, useColorMode, useColorModeValue, VStack, IconButton, CloseButton } from "@chakra-ui/react";
import { FaPlus, FaMoon, FaSun, FaTrash } from "react-icons/fa";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("black", "white");

  const addNote = () => {
    if (input.trim()) {
      setNotes([...notes, input]);
      setInput("");
    }
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <Container maxW="container.md" p={4}>
      <Flex justifyContent="space-between" mb={4}>
        <Heading mb={6}>Notes</Heading>
        <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} aria-label="Toggle color mode" />
      </Flex>
      <VStack spacing={4}>
        <Flex>
          <Input placeholder="Add a new note" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && addNote()} />
          <Button ml={2} onClick={addNote} leftIcon={<FaPlus />} colorScheme="blue">
            Add
          </Button>
        </Flex>
        <Stack spacing={4} w="full">
          {notes.map((note, index) => (
            <Box p={4} display="flex" justifyContent="space-between" alignItems="center" bg={bgColor} color={color} borderRadius="md" key={index}>
              <Text>{note}</Text>
              <CloseButton onClick={() => deleteNote(index)} />
            </Box>
          ))}
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;
