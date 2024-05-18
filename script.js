document.addEventListener('DOMContentLoaded', function() {
    // Theory marks form submission
    document.getElementById('theorymarksForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const FAT1 = parseFloat(document.getElementById('theoryFAT1').value);
        const FAT2 = parseFloat(document.getElementById('theoryFAT2').value);
        const FAT3 = parseFloat(document.getElementById('theoryFAT3').value);
        const Assignment1 = parseFloat(document.getElementById('theoryAssignment1').value);
        const Assignment2 = parseFloat(document.getElementById('theoryAssignment2').value);
        const Assignment3 = parseFloat(document.getElementById('theoryAssignment3').value);
        const ExternalMarks = parseFloat(document.getElementById('theoryExternalMarks').value);

        const internal = (((FAT1 * 0.7 + Assignment1 * 0.3) +
                          (FAT2 * 0.7 + Assignment2 * 0.3) +
                          (FAT3 * 0.7 + Assignment3 * 0.3)) / 3 * 0.8).toFixed(2);

        const total = (((FAT1 * 0.7 + Assignment1 * 0.3) +
                        (FAT2 * 0.7 + Assignment2 * 0.3) +
                        (FAT3 * 0.7 + Assignment3 * 0.3)) / 3 * 0.8 + ExternalMarks * 0.6).toFixed(2);

        document.getElementById('theoryInternalResult').textContent = `Your Internal mark is: ${internal}`;
        document.getElementById('theoryTotalResult').textContent = `Your Total mark is: ${total}`;

        document.getElementById('theoryresults').classList.add('results-open');
    });

    // Laboratory marks form submission
    document.getElementById('laboratorymarksForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const FAT1 = parseFloat(document.getElementById('labFAT1').value);
        const FAT2 = parseFloat(document.getElementById('labFAT2').value);
        const FAT3 = parseFloat(document.getElementById('labFAT3').value);
        const ModelMarks = parseFloat(document.getElementById('labModelMarks').value);
        const ExternalMarks = parseFloat(document.getElementById('labExternalMarks').value);

        const internal = (((FAT1) +
                           (FAT2) +
                           (FAT3)) / 3 * 0.8 + ModelMarks * 0.2).toFixed(2);

        const total = ((((FAT1) +
                        (FAT2) +
                        (FAT3)) / 3 * 0.8 + ModelMarks * 0.2) + ExternalMarks * 0.4).toFixed(2);

        document.getElementById('labInternalResult').textContent = `Your Internal mark is: ${internal}`;
        document.getElementById('labTotalResult').textContent = `Your Total mark is: ${total}`;

        document.getElementById('laboratoryresults').classList.add('results-open');
    });

    // Theory cum Laboratory marks form submission
    document.getElementById('theorycumlaboratorymarksForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const FAT1 = parseFloat(document.getElementById('comboFAT1').value);
        const FAT2 = parseFloat(document.getElementById('comboFAT2').value);
        const Assignment1 = parseFloat(document.getElementById('comboAssignment1').value);
        const Assignment2 = parseFloat(document.getElementById('comboAssignment2').value);
        const ModelMarks = parseFloat(document.getElementById('comboModelMarks').value);
        const ExternaltheoryMarks = parseFloat(document.getElementById('comboExternaltheoryMarks').value);
        const ExternallabMarks = parseFloat(document.getElementById('comboExternallabMarks').value);

        const internal = (((FAT1 * 0.7 + Assignment1 * 0.3) +
                          (FAT2 * 0.7 + Assignment2 * 0.3) +
                          (ModelMarks)) / 3).toFixed(2);

        const total = ((((FAT1 * 0.7 + Assignment1 * 0.3) +
                        (FAT2 * 0.7 + Assignment2 * 0.3) +
                        (ModelMarks)) / 3) + (ExternaltheoryMarks + ExternallabMarks) / 2).toFixed(2);

        document.getElementById('comboInternalResult').textContent = `Your Internal mark is: ${internal}`;
        document.getElementById('comboTotalResult').textContent = `Your Total mark is: ${total}`;

        document.getElementById('theorycumlaboratoryresults').classList.add('results-open');
    });
});
