$(document).ready(function () {

    //создаю правило для ввода имени владельца карты только латинскими буквами
    $.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /[a-z]+/i.test(value);
    });

//создаю правила для валидации формы, поиск input ведется по атрибуту name
    $('#credit-card').validate({
        rules: {
            cardNumber1: { //для номера карты 1 поле
                required: true,
                rangelength: [4, 4],
                digits: true
            },
            cardNumber2: { //для номера карты 2 поле
                required: true,
                rangelength: [4, 4],
                digits: true
            },
            cardNumber3: { //для номера карты 3 поле
                required: true,
                rangelength: [4, 4],
                digits: true
            },
            cardNumber4: { //для номера карты 4 поле
                required: true,
                rangelength: [4, 4],
                digits: true
            },

            cardHolder: { //для имени владельца карты
                required: true,
                minlength: 4,
                lettersonly: true
            },

            cardCvv: { // для кода cvv
                required: true,
                rangelength: [3, 3],
                digits: true
            }
        }
    });
});