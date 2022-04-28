console.log("Learning");
display();
async function display() {
  const what = await getContent();
  console.log(what);
}
function getContent() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("React"), 1000);
  });
}
