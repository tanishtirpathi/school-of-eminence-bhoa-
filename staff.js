// Sample data of teachers
const teachers = [
  {
    designation: "Principal",
    name: "NASIB SINGH",
    subject: " All Subjects	",
  },
  {
    designation: "Lecturer",
    name: "AJAY KUMAR",
    subject: "CHEMISTRY",
  },
  {
    designation: "Lecturer",
    name: "ANIL KUMAR",
    subject: "ENGLISH	",
  },
  {
    designation: "Lecturer",
    name: "ASHWANI KUMAR",
    subject: "PHYSICS",
  },
  {
    designation: "Lecturer",
    name: "BANDANA DEVI",
    subject: "HISTORY",
  },
  {
    designation: "Lecturer",
    name: "JASWANT SINGH",
    subject: "ECONOMICS",
  },
  { designation: "Lecturer", name: "MEENA KUMARI", subject: "PHYSICS" },
  {
    designation: "Lecturer",
    name: "NIRMAL KUMARI",
    subject: "POLITICAL SCIENCE	",
  },
  {
    designation: "Lecturer",
    name: "PRAVEENA RANI",
    subject: "GEOGRAPHY",
  },
  {
    designation: "Lecturer",
    name: "RAJINDER KUMAR",
    subject: "COMMERCE",
  },
  {
    designation: "Lecturer",
    name: "SUBHASH CHANDER",
    subject: "ENGLISH",
  },
  {
    designation: "Master Cadre",
    name: "ANURADHA SAINI",
    subject: "HINDI",
  },
  { designation: "Master Cadre", name: "DAYAL PRABHA", subject: "HINDI	" },
  {
    designation: "Master Cadre",
    name: "DINESH SHARMA",
    subject: "SOCIAL STUDIES	",
  },
  {
    designation: "Master Cadre",
    name: "HEMWATI VAID",
    subject: "ENGLISH",
  },
  {
    designation: "Master Cadre",
    name: "JEEVAN JYOTI",
    subject: "SCIENCE	",
  },
  {
    designation: "Master Cadre",
    name: "MANMOHAN KRISHAN",
    subject: "SOCIAL STUDIES	",
  },
  {
    designation: "Master Cadre",
    name: "NAVJOT DUBEY",
    subject: "SCIENCE ",
  },
  {
    designation: "Master Cadre",
    name: "NIDHI SHARMA",
    subject: "MATHEMATICS",
  },
  {
    designation: "Master Cadre",
    name: "PARBODH CHANDER",
    subject: "AGRICULTURE",
  },
  {
    designation: "Master Cadre",
    name: "PRIYANKA MAHAJAN",
    subject: "ENGLISH",
  },
  {
    designation: "Master Cadre",
    name: "RAJEEV KUMAR",
    subject: "MATHEMATICS",
  },
  {
    designation: "Master Cadre",
    name: "RAMANDEEP",
    subject: "SOCIAL STUDIES	",
  },
  {
    designation: "Master Cadre",
    name: "SAT PAUL",
    subject: "MATHEMATICS",
  },
  {
    designation: "Master Cadre",
    name: "SUREKHA RANI",
    subject: "SCIENCE",
  },
  {
    designation: "Master  Cadre",
    name: "SURJEET SINGH",
    subject: "SOCIAL STUDIES	",
  },
  {
    designation: "Master Cadre",
    name: "VISHALI MAHAJAN",
    subject: "SCIENCE	",
  },
  {
    designation: "Master Cadre",
    name: "HARISH KUMAR",
    subject: "COMPUTER SCIENCE	",
  },
  {
    designation: "Master Cadre",
    name: "JASBIR KAUR",
    subject: "COMPUTER SCIENCE	",
  },
  {
    designation: "Master Cadre",
    name: "JYOTI KUMARI",
    subject: "COMPUTER SCIENCE	",
  },
  {
    designation: "Master Cadre",
    name: "PAWAN KUMAR",
    subject: "COMPUTER SCIENCE	",
  },
  {
    designation: "Master Cadre",
    name: "DEEPAK KUMAR",
    subject: "Construstion",
  },
  {
    designation: "Master Cadre",
    name: "POOJA DEVI",
    subject: "Beauty & Wellness	",
  },
  { designation: "Master Cadre", name: "GURNAM SINGH", subject: "SLA" },
  { designation: "Master Cadre", name: "REENU BALA", subject: "SLA" },
  { designation: "Master Cadre", name: "SUNITA", subject: "SLA" },
  {
    designation: "Master Cadre",
    name: "GURINDER MEHTA",
    subject: "Librarian	",
  },
  {
    designation: "Master Cadre",
    name: "MADHU BALA",
    subject: "Library Restorer",
  },
  {
    designation: "Master Cadre",
    name: "KULJEET KAUR",
    subject: "Lab Attendant	",
  },
  {
    designation: "Master Cadre",
    name: "SAHIL SHARMA    ",
    subject: "Clerk",
  },
];

// Function to populate the table with teacher details
function populateTable() {
  const tableBody = document.querySelector("#teacherTable tbody");
  tableBody.innerHTML = ""; // Clear existing rows

  teachers.forEach((teacher) => {
    const row = `
            <tr>
               
                <td>${teacher.name}</td>
                <td>${teacher.designation}</td>
                <td>${teacher.subject}</td>
            </tr>
        `;
    tableBody.innerHTML += row;
  });
}

// Call the function to populate the table initially
populateTable();
