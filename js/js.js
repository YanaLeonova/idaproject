$(document).ready(function () {

        $.validator.addClassRules({
            cardNumber1: {
                required: true,
                rangelength: [4, 4],
                digits: true
            },

            cardNumber2: {
                required: true,
                rangelength: [4, 4],
                digits: true
            },

            cardNumber3: {
                required: true,
                rangelength: [4, 4],
                digits: true
            },

            cardNumber4: {
                required: true,
                rangelength: [4, 4],
                digits: true
            },

            cardHolder: {
                required: true,
                minlength: 4,
                lettersonly: true
            },

            cardCvv: {
                required: true,
                rangelength: [3, 3],
                digits: true
            }
        });


    $.validator.addMethod( "lettersonly", function( value, element ) {
        return this.optional( element ) || /^[a-z]+$/i.test( value );
    });


        $('form').validate();


    }
);