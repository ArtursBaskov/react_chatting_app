
const formValidationOutput = () => {
    const formMsgs = {
        usernameField: [{

            //tells user that something in his input is wrong, this array contains warnings with styles
            messages: [{
                emptyField: {
                    text: 'You should enter your username. ',
                    style: 'warning'
                },
                shortUsername: {
                    text: 'Your username have to be lonegr than 3 characters. ',
                    style: 'warning'
                },
                longUsername: {
                    text: 'Your username is too long. ',
                    style: 'warning'
                },
                forbdidenSymbols: {
                    text: 'Your usename contains forbidden symbols. ',
                    style: 'warning'
                }
            }]

        }],
        
        emailField: [{

            //tells user that something in his input is wrong, this array contains warnings with styles
            messages: [{
                emptyField: {
                    text: 'You should enter your email. ',
                    style: 'warning'
                },
                wrongFormat:{
                    text: 'Wrong email format. ',
                    style: 'warning'
                }
            }]

        }],

        passwordFields: [{

            messages: [{
                emptyField: {
                    text: 'You should enter your password',
                    style: 'warning'
                },
                passwordsDontMatch: {
                    text: 'Passwords do not match. ',
                    style: 'warning'
                },
                passwordTooLong: {
                    text: 'Password cannot be longer that 40 characters. ',
                    style: 'warning'
                },
                weakPassword: {
                    text: 'Your password is too weak. ',
                    suggest: '',
                    style: 'warning'
                },
                mediumPassword: {
                    text: 'Medium password. ',
                    suggest: '',
                    style: 'mediumPass'
                },
                strongPassword: {
                    text: 'Strong password. ',
                    style: 'strongPass'
                }

            }],
            easyPassword: ['qwerty', 'wasd']

        }]
    };
    return formMsgs;
}
export default formValidationOutput;