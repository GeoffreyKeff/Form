<!DOCTYPE html>
<html>
<head>
    <title>Formulaire personnalisé</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<div id="form-container">
    <h2>Form</h2>
    <form id="dynamic-form">
        <div id="form-fields">
            <div class="form-field">
                <input type="text" name="text-field[]" placeholder="Name">
                <select name="age[]">
                    <option value="">-- Select an age category --</option>
                    <option value="0-5 years">0-5 years</option>
                    <option value="6-12 years">6-12 years</option>
                    <option value="13-17 years">13-17 years</option>
                    <option value="18-25 years">18-25 years</option>
                    <option value="26-35 years">26-35 years</option>
                    <option value="36-45 years">36-45 years</option>
                    <option value="46-55 years">46-55 years</option>
                    <option value="56 years and more">56 years and more</option>
                </select>
                <button class="remove-field">Delete</button>
            </div>
        </div>

        <div id="form-buttons">
            <button id="add-text-field" type="button">Add a text field</button>
            <button id="add-select-field" type="button">Add a select field</button>
            <input type="submit" value="Register">
        </div>

        <table id="form-table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </form>
</div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="script.js"></script>
</body>
</html>