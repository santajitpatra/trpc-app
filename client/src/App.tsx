import { client } from "./client";

async function main() {
  const result = await client.getUserOld.query();
  console.log(result);

  const resultCreate = await client.createUser.mutate("hi client");
  console.log(resultCreate);

  const resultUser = await client.users.get.query({userId: "005"})
  console.log(resultUser);
}
main();

function App() {
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default App;
