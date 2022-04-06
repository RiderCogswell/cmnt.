/* Previous Topic */
const previousTopic = async () => {
    const nav = {
        nav: 'prev'
    }
    const response = await fetch('/nav', {
        method: 'POST',
        body: JSON.stringify(nav),
        headers: { 'Content-Type': 'application/json' },
    });

    let result = await response.text();

    window.location.replace(`/topic/${result}`)
};

document.querySelector('#previousTopic').addEventListener('click', previousTopic);