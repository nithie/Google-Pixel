$(document).ready(function () {
    $('.nav li a').click(function (e) {
        $('.nav li').removeClass('actives');
        var $parent = $(this).parent();
        if (!$parent.hasClass('actives')) {
            $parent.addClass('actives');
        }
        $('')
        e.preventDefault();
    });
});