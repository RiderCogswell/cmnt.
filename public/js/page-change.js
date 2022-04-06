const nextTopic = () => {
    if ('click') {
        window.location.reload();
    }
};

const previousTopic = () => {
    if ('click') {

    }
};

document.querySelector('#nextTopic').addEventListener('click', nextTopic);
document.querySelector('#previousTopic').addEventListener('click', previousTopic);