$(function() {
    var fieldIndex = 1;
    var formFields = $('#form-fields');
    var formTable = $('#form-table tbody');

    function updateTable() {
        formTable.empty();
        formFields.find('.form-field').each(function() {
            var name = $(this).find('input[name="text-field[]"]').val() || '';
            var age = $(this).find('select[name="age[]"] option:selected').text() || '';
            var row = '<tr><td>' + name + '</td><td>' + age + '</td><td><button class="remove-field">Supprimer</button></td></tr>';
            formTable.append(row);
        });
    }

    $('#add-text-field').click(function() {
        var newField = '<div class="form-field"><input type="text" name="text-field[]" placeholder="Prénom"><button class="remove-field">Supprimer</button></div>';
        formFields.append(newField);
        fieldIndex++;
    });

    $('#add-select-field').click(function() {
        var newField = '<div class="form-field"><select name="age[]"><option value="">-- Sélectionnez une catégorie d\'âge --</option><option value="0-17 ans">0-5 ans</option><option value="0-17 ans">6-12 ans</option><option value="0-17 ans">13-17 ans</option><option value="18-25 ans">18-25 ans</option><option value="26-35 ans">26-35 ans</option><option value="36-45 ans">36-45 ans</option><option value="46-55 ans">46-55 ans</option><option value="56 ans et plus">56 ans et plus</option></select><button class="remove-field">Supprimer</button></div>';
        formFields.append(newField);
        fieldIndex++;
    });

    formFields.on('click', '.remove-field', function() {
        $(this).closest('.form-field').remove();
    });

    formTable.on('click', '.remove-field', function() {
        $(this).closest('tr').remove();
    });

    $('#dynamic-form').submit(function(e) {
        e.preventDefault();
        var name = $('input[name="text-field[]"]').last().val() || '';
        var age = $('select[name="age[]"]').last().find('option:selected').text() || '';
        var row = '<tr><td>' + name + '</td><td>' + age + '</td><td><button class="remove-field">Supprimer</button></td></tr>';
        formTable.append(row);
        $(this)[0].reset();
    });
});
