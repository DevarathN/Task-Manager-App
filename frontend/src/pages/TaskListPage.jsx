import React, { useEffect, useState } from "react";
import { deleteTask, fetchTasks } from "../services/api";
import { CiEdit } from "react-icons/ci";
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { GoHourglass } from "react-icons/go";

import TaskForm from "../components/TaskForm";
import "./TaskListPage.css";
export default function TaskListPage() {
  const [tasks, setTasks] = useState([]);
  const [taskFormOpen, setTaskFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [filteredStatus, setFilteredStatus] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 4;
  let numberOfPages=Math.ceil(tasks.length/tasksPerPage);
  
  const loadTasks = async () => {
    const res = await fetchTasks();
    setTasks(res.data);
  };
  useEffect(() => {
    loadTasks();
  }, []);
  useEffect(() => {
    let updatedTasks = [...tasks];
    if (filteredStatus !== "All") {
      updatedTasks = tasks.filter((task) => task.status === filteredStatus);

      setFilteredTasks(updatedTasks);
    } else {
      setFilteredTasks(tasks);
    }

    const lastTaskOfPage = currentPage * tasksPerPage;
    const firstTaskOfPage = lastTaskOfPage - tasksPerPage;
    let paginatedTasks = updatedTasks.slice(firstTaskOfPage, lastTaskOfPage);
    setFilteredTasks(paginatedTasks);
  }, [tasks, filteredStatus, currentPage]);

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };
  const handleEdit = async (task) => {
    setEditingTask(task);
    setTaskFormOpen(true);
  };
  return (
    <div style={{ padding: "2rem" }} className="task-list">
      <h1>Task Manager</h1>
      <button
        onClick={() => {
          if (taskFormOpen) {
            setEditingTask(null);
          }
          setTaskFormOpen((prev) => !prev);
        }}
        className="add-task"
      >
        {taskFormOpen ? "Close Form" : "Add Task"}{" "}
      </button>
      {taskFormOpen && (
        <TaskForm
          onTaskAdded={loadTasks}
          setTaskFormOpen={setTaskFormOpen}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
        />
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
          alignItems: "center",
        }}
      >
        <h2>Tasks</h2>
        <div className="custom-select">
          <select
            onChange={(e) => {
              setFilteredStatus(e.target.value);
            }}
            className="filter-status"
          >
            <option value="All">Filter By Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td
                className={`status${
                  (task.status === "Pending" && " pending") ||
                  (task.status === "In Progress" && " in-progress") ||
                  (task.status === "Completed" && " completed")
                }`}
              >
                {task.status}
                {(task.status === "In Progress" && (
                  <AiOutlineLoading3Quarters />
                )) ||
                  (task.status === "Pending" && <GoHourglass />) ||
                  (task.status === "Completed" && <BsCheck2Circle />)}
              </td>{" "}
              <td>
                <button onClick={() => handleEdit(task)} className="edit-btn">
                  <i>
                    <CiEdit />
                  </i>{" "}
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="delete-btn"
                >
                  <i>
                    <IoTrashOutline />
                  </i>
                  <span>Delete</span>
                </button>
              </td>
            </tr>
          ))}{" "}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => {
            setCurrentPage((page) => page - 1);
          }}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button>{currentPage}</button>
        <button
          onClick={() => {
            setCurrentPage((page) => page + 1);
          }}
          disabled={currentPage === numberOfPages || numberOfPages===0}
        >
          Next
        </button>
      </div>
    </div>
  );
}


