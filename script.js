$(document).ready(function () {
    $('#myForm').on('submit', function (e) {
        e.preventDefault();
        // Populate the preview with form data
        $('#previewName').text($('#name').val());
        $('#previewEmail').text($('#email').val());
        $('#previewPhone').text($('#phone').val());
        $('#previewAddress').text($('#address').val());
        $('#previewMessage').text($('#message').val());
        // Show the modal
        $('#formPreviewModal').modal('show');
    });

    $('#confirmSubmit').on('click', function () {
        // Simulate form submission
        $('#formPreviewModal').modal('hide');
        $('#successModal').modal('show');
        $('#myForm')[0].reset(); // Reset the form after submission
    });
});