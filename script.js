$(function() {

    // Initialize variables
    var fieldIndex = 1;
    var formFields = $('#form-fields');
    var formTable = $('#form-table tbody');

    // Function to update the table with the form fields
    function updateTable() {
        formTable.empty();
        formFields.find('.form-field').each(function() {
            var name = $(this).find('input[name="text-field[]"]').val() || '';
            var age = $(this).find('select[name="age[]"] option:selected').text() || '';
            var row = '<tr><td>' + name + '</td><td>' + age + '</td><td><button class="remove-field">Remove</button></td></tr>';
            formTable.append(row);
        });
    }

    // Add a text field to the form
    $('#add-text-field').click(function() {
        var newField = '<div class="form-field"><input type="text" name="text-field[]" placeholder="First name"><button class="remove-field">Remove</button></div>';
        formFields.append(newField);
        fieldIndex++;
    });

    // Add a select field to the form
    $('#add-select-field').click(function() {
        var newField = '<div class="form-field"><select name="age[]"><option value="">-- Select an age category --</option><option value="0-17 years">0-5 years</option><option value="0-17 years">6-12 years</option><option value="0-17 years">13-17 years</option><option value="18-25 years">18-25 years</option><option value="26-35 years">26-35 years</option><option value="36-45 years">36-45 years</option><option value="46-55 years">46-55 years</option><option value="56 years and over">56 years and over</option></select><button class="remove-field">Remove</button></div>';
        formFields.append(newField);
        fieldIndex++;
    });

    // Remove a form field
    formFields.on('click', '.remove-field', function() {
        $(this).closest('.form-field').remove();
    });

    // Remove a row from the table
    formTable.on('click', '.remove-field', function() {
        $(this).closest('tr').remove();
    });

    // Submit the form and add the form data to the table
    $('#dynamic-form').submit(function(e) {
        e.preventDefault();
        var name = $('input[name="text-field[]"]').last().val() || '';
        var age = $('select[name="age[]"]').last().find('option:selected').text() || '';
        var row = '<tr><td>' + name + '</td><td>' + age + '</td><td><button class="remove-field">Remove</button></td></tr>';
        formTable.append(row);
        $(this)[0].reset();
    });
});
