var ctx = document.getElementById("myChart").getContext("2d");
// Creating Chart Class Object
var myChart = new Chart(ctx, {
    // Type of Chart - bar, line, pie, doughnut, radar, polarArea
    type: "bar",

    // The data for our dataset
    data: {
        // Data Labels
        labels: ["Aishbag Police Station", "Ashoka Garden Police Station", "Bairagarh Police Station", "Gandhi Nager Police Station", "GovindPura Police Station", "MP Nager Police Station", "Ratibarth Police Station"],

        datasets: [
            // Data Set 1
            {
                //  Chart Label
                label: "Crimes Records",

                // Actual Data
                data: [3200, 1846, 1508, 3003, 1079, 1801, 4129],

                // Background Color
                backgroundColor: [
                    "rgba(255, 159, 64, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                ],

                // Border Color
                borderColor: [
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 159, 64, 1)",
                ],

                // Border Width
                borderWidth: 1,
            },

            // Data Set 2
            {
                //  Chart Label
                label: "Solved Cases",

                // Actual Data
                data: [2005, 1402, 1301, 803, 703, 1205, 1302],

                // Background Color
                backgroundColor: [
                    "rgba(54, 16, 235, 0.5)",
                    "rgba(54, 16, 235, 0.5)",
                    "rgba(54, 16, 235, 0.5)",
                    "rgba(54, 16, 235, 0.5)",
                    "rgba(54, 16, 235, 0.5)",
                    "rgba(54, 16, 235, 0.5)",
                    "rgba(54, 16, 235, 0.5)",
                ],

                // Border Color
                borderColor: [
                    "rgba(54, 16, 235, 1)",
                    "rgba(54, 16, 235, 1)",
                    "rgba(54, 16, 235, 1)",
                    "rgba(54, 16, 235, 1)",
                    "rgba(54, 16, 235, 1)",
                    "rgba(54, 16, 235, 1)",
                    "rgba(54, 16, 235, 1)",
                ],

                // Border Width
                borderWidth: 1,
            },

            // Data Set 3
            {
                //  Chart Label
                label: "Unsolved Cases",

                // Actual Data
                data: [1195, 444, 207, 2200, 376, 596, 2827],

                // Background Color
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(255, 99, 132, 0.5)",
                ],

                // Border Color
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(255, 99, 132, 1)",
                ],

                // Border Width
                borderWidth: 1,
            },
        ],
    },

    // Configuration options go here
    options: {
        // Set Responsiveness By Default Its True
        // When Its True Canvas Width Height won't work
        responsive: true,

        // Set Padding
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            },
        },

        // Configure ToolTips
        tooltips: {
            enabled: true, // Enable/Disable ToolTip By Default Its True
            backgroundColor: "black", // Set Tooltip Background Color
            titleFontFamily: "Georgia", // Set Tooltip Title Font Family
            titleFontSize: 20, // Set Tooltip Font Size
            titleFontStyle: "bold italic",
            titleFontColor: "#f2efcd",
            titleAlign: "center",
            titleSpacing: 3,
            titleMarginBottom: 30,
            bodyFontFamily: "Georgia",
            bodyFontSize: 16,
            bodyFontStyle: "italic",
            bodyFontColor: "white",
            bodyAlign: "center",
            bodySpacing: 3,
        },

        // Chart Title
        title: {
            display: true,
            text: "Bhopal Crime Data Chart (2022)",
            position: "bottom",
            fontSize: 20,
            fontFamily: "Georgia",
            fontColor: "darkblue",
            fontStyle: "bold italic",
            padding: 15,
            lineHeight: 5,
        },

        animation: {
            duration: 3000,
            easing: "easeInOutBounce",
        },
    },
});