// Sample data
let users = [
  { id: 1, name: "John Doe", role: "Student" },
  { id: 2, name: "Jane Smith", role: "Teacher" },
];

let courses = [
  { id: 1, name: "Web Development 101", teacher: "Jane Smith" },
  { id: 2, name: "Mathematics", teacher: "John Doe" },
];

// Function to update user and course counts
function updateCounts() {
  document.getElementById("total-students").innerText = users.filter(user => user.role === 'Student').length;
  document.getElementById("total-teachers").innerText = users.filter(user => user.role === 'Teacher').length;
  document.getElementById("active-courses").innerText = courses.length;
}

// Function to render users
function renderUsers() {
  const userTableBody = document.getElementById("user-table-body");
  userTableBody.innerHTML = ""; // Clear previous rows

  users.forEach(user => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.role}</td>
          <td>
              <button class="btn" onclick="editUser(${user.id})">Edit</button>
              <button class="btn" onclick="deleteUser(${user.id})">Delete</button>
          </td>
      `;
      userTableBody.appendChild(row);
  });
}

// Function to render courses
function renderCourses() {
  const courseTableBody = document.getElementById("course-table-body");
  courseTableBody.innerHTML = ""; // Clear previous rows

  courses.forEach(course => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${course.id}</td>
          <td>${course.name}</td>
          <td>${course.teacher}</td>
          <td>
              <button class="btn" onclick="editCourse(${course.id})">Edit</button>
              <button class="btn" onclick="deleteCourse(${course.id})">Delete</button>
          </td>
      `;
      courseTableBody.appendChild(row);
  });
}

// Function to add user
document.getElementById("add-user-btn").addEventListener("click", function() {
  const userName = prompt("Enter user name:");
  const userRole = prompt("Enter user role (Student/Teacher):");
  const newUserId = users.length + 1;
  users.push({ id: newUserId, name: userName, role: userRole });
  updateCounts();
  renderUsers();
});

// Function to add course
document.getElementById("add-course-btn").addEventListener("click", function() {
  const courseName = prompt("Enter course name:");
  const assignedTeacher = prompt("Enter assigned teacher's name:");
  const newCourseId = courses.length + 1;
  courses.push({ id: newCourseId, name: courseName, teacher: assignedTeacher });
  renderCourses();
});

// Function to edit user
function editUser(userId) {
  const user = users.find(u => u.id === userId);
  const newName = prompt("Edit user name:", user.name);
  const newRole = prompt("Edit user role (Student/Teacher):", user.role);
  if (newName && newRole) {
      user.name = newName;
      user.role = newRole;
      renderUsers();
  }
}

// Function to edit course
function editCourse(courseId) {
  const course = courses.find(c => c.id === courseId);
  const newName = prompt("Edit course name:", course.name);
  const newTeacher = prompt("Edit assigned teacher's name:", course.teacher);
  if (newName && newTeacher) {
      course.name = newName;
      course.teacher = newTeacher;
      renderCourses();
  }
}

// Function to delete user
function deleteUser(userId) {
  users = users.filter(user => user.id !== userId);
  updateCounts();
  renderUsers();
}

// Function to delete course
function deleteCourse(courseId) {
  courses = courses.filter(course => course.id !== courseId);
  renderCourses();
}

// Function to generate report
document.getElementById("generate-report-btn").addEventListener("click", function() {
  const reportDisplay = document.getElementById("report-display");
  reportDisplay.innerHTML = `
      <h3>Report</h3>
      <p>Total Students: ${users.filter(user => user.role === 'Student').length}</p>
      <p>Total Teachers: ${users.filter(user => user.role === 'Teacher').length}</p>
      <p>Active Courses: ${courses.length}</p>
  `;
});

// Initial rendering
updateCounts();
renderUsers();
renderCourses();
