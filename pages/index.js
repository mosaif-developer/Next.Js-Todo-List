import { Container } from "@chakra-ui/react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import Auth from "../components/Auth";
export default function Home() {
return (
<Container maxW="7xl">
<AddTodo />
<Auth />
<TodoList />
</Container>
);
}