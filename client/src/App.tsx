import { client, wsClient } from "./client";


document.addEventListener("click",() => {
  client.users.update.mutate({
    userId:"1",name:"santa"
  })
})
async function main() {
  // const result = await client.getUserOld.query();
  // console.log(result);

  // const resultCreate = await client.createUser.mutate("hi client");
  // console.log(resultCreate);

  // const resultUser = await client.users.update.mutate({
  //   userId: "0055",
  //   name: "santa",
  // });
  // console.log(resultUser);

  // const resultAuth = await client.secretData.query();
  // console.log(resultAuth);

   client.users.onUpdate.subscribe(undefined, {
    onData: (id) => {
      console.log("updated", id);
    },
  });
  wsClient.close()
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
