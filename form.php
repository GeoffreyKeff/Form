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
                <input type="text" name="text-field[]" placeholder="Prénom">
                <select name="age[]">
                    <option value="">-- Sélectionnez une catégorie d'âge --</option>
                    <option value="0-17 ans">0-5 ans</option>
                    <option value="0-17 ans">6-12 ans</option>
                    <option value="0-17 ans">13-17 ans</option>
                    <option value="18-25 ans">18-25 ans</option>
                    <option value="26-35 ans">26-35 ans</option>
                    <option value="36-45 ans">36-45 ans</option>
                    <option value="46-55 ans">46-55 ans</option>
                    <option value="56 ans et plus">56 ans et plus</option>
                </select>
                <button class="remove-field">Supprimer</button>
            </div>
        </div>

        <div id="form-buttons">
            <button id="add-text-field" type="button">Ajouter un champ de texte</button>
            <button id="add-select-field" type="button">Ajouter un champ de sélection</button>
            <input type="submit" value="Enregistrer">
        </div>

        <table id="form-table">
            <thead>
            <tr>
                <th>Prénom</th>
                <th>Âge</th>
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