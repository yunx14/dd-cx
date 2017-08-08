function resetForm(form) {
    var inputs = form.getElementsByTagName('input');
    var text= form.getElementsByTagName('textarea');
    var selects = form.getElementsByTagName('select');
    for (var i = 0; i<inputs.length; i++) {
        switch (inputs[i].type) {
            case 'radio':
            case 'checkbox':
                inputs[i].checked = false;
        }
    }

    for (var i = 0; i<selects.length; i++) {
        selects[i].selectedIndex = 0;
    }

    for (var i = 0; i<text.length; i++) {
        text[i].innerHTML= '';
    }
    return false;
}

$("#filter_reset").click(function() {
  resetForm(document.getElementsByClassName("refine__menu")[0]);
});
