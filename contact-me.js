// TODO
/*
1. On "submit" action, check the following:
- First Name and Last Name should be 3 characters or more
- Email should match regex /\w+@\w+\.\w+/

2. For each item that is not valid, set invalid class on the parent of the element and show a message to the user

3. For each item that is valid, remove invalid class on the parent of the element

4. If any item is not valid, preventDefault() on the submit listener and log 'Bad input' to console
*/

$(document).ready( function () {
    var submitted = false;
    
    /*
    * $jquery item as input, validate and perform 1-4
    */
    const checkData = function($jQueryItem) {
        // if/else to set pattern for email or first/last name
        // then check whether data is null or not null
        if ($jQueryItem.attr('id') === ($('#email').attr('id'))) {
            let pattern = /\w+@\w+\.\w+/;

            if (($jQueryItem.val()).match(pattern) != null) {
                //validateAction(true, $firstName);
                $jQueryItem.attr('class', '');
                //console.log('email valid');
                submitted = true;
            } else {
                //(validateAction(false, $firstName));
                //$jQueryItem.attr('class', 'invalid');
                //$jQueryItem.text('invalid');
                //console.log('Bad Input: email invalid');
                //$(".btn-primary").prop('disabled', true);
                $jQueryItem.val(''); // clear user input
                alert('Bad Email Input');
                submitted = false;
            }
            
        } else {
            let pattern = /\w{3}/;

            if (($jQueryItem.val()).match(pattern) != null) {
                //validateAction(true, $firstName);
                $jQueryItem.attr('class', '');
                //console.log('name valid')
                submitted = true;
            } else {
                //(validateAction(false, $firstName));
                //$jQueryItem.attr('class', 'invalid');
                //$jQueryItem.text('invalid');
                //console.log('Bad Input: name invalid');
                $jQueryItem.val(''); // clear user input
                alert('Name must be more than three letters.');
                //$(".btn-primary").prop('disabled', true);
                submitted = false;
            }
        }
        return;
    }

    const checkDropDown = function($jQueryItem) {
        console.log('here drop checkDropDown');
        // before we get started... remove the old inputs if they exist
        if ($('#new-input').parent().text() != '') {
            $('#new-input').parent().remove();
        }
        
        let contactType = ($('#contact-kind')).val();
        if (contactType === ('technical')) {
            console.log('technical');
            // create new input item and add to bottom
            var $for = 'new-input';
            var $id = 'new-input';
            var $type = 'text';
            var $name = 'code-type';
            var $text = 'Code Type: '
 
            
        } else if (contactType === ('business')){
            console.log('business');
            // create new input item and add to bottom
            var $for = 'new-input';
            var $id = 'new-input';
            var $type = 'text';
            var $name = 'business-URL';
            var $text = 'Business URL: '
            
        } else {
            return; // can be blank
        }
        const $label = $('<label>');
        $label.text($text);
        const $input = $('<input>');
        $input.attr('id', $id);

        // bundle the elements for style
        $label.append($input);
        ($('.form-group-contact-reason')).append($label);
        return;
    }

    const checkMessage = function($jQueryItem) {
        let pattern = /\s*(?:[\w\.]\s*){10}$/;

        if (($jQueryItem.val()).match(pattern) != null) {
            //send to a database somewhere!... with more validation...
            submitted = true;
         } else {
            alert('Needs more than 10 characters.');
            submitted = false;
        }
        return;
    }
    
    
    /**
    * collect data from form
    */
    const getData = function(event) {
        event.preventDefault(); // don't remove input from form on button click 'Sign up'
        checkData($('#first-name'));
        checkData($('#last-name'));
        checkData($('#email'));
        //checkDropDown($('#contact-kind'));
        checkMessage($('#message'));
        if (submitted) {
            alert('Thanks for your input!')
        }
    };
    
    /*
    * event listener to 'Sign up'
    */
    $(".btn").click(getData);
    $("#contact-kind").click(checkDropDown);
});