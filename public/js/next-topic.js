/* Next Topic */
const nextTopic = async () => {
    const nav = {
        nav: 'next'
    }
    const response = await fetch('/nav', {
        method: 'POST',
        body: JSON.stringify(nav),
        headers: { 'Content-Type': 'application/json' },
    });

    let result = await response.text();

    window.location.replace(`/topic/${result}`)
};

document.querySelector('#nextTopic').addEventListener('click', nextTopic);