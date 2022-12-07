// 
/*
1. On "submit" action, check the following:
- First Name and Last Name should be 3 characters or more
- Email should match regex /\w+@\w+\.\w+/

2. For each item that is not valid, set invalid class on the parent of the element and show a message to the user

3. For each item that is valid, remove invalid class on the parent of the element

4. If any item is not valid, preventDefault() on the submit listener and log 'Bad input' to console
*/

$(document).ready( function () {
    
    /*
    * $jquery item as input, validate and perform 1-4
    */
    const checkData = function($jQueryItem) {
        // if/else to set patter for email or first/last name
        if ($jQueryItem.attr('id') === ($('#email').attr('id'))) {
            let pattern = /\w+@\w+\.\w+/;

            if (($jQueryItem.val()).match(pattern) != null) {
                //validateAction(true, $firstName);
                $jQueryItem.attr('class', '');
                //console.log('email valid');
            } else {
                //(validateAction(false, $firstName));
                $jQueryItem.attr('class', 'invalid');
                $jQueryItem.text('invalid');
                console.log('email invalid');
                $(".btn-primary").prop('disabled', true);
            }
            
        } else {
            let pattern = /\w{3}/;

            if (($jQueryItem.val()).match(pattern) != null) {
                //validateAction(true, $firstName);
                $jQueryItem.attr('class', '');
                //console.log('name valid')
            } else {
                //(validateAction(false, $firstName));
                $jQueryItem.attr('class', 'invalid');
                $jQueryItem.text('invalid');
                console.log('name invalid');
                $(".btn-primary").prop('disabled', true);
            }
        }
    }
    
    
    /**
    * collect data from form
    */
    const getData = function(event) {
        event.preventDefault(); // don't remove input from form on button click 'Sign up'
        checkData($('#first-name'));
        checkData($('#last-name'));
        checkData($('#email'));
    };
    
    /*
    * event listener to 'Sign up'
    */
    $(".btn-primary").click(getData);
});