function fv_ui() {

    $(document).click(
        function(event) {

            if (!$(event.target)
                .closest(
                    "div[id*='fv'], div[class*='fv']")
                .length) {

                if ($("#fv-variables-dlg")
                    .is(":visible")) {

                    $('#fv-variables-dlg')
                        .hide();

                }
            }
        });

    $('body').append('<div id="fv-found-variables">');
    $("#fv-found-variables").hide();

    $('#fv-found-variables').bind('message', function(ev, data) {

        var vars = create_array(data).sort();

        if (!vars.length) {
            return;
        }

        $(this).show();
        $(this).text('Variables(' + vars.length + ')');

        $('#fv-found-variables').click(function() {

            $('#fv-variables-dlg').remove();

            $('body').append($(
                '<div id="fv-variables-dlg">' +
                '<div id="fv-variables-hide">Close</div>' +
                '<div id="fv-variables-box">' +
                '</div></div>'
            ).hide());

            $('#fv-variables-box')
                .append($(fitnesse.variables.main({
                    variables: vars,
                    data: data
                })));

            $('#fv-variables-hide').click(function() {
                $('#fv-variables-dlg').hide();
            });

            $('#fv-variables-dlg').show();

        });

    });
}