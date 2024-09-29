// Shared data for attendance
const attendanceData = [];

// Teacher: Add attendance
function addAttendance() {
    const studentId = document.getElementById("student-id").value;
    const date = document.getElementById("attendance-date").value;
    const status = document.getElementById("attendance-status").value;

    if (studentId && date && status) {
        attendanceData.push({ studentId, date, status });
        populateAttendanceRecords();
    } else {
        alert("Please fill in all fields!");
    }
}

// Populate attendance records for teachers
function populateAttendanceRecords() {
    const attendanceTable = document.getElementById("attendance-records");
    attendanceTable.innerHTML = '';  // Clear table first

    attendanceData.forEach((record, index) => {
        const row = `<tr>
            <td>${record.studentId}</td>
            <td>${record.date}</td>
            <td>${record.status}</td>
            <td><button onclick="editAttendance(${index})">Edit</button>
                <button onclick="deleteAttendance(${index})">Delete</button>
            </td>
        </tr>`;
        attendanceTable.innerHTML += row;
    });
}

// Teacher: Edit attendance
function editAttendance(index) {
    const record = attendanceData[index];
    document.getElementById("student-id").value = record.studentId;
    document.getElementById("attendance-date").value = record.date;
    document.getElementById("attendance-status").value = record.status;

    // Remove the old record so the updated one can be added
    attendanceData.splice(index, 1);
    populateAttendanceRecords();
}

// Teacher: Delete attendance
function deleteAttendance(index) {
    attendanceData.splice(index, 1);
    populateAttendanceRecords();
}

// Student: View attendance
function viewStudentAttendance(studentId) {
    const studentAttendanceTable = document.getElementById("student-attendance");
    studentAttendanceTable.innerHTML = '';  // Clear table first

    const studentRecords = attendanceData.filter(record => record.studentId === studentId);

    studentRecords.forEach(record => {
        const row = `<tr>
            <td>${record.date}</td>
            <td>${record.status}</td>
        </tr>`;
        studentAttendanceTable.innerHTML += row;
    });
}

// On load, check the role (manually for this demo)
window.onload = function () {
    const currentPage = window.location.pathname;
    
    // For students
    if (currentPage.includes("studentatt.html")) {
        const studentId = "123"; // Replace with actual student ID
        viewStudentAttendance(studentId);
    }

    // For teachers, populate attendance records if any exist
    if (currentPage.includes("teacheratt.html")) {
        populateAttendanceRecords();
    }
};
