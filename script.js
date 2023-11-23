// Sample data (you can replace this with actual data)
const employeeData = [
    {
     "EEID": "E02387",
     "Full Name": "Emily Davis",
     "Job Title": "Sr. Manger",
     "Department": "IT",
     "Business Unit": "Research & Development",
     "Gender": "Female",
     "Ethnicity": "Black",
     "Age": 55,
     "Hire Date": "04\/08\/2016",
     "Annual Salary": 141604,
     "Bonus %": 0.15,
     "Country": "United States",
     "City": "Seattle",
     "Exit Date": "10\/16\/2021"
    },
    {
     "EEID": "E04105",
     "Full Name": "Theodore Dinh",
     "Job Title": "Technical Architect",
     "Department": "IT",
     "Business Unit": "Manufacturing",
     "Gender": "Male",
     "Ethnicity": "Asian",
     "Age": 59,
     "Hire Date": "11\/29\/1997",
     "Annual Salary": 99975,
     "Bonus %": 0,
     "Country": "China",
     "City": "Chongqing"
    },
    {
     "EEID": "E02572",
     "Full Name": "Luna Sanders",
     "Job Title": "Director",
     "Department": "Finance",
     "Business Unit": "Speciality Products",
     "Gender": "Female",
     "Ethnicity": "Caucasian",
     "Age": 50,
     "Hire Date": "10\/26\/2006",
     "Annual Salary": 163099,
     "Bonus %": 0.2,
     "Country": "United States",
     "City": "Chicago"
    },
    {
     "EEID": "E02832",
     "Full Name": "Penelope Jordan",
     "Job Title": "Computer Systems Manager",
     "Department": "IT",
     "Business Unit": "Manufacturing",
     "Gender": "Female",
     "Ethnicity": "Caucasian",
     "Age": 26,
     "Hire Date": "09\/27\/2019",
     "Annual Salary": 84913,
     "Bonus %": 0.07,
     "Country": "United States",
     "City": "Chicago"
    },
    {
     "EEID": "E01639",
     "Full Name": "Austin Vo",
     "Job Title": "Sr. Analyst",
     "Department": "Finance",
     "Business Unit": "Manufacturing",
     "Gender": "Male",
     "Ethnicity": "Asian",
     "Age": 55,
     "Hire Date": "11\/20\/1995",
     "Annual Salary": 95409,
     "Bonus %": 0,
     "Country": "United States",
     "City": "Phoenix"
    },
    {
     "EEID": "E00644",
     "Full Name": "Joshua Gupta",
     "Job Title": "Account Representative",
     "Department": "Sales",
     "Business Unit": "Corporate",
     "Gender": "Male",
     "Ethnicity": "Asian",
     "Age": 57,
     "Hire Date": "01\/24\/2017",
     "Annual Salary": 50994,
     "Bonus %": 0,
     "Country": "China",
     "City": "Chongqing"
    },
    {
     "EEID": "E01550",
     "Full Name": "Ruby Barnes",
     "Job Title": "Manager",
     "Department": "IT",
     "Business Unit": "Corporate",
     "Gender": "Female",
     "Ethnicity": "Caucasian",
     "Age": 27,
     "Hire Date": "07\/01\/2020",
     "Annual Salary": 119746,
     "Bonus %": 0.1,
     "Country": "United States",
     "City": "Phoenix"
    },
    {
     "EEID": "E04332",
     "Full Name": "Luke Martin",
     "Job Title": "Analyst",
     "Department": "Finance",
     "Business Unit": "Manufacturing",
     "Gender": "Male",
     "Ethnicity": "Black",
     "Age": 25,
     "Hire Date": "05\/16\/2020",
     "Annual Salary": 41336,
     "Bonus %": 0,
     "Country": "United States",
     "City": "Miami",
     "Exit Date": "05\/20\/2021"
    },
    {
     "EEID": "E04533",
     "Full Name": "Easton Bailey",
     "Job Title": "Manager",
     "Department": "Accounting",
     "Business Unit": "Manufacturing",
     "Gender": "Male",
     "Ethnicity": "Caucasian",
     "Age": 29,
     "Hire Date": "01\/25\/2019",
     "Annual Salary": 113527,
     "Bonus %": 0.06,
     "Country": "United States",
     "City": "Austin"
    },
];

function searchEmployee() {
    const eeidInput = document.getElementById('eeidInput').value;
    const resultContainer = document.getElementById('result-container');

    // Find employee by EEID
    const employee = employeeData.find(emp => emp.EEID === eeidInput);

    // Display result
    if (employee) {
        resultContainer.innerHTML = `
            <h3>Employee Information</h3>
            <p><strong>EEID:</strong> ${employee.EEID}</p>
            <p><strong>Full Name:</strong> ${employee["Full Name"]}</p>
            <p><strong>Job Title:</strong> ${employee["Job Title"]}</p>
            <p><strong>Department:</strong> ${employee["Department"]}</p>
            <p><strong>Business Unit:</strong> ${employee["Business Unit"]}</p>
            <p><strong>Gender:</strong> ${employee["Gender"]}</p>
            <p><strong>Ethnicity:</strong> ${employee["Ethnicity"]}</p>
        `;
    } else {
        resultContainer.innerHTML = '<p>No employee found with the given EEID.</p>';
    }
}
