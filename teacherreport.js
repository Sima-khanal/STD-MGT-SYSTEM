// Array to hold report cards
let reportCards = [];
let editIndex = -1;

// Function to add or update a report card
function addOrUpdateReportCard() {
    const studentName = document.getElementById('studentName').value;
    const mathMarks = document.getElementById('mathMarks').value;
    const scienceMarks = document.getElementById('scienceMarks').value;
    const englishMarks = document.getElementById('englishMarks').value;

    if (studentName === "" || mathMarks === "" || scienceMarks === "" || englishMarks === "") {
        alert("Please fill in all fields");
        return;
    }

    const reportCard = {
        name: studentName,
        math: mathMarks,
        science: scienceMarks,
        english: englishMarks
    };

    if (editIndex === -1) {
        // Add new report card
        reportCards.push(reportCard);
    } else {
        // Update existing report card
        reportCards[editIndex] = reportCard;
        editIndex = -1;
    }

    clearForm();
    displayReportCards();
    saveReportCardsToLocalStorage(); // Save to localStorage
}

// Function to display report cards in the table
function displayReportCards() {
    const reportTableBody = document.getElementById('reportTableBody');
    reportTableBody.innerHTML = "";

    reportCards.forEach((report, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${report.name}</td>
            <td>${report.math}</td>
            <td>${report.science}</td>
            <td>${report.english}</td>
            <td>
                <button onclick="editReportCard(${index})">Edit</button>
                <button onclick="deleteReportCard(${index})">Delete</button>
            </td>
        `;
        reportTableBody.appendChild(row);
    });
}

// Function to edit a report card
function editReportCard(index) {
    const report = reportCards[index];
    document.getElementById('studentName').value = report.name;
    document.getElementById('mathMarks').value = report.math;
    document.getElementById('scienceMarks').value = report.science;
    document.getElementById('englishMarks').value = report.english;

    editIndex = index;
}

// Function to delete a report card
function deleteReportCard(index) {
    reportCards.splice(index, 1);
    displayReportCards();
    saveReportCardsToLocalStorage(); // Save to localStorage
}

// Function to clear form inputs
function clearForm() {
    document.getElementById('studentName').value = "";
    document.getElementById('mathMarks').value = "";
    document.getElementById('scienceMarks').value = "";
    document.getElementById('englishMarks').value = "";
}

// Save the report cards to localStorage
function saveReportCardsToLocalStorage() {
    localStorage.setItem('reportCards', JSON.stringify(reportCards));
}

// Load the report cards from localStorage when the page loads
function loadReportCardsFromLocalStorage() {
    const storedReportCards = localStorage.getItem('reportCards');
    if (storedReportCards) {
        reportCards = JSON.parse(storedReportCards);
        displayReportCards();
    }
}

// Load report cards when the page is loaded
window.onload = loadReportCardsFromLocalStorage;
