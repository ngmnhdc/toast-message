function toast({ title = "", message = '', type = 'info', duration = 3000 }) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div')

        // Auto remove toast
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast)
        }, duration + 500)

        // Remove toast when clicked
        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(autoRemoveId)
            }
        }

        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-circle',
            error: 'fas fa-exclamation-circle',
        }
        const icon = icons[type]
        const delay = (duration / 1000).toFixed(2)

        toast.classList.add('toast', `toast--${type}`)
        toast.style.animation = `slideInLeft ease 0.5s, fadeOut linear 0.5s ${delay}s forwards`
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `
        main.appendChild(toast)
    }
}

function showSuccessToast() {
    toast({
        title: 'Success',
        message: 'Congratulation! Your request has been received.',
        type: 'success',
        duration: 5000
    })
}

function showInfoToast() {
    toast({
        title: 'Info',
        message: 'Here is something that you might like to know.',
        type: 'info',
        duration: 5000
    })
}

function showWarningToast() {
    toast({
        title: 'Warning',
        message: 'Looks like there was a problem with your request.',
        type: 'warning',
        duration: 5000
    })
}

function showErrorToast() {
    toast({
        title: 'Error',
        message: 'Something went wrong. Please try again later!',
        type: 'error',
        duration: 5000
    })
}