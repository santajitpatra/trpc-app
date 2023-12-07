import { client } from "./client";

async function main() {
  // const result = await client.getUser.query()
  // console.log(result);
  const resultCreate = await client.createUser.mutate("trryfgggg")

  console.log(resultCreate)
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
