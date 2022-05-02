import "./EnrolList.css";
import { DetailsList } from "@fluentui/react/lib/DetailsList";
import { useEffect } from "react";
// Columns for the detail list.
const columns = [
  {
    key: "edit",
    name: "Edit",
    fieldName: "edit",
    minWidth: 30,
    maxWidth: 200,
    isResizable: true,
  },
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
  {
    key: "delete",
    name: "Delete",
    fieldName: "delete",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  },
];

// Test tems
let items = [];

const EnrolList = (props) => {
  useEffect(() => {
    // Execute deletion on the selected item.
    if (props.action === "delete") {
      // filter the selected item
      const deleteItem = items.filter(
        (item) => item.key === props.selectedItem
      )[0];
      // Remove from the list
      items = items.filter((item) => item !== deleteItem);
      // update seats
      props.restoreSeats(deleteItem.program);
    }
    // Update the list items with the student details after rendering
    const curItemKey = props.studentDetails.key;
    if (curItemKey) {
      const i = items.findIndex((item) => item.key === curItemKey);
      if (i > -1) {
        items = items.map((item) =>
          item.key === curItemKey ? props.studentDetails : item
        );
      } else {
        items = [...items, props.studentDetails];
      }
      props.setStudentDetails({});
    }
  }, [props]);

  return (
    <div className="enrolList">
      <DetailsList items={items} columns={columns} />
    </div>
  );
};
export default EnrolList;
