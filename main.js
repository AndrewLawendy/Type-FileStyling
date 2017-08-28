$(document).ready(function () {
    $('input:file').on('change', function () {
        var target = $(this);
        var relatedTarget = target.siblings('.file-name');
        var fileName = target[0].files[0].name;
        relatedTarget.val(fileName);
    });
});
