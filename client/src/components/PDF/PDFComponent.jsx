import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "tomato",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  todo: {
    borderColor: "white",
    color: "tomato",
    fontSize: 20,
    borderWidth: 5,
    paddingTop: 10,
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "white",
    alignSelf: "flex-start",
  },
  todo_list: {
    borderColor: "white",
    color: "white",
    fontSize: 30,
    borderWidth: 5,
    paddingTop: 10,
    paddingLeft: 10,
    marginBottom: 60,
    marginTop: 20,
    borderRadius: 10,
  },
});

// Create Document Component
const PDFComponent = ({ todos, currentList }) => (
  <Document title="List of ToDo">
    <Page size="A4" style={styles.page}>
      {currentList === "active" && (
        <View style={styles.section}>
          <Text style={styles.todo_list}>TODO LIST</Text>
          {todos.map(
            (todo) =>
              !todo.completed && (
                <Text key={todo._id} style={styles.todo}>
                  {todo.task}
                </Text>
              )
          )}
        </View>
      )}
      {currentList === "completed" && (
        <View style={styles.section}>
          <Text style={styles.todo_list}>ARCHIVED</Text>
          {todos.map(
            (todo) =>
              todo.completed && (
                <Text key={todo._id} style={styles.todo}>
                  {todo.task}
                </Text>
              )
          )}
        </View>
      )}
    </Page>
  </Document>
);

export default PDFComponent;
