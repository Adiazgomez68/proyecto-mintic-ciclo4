import Swal from 'sweetalert2'

export function succesCreate() {
    Swal.fire({
        title: 'Successful Registration',
        text: 'User has been created',
        icon: 'success'
    }).then(() => {
        window.location.reload(true);
    })
}

// -------------------------------------------------------

export function succesLogin() {
    Swal.fire({
        title: 'Successful Login',
        icon: 'success'
    }).then(() => {
        window.location.pathname = '/users';
    })
}

export function errorLogin() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'The data does not match',
    })
}

// -------------------------------------------------------

export function succesModify() {
    Swal.fire({
        title: 'Successful Modification',
        text: 'User has been modified',
        icon: 'success'
    }).then(() => {
        window.location.reload(true);
    })
}


