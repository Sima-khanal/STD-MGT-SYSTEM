<h1>Student Dashboard - View Report Card</h1>

    <div>
        <input type="text" id="studentName" placeholder="Enter Student Name" required>
        <button onclick="viewReportCard()">View Report Card</button>
    </div>

    <div id="reportCardSection" style="display: none;">
        <h2>Report Card</h2>
        <p><strong>Student Name:</strong> <span id="studentNameDisplay"></span></p>
        <p><strong>Math:</strong> <span id="mathMarksDisplay"></span></p>
        <p><strong>Science:</strong> <span id="scienceMarksDisplay"></span></p>
        <p><strong>English:</strong> <span id="englishMarksDisplay"></span></p>
    </div>
