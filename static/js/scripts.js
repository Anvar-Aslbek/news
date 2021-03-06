(function ($) {
    $(document).ready(function () {
        $(document).on("keydown", function (e) {
            if (e.target.value) {
                if ((e.metaKey || e.ctrlKey) && (String.fromCharCode(e.which).toLowerCase() === 'b')) {
                    $(e.target).val(convertToCyrill(e.target.value));
                }
                if ((e.metaKey || e.ctrlKey) && (String.fromCharCode(e.which).toLowerCase() === 'l')) {
                    $(e.target).val(convertToLatin(e.target.value));
                }
            }
        });

        $('.checkbo').checkBo();
        setFocusToSearch();
        setDeleteButton();
        //setTrashButton();

        $('.mobile-phone').formatter({
            'pattern': '+(998) {{99}} {{999}}-{{99}}-{{99}}',
            'persistent': true
        });

        $('.landline-phone').formatter({
            'pattern': '+(0) {{999}} {{999}}-{{99}}-{{99}}',
            'persistent': true
        });

        var $loading = $('#loader').hide();
        var $scrollTop = 0;
        $(document)
            .ajaxStart(function () {
                //$scrollTop = $(document).scrollTop()
                //$loading.show();
            })
            .ajaxStop(function () {
                $loading.hide();
                //$(window).scrollTop($scrollTop)
            })

    });
    $(document).on('ready pjax:success', function () {
        //setFocusToSearch();
        setDeleteButton();
        $('.selectable-row tr').on('click', function () {
            //$(this).find('.checkbox input:first-child').click();
        });

    });

})(jQuery);

function setDeleteButton() {
    $('.btn-delete').on('click', function () {
        if (confirm('Are you sure to delete?')) {
            if ($(this).attr('action').length > 0) {
                document.location.href = $(this).attr('action');
            } else {
                return true;
            }
        }
        return false;
    });
}

function setTrashButton() {
    $('.btn-trash').on('click', function () {
        if (confirm('Are you sure move to trash?')) {
            if ($(this).attr('action').length > 0) {
                document.location.href = $(this).attr('action');
            } else {
                return true;
            }
        }
        return false;
    });
}

function setFocusToSearch() {
    var input = $("input[name*='[search]'][type='text']");
    if (input == undefined) {
        input = $('#data-grid-filters input[type=\"text\"]:first');
    }
    if (input != undefined && input.length > 0) {
        input.focus().delay(1000).val(input.val());
        document.getElementById(input.attr('id')).setSelectionRange(100, 100);
    }
}

function convertToSlug(Text) {
    Text = cyrlat(Text.toLowerCase());
    return Text
        .replace(/[^\w _\-]+/g, '')
        .replace(/ +/g, '-');
}

function convertToCyrill(Text) {
    Text = latcyr(Text);
    return Text;
}

function latcyr(car) {
    car = car.replace(/Yu/g, "????");
    car = car.replace(/yu/g, "????");
    car = car.replace(/Ya/g, "????");
    car = car.replace(/ya/g, "????");
    car = car.replace(/Ch/g, "????");
    car = car.replace(/ch/g, "?????");
    car = car.replace(/Sh/g, "????");
    car = car.replace(/sh/g, "????");
    car = car.replace(/Sh/g, "????");
    car = car.replace(/sh/g, "?????");
    car = car.replace(/Yo/g, "????");
    car = car.replace(/yo/g, "?????");
    car = car.replace(/G`/g, "?????");
    car = car.replace(/g`/g, "?????");
    car = car.replace(/G'/g, "?????");
    car = car.replace(/g'/g, "?????");
    car = car.replace(/O`/g, "????");
    car = car.replace(/o`/g, "????");
    car = car.replace(/O'/g, "????");
    car = car.replace(/o'/g, "????");
    car = car.replace(/A/g, "????");
    car = car.replace(/a/g, "????");
    car = car.replace(/B/g, "?????");
    car = car.replace(/b/g, "????");
    car = car.replace(/V/g, "?????");
    car = car.replace(/v/g, "????");
    car = car.replace(/G/g, "?????");
    car = car.replace(/g/g, "????");
    car = car.replace(/D/g, "?????");
    car = car.replace(/d/g, "????");
    car = car.replace(/E/g, "?????");
    car = car.replace(/e/g, "????");
    car = car.replace(/J/g, "?????");
    car = car.replace(/j/g, "????");
    car = car.replace(/Z/g, "?????");
    car = car.replace(/z/g, "????");
    car = car.replace(/I/g, "????");
    car = car.replace(/i/g, "????");
    car = car.replace(/Y/g, "?????");
    car = car.replace(/y/g, "????");
    car = car.replace(/K/g, "????");
    car = car.replace(/k/g, "????");
    car = car.replace(/L/g, "?????");
    car = car.replace(/l/g, "????");
    car = car.replace(/M/g, "????");
    car = car.replace(/m/g, "????");
    car = car.replace(/N/g, "????");
    car = car.replace(/n/g, "????");
    car = car.replace(/O/g, "????");
    car = car.replace(/o/g, "????");
    car = car.replace(/P/g, "????");
    car = car.replace(/p/g, "????");
    car = car.replace(/R/g, "?? ");
    car = car.replace(/r/g, "?????");
    car = car.replace(/S/g, "????");
    car = car.replace(/s/g, "????");
    car = car.replace(/T/g, "????");
    car = car.replace(/t/g, "?????");
    car = car.replace(/U/g, "????");
    car = car.replace(/u/g, "????");
    car = car.replace(/F/g, "????");
    car = car.replace(/f/g, "?????");
    car = car.replace(/X/g, "????");
    car = car.replace(/x/g, "?????");
    car = car.replace(/C/g, "????");
    car = car.replace(/c/g, "?????");
    car = car.replace(/E/g, "????");
    car = car.replace(/e/g, "????");
    car = car.replace(/H/g, "????");
    car = car.replace(/h/g, "????");
    car = car.replace(/Q/g, "????");
    car = car.replace(/q/g, "?????");

    return car;
}

function convertToLatin(Text) {
    Text = cyrlat(Text);
    return Text;
}

function cyrlat(car) {
    car = car.replace(/????/g, "Yu");
    car = car.replace(/????/g, "yu");
    car = car.replace(/????????/g, "yuye");
    car = car.replace(/????/g, "Ya");
    car = car.replace(/????/g, "ya");
    car = car.replace(/????/g, "Ch");
    car = car.replace(/?????/g, "ch");
    car = car.replace(/????/g, "Sh");
    car = car.replace(/????/g, "sh");
    car = car.replace(/????/g, "Sh");
    car = car.replace(/?????/g, "sh");
    car = car.replace(/????/g, "Yo");
    car = car.replace(/?????????/g, "yoye");
    car = car.replace(/?????/g, "yo");
    car = car.replace(/?????/g, "G'");
    car = car.replace(/?????/g, "g'");
    car = car.replace(/????/g, "O'");
    car = car.replace(/????/g, "o'");
    car = car.replace(/????/g, "A");
    car = car.replace(/????/g, "a");
    car = car.replace(/????????/g, "aye");
    car = car.replace(/?????/g, "B");
    car = car.replace(/????/g, "b");
    car = car.replace(/?????/g, "V");
    car = car.replace(/????/g, "v");
    car = car.replace(/?????/g, "G");
    car = car.replace(/????/g, "g");
    car = car.replace(/?????/g, "D");
    car = car.replace(/????/g, "d");
    car = car.replace(/?????/g, "E");
    car = car.replace(/????/g, "e");
    car = car.replace(/?????/g, "J");
    car = car.replace(/????/g, "j");
    car = car.replace(/?????/g, "Z");
    car = car.replace(/????/g, "z");
    car = car.replace(/????/g, "I");
    car = car.replace(/????/g, "i");
    car = car.replace(/????????/g, "iye");
    car = car.replace(/?????/g, "Y");
    car = car.replace(/????/g, "y");
    car = car.replace(/????/g, "K");
    car = car.replace(/????/g, "k");
    car = car.replace(/?????/g, "L");
    car = car.replace(/????/g, "l");
    car = car.replace(/????/g, "M");
    car = car.replace(/????/g, "m");
    car = car.replace(/????/g, "N");
    car = car.replace(/????/g, "n");
    car = car.replace(/????/g, "O");
    car = car.replace(/????/g, "o");
    car = car.replace(/????????/g, "oye");
    car = car.replace(/????/g, "P");
    car = car.replace(/????/g, "p");
    car = car.replace(/?? /g, "R");
    car = car.replace(/?????/g, "r");
    car = car.replace(/????/g, "S");
    car = car.replace(/????/g, "s");
    car = car.replace(/????/g, "T");
    car = car.replace(/?????/g, "t");
    car = car.replace(/????/g, "U");
    car = car.replace(/????/g, "u");
    car = car.replace(/????????/g, "uye");
    car = car.replace(/????/g, "F");
    car = car.replace(/?????/g, "f");
    car = car.replace(/????/g, "X");
    car = car.replace(/?????/g, "x");
    car = car.replace(/????/g, "C");
    car = car.replace(/?????/g, "c");
    car = car.replace(/????/g, "E");
    car = car.replace(/????/g, "e");
    car = car.replace(/????/g, "H");
    car = car.replace(/????/g, "h");
    car = car.replace(/????/g, "Q");
    car = car.replace(/?????/g, "q");

    return car;
}