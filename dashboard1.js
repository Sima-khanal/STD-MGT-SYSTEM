// Sample data for demonstration
const courses = [
  { id: 101, name: 'Mathematics', students: 30 },
  { id: 102, name: 'Science', students: 25 },
  { id: 103, name: 'History', students: 20 },
];

const assignments = [
  'Assignment 1: Algebra Homework',
  'Assignment 2: Science Project',
];

// Function to populate courses
function populateCourses() {
  const courseTableBody = document.getElementById('course-table-body');
  courses.forEach(course => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${course.id}</td>
          <td>${course.name}</td>
          <td>${course.students}</td>
      `;
      courseTableBody.appendChild(row);
  });
}

// Function to populate assignments
function populateAssignments() {
  const assignmentTableBody = document.getElementById('assignment-table-body');
  assignments.forEach(assignment => {
      const li = document.createElement('li');
      li.textContent = assignment;
      assignmentTableBody.appendChild(li);
  });
}

// Function to set the teacher's username
function setTeacherUsername() {
  const username = 'teacher_username'; // Change this as needed
  document.getElementById('teacher-username').textContent = username;
}

// Function to add an assignment
function addAssignment() {
  const newAssignment = prompt('Enter new assignment:');
  if (newAssignment) {
      assignments.push(newAssignment);
      populateAssignments();
  }
}

// Function to edit the profile (placeholder)
let currentUsername = "teacher_username";
let currentEmail = "teacher@email.com";

// Function to switch to edit mode with placeholders
function editProfile() {
    // Replace the span elements with input fields and add placeholders
    document.getElementById('teacher-username').outerHTML = `<input type="text" id="edit-username" value="${currentUsername}" placeholder="Enter your username">`;
    document.getElementById('teacher-email').outerHTML = `<input type="email" id="edit-email" value="${currentEmail}" placeholder="Enter your email address">`;

    // Show the Save button, hide the Edit button
    document.getElementById('edit-profile-btn').style.display = 'none';
    document.getElementById('save-profile-btn').style.display = 'inline-block';
}

// Function to save the updated profile
function saveProfile() {
    const newUsername = document.getElementById('edit-username').value;
    const newEmail = document.getElementById('edit-email').value;

    if (newUsername === "" || newEmail === "") {
        alert("Username and Email cannot be empty!");
        return;
    }

    currentUsername = newUsername;
    currentEmail = newEmail;

    // Replace the input fields with updated spans
    document.getElementById('edit-username').outerHTML = `<span id="teacher-username">${currentUsername}</span>`;
    document.getElementById('edit-email').outerHTML = `<span id="teacher-email">${currentEmail}</span>`;

    // Hide the Save button, show the Edit button
    document.getElementById('edit-profile-btn').style.display = 'inline-block';
    document.getElementById('save-profile-btn').style.display = 'none';

    console.log("Profile updated: ", { username: currentUsername, email: currentEmail });
}



// Initialize dashboard
function initDashboard() {
  populateCourses();
  populateAssignments();
  setTeacherUsername();
}

// Call the init function when the page loads
window.onload = initDashboard;


// Student records array
let studentRecords = [];
let editIndex = -1;

// Function to add or update a student record
function addOrUpdateRecord() {
    const studentName = document.getElementById('studentName').value;
    const attendance = document.getElementById('attendance').value;
    const report = document.getElementById('report').value;

    if (studentName === "" || attendance === "" || report === "") {
        alert("Please fill in all fields");
        return;
    }

    // Check if we are updating an existing record
    if (editIndex === -1) {
        // Create a new record
        const student = {
            name: studentName,
            attendance: attendance,
            report: report
        };
        studentRecords.push(student);
    } else {
        // Update existing record
        studentRecords[editIndex].name = studentName;
        studentRecords[editIndex].attendance = attendance;
        studentRecords[editIndex].report = report;
        editIndex = -1; // Reset after updating
    }

    // Clear form inputs
    clearForm();

    // Refresh the table
    displayRecords();
}

// Function to display student records in the table
function displayRecords() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = "";

    studentRecords.forEach((record, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${record.name}</td>
            <td>${record.attendance}</td>
            <td>${record.report}</td>
            <td>
                <button onclick="editRecord(${index})">Edit</button>
                <button onclick="deleteRecord(${index})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Function to edit a student record
function editRecord(index) {
    const record = studentRecords[index];
    document.getElementById('studentName').value = record.name;
    document.getElementById('attendance').value = record.attendance;
    document.getElementById('report').value = record.report;

    editIndex = index;
}

// Function to delete a student record
function deleteRecord(index) {
    studentRecords.splice(index, 1);
    displayRecords();
}

// Function to clear the form inputs
function clearForm() {
    document.getElementById('studentName').value = "";
    document.getElementById('attendance').value = "";
    document.getElementById('report').value = "";
}
