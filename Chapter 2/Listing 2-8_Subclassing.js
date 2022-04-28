class Book {
  author = "Hari";
  publisher = "Apress";
  getPublisher = () => {
    console.log(this.publisher);
  };
}
class ReactBook extends Book {
  name = "Just React";
  publishedYear = 2022;
}
const reactBook = new ReactBook();
console.log(reactBook.name);
reactBook.getPublisher();
