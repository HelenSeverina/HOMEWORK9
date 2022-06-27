// Task 1
$("a[href^='https:/']").attr('target', '_blank');

// Task 2

$("h2.head").css('background-color', 'green');
$("h2.head>.inner").css('fontSize', '35px');

// Task 3

$("h3+div").each(function (e, el) {
    $(el).insertBefore($(el).prev());
});

// Task 4

document.addEventListener("change", function (event) {

    if (event.target.checked == false) {
        document.querySelector("input#" + event.target.id).removeAttribute('checked');
    } else {
        document.querySelector("input#" + event.target.id).setAttribute('avto', 'checked');
    }

    let checkedCars = $("input[avto='checked']").length;

    if(checkedCars >= 3){
        $('input').each(function (e, el) {
            $(el).attr('disabled', true);
        });
    }
});