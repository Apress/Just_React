console.log("Learning");

display();

function display() {
  const what = getContent();
  console.log(what);
}


function getContent() {
  setTimeout(() => {
    return "React";
  }, 2000);
}
