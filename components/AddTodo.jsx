import React from "react";
import {
  Box,
  Input,
  Button,
  Textarea,
  Stack,
  useToast,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import { addTodo } from "../api/todo";
const AddTodo = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const toast = useToast();

  const { user, isLoggedIn } = useAuth();

  const handleTodoCreate = async () => {
    if (!isLoggedIn) {
      toast({
        title: "You must be logged in to create a todo",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      title,
      description,
      userId: user.uid,
    };
    await addTodo(todo);

    setTitle("");
    setDescription("");

    toast({ title: "Todo created successfully", status: "success" });
  };

  return (
    <Box w="40%" margin={"0 auto"} display="block" mt={100}>
      <Stack direction="column">
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button
          onClick={() => handleTodoCreate()}
          disabled={title.length < 1 || description.length < 1}
          variantColor="teal"
          variant="solid"
        >
          Add Your Todos
        </Button>
      </Stack>
    </Box>
  );
};

export default AddTodo;