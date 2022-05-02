import "./EnrolList.css";
import { DetailsList } from "@fluentui/react/lib/DetailsList";

// Columns for the detail list.
const columns = [
  {
    key: "fname",
    name: "First Name",
    fieldName: "fname",
    minWidth: 90,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "lname",
    name: "Last Name",
    fieldName: "lname",
    minWidth: 90,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "program",
    name: "Program",
    fieldName: "program",
    minWidth: 60,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "email",
    name: "Email",
    fieldName: "email",
    minWidth: 130,
    maxWidth: 200,
    isResizable: true,
  },
];

// Test tems
const let items = [];
for (let i = 1; i < 5; i++) {
  items.push({
    key: i,
    fname: "FirstName " + i,
    lname: "LastName " + i,
    program: "UG",
    email: "Email " + i,
  });
}

const EnrolList = () => {
  return (
    <div className="enrolList">
      <DetailsList items={items} columns={columns} />
    </div>
  );
};
export default EnrolList;
