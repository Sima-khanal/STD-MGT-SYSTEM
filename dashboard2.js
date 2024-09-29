// Sample data for demonstration
const enrolledCourses = [
  { id: 201, name: 'Physics', status: 'In Progress' },
  { id: 202, name: 'Chemistry', status: 'Completed' },
  { id: 203, name: 'English', status: 'In Progress' },
];

const assignments = [
  'Assignment 1: Physics Homework',
  'Assignment 2: Chemistry Lab Report',
];

// Function to populate enrolled courses
function populateCourses() {
  const courseTableBody = document.getElementById('course-table-body');
  courseTableBody.innerHTML = ''; // Clear previous entries
  enrolledCourses.forEach(course => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${course.id}</td>
          <td>${course.name}</td>
          <td>${course.status}</td>
      `;
      courseTableBody.appendChild(row);
  });
}

// Function to populate assignments
function populateAssignments() {
  const assignmentList = document.getElementById('assignment-list');
  assignmentList.innerHTML = ''; // Clear previous entries
  assignments.forEach(assignment => {
      const li = document.createElement('li');
      li.textContent = assignment;
      assignmentList.appendChild(li);
  });
}

// Function to set the student's username
function setStudentUsername() {
  const username = 'student_username'; // Change this as needed
  document.getElementById('student-username').textContent = username;
}

// Function to submit an assignment
function submitAssignment() {
  const newAssignment = prompt('Submit your assignment details:');
  if (newAssignment) {
      assignments.push(newAssignment);
      populateAssignments();
  }
}

// Profile Editing Variables
let currentUsername = "student_username";
let currentEmail = "student@email.com";

// Function to switch to edit mode with placeholders
function editProfile() {
    // Replace the span elements with input fields and add placeholders
    document.getElementById('student-username').outerHTML = `<input type="text" id="edit-username" value="${currentUsername}" placeholder="Enter your username">`;
    document.getElementById('student-email').outerHTML = `<input type="email" id="edit-email" value="${currentEmail}" placeholder="Enter your email address">`;

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
    document.getElementById('edit-username').outerHTML = `<span id="student-username">${currentUsername}</span>`;
    document.getElementById('edit-email').outerHTML = `<span id="student-email">${currentEmail}</span>`;

    // Hide the Save button, show the Edit button
    document.getElementById('edit-profile-btn').style.display = 'inline-block';
    document.getElementById('save-profile-btn').style.display = 'none';

    console.log("Profile updated: ", { username: currentUsername, email: currentEmail });
}

// Initialize dashboard
function initDashboard() {
  populateCourses();
  populateAssignments();
  setStudentUsername();
}

// Sample data for demonstration
const reports = [
  'Report 1: Physics Progress Report',
  'Report 2: Chemistry Final Exam Report',
  'Report 3: English Term Report',
];

const attendanceRecords = [
  { subject: 'Physics', daysPresent: 45, totalDays: 50 },
  { subject: 'Chemistry', daysPresent: 48, totalDays: 50 },
  { subject: 'English', daysPresent: 47, totalDays: 50 },
];

// Function to view report card based on student name
function viewReportCard() {
  const studentName = document.getElementById('studentName').value;

  if (studentName === "") {
      alert("Please enter the student's name");
      return;
  }

  const reportCards = JSON.parse(localStorage.getItem('reportCards')) || [];

  const reportCard = reportCards.find(report => report.name.toLowerCase() === studentName.toLowerCase());

  if (reportCard) {
      document.getElementById('studentNameDisplay').innerText = reportCard.name;
      document.getElementById('mathMarksDisplay').innerText = reportCard.math;
      document.getElementById('scienceMarksDisplay').innerText = reportCard.science;
      document.getElementById('englishMarksDisplay').innerText = reportCard.english;

      document.getElementById('reportCardSection').style.display = 'block';
  } else {
      alert("Report card not found for " + studentName);
  }
}

// Function to populate attendance
function viewAttendance() {
  const attendanceTableBody = document.getElementById('attendance-table-body');
  attendanceTableBody.innerHTML = ''; // Clear previous entries
  attendanceRecords.forEach(record => {
    const li = document.createElement('li');
    const attendancePercentage = ((record.daysPresent / record.totalDays) * 100).toFixed(2); // Calculate attendance percentage
    li.textContent = `${record.subject}: ${record.daysPresent}/${record.totalDays} days (${attendancePercentage}%)`;
    attendanceTableBody.appendChild(li);
  });
}

// Initialize student dashboard by setting up reports and attendance sections
function initStudentDashboard() {
  // Other init logic...
  viewReports(); // Automatically populate reports when the dashboard loads
  viewAttendance(); // Automatically populate attendance when the dashboard loads
}

// Call the init function when the page loads
window.onload = initStudentDashboard;


// Call the init function when the page loads
window.onload = initDashboard;
