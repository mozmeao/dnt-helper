//  This function is for demo purposes only
function showInDemo() {
    const dntStatus = window.dntHelper();

    let dntEnabled = 'enabled! :)';
    let dntDisabled = 'disabled :(';
    let dntValue = document.getElementById('dnt-value');
    if (dntStatus === true) {
        dntValue.innerText = dntEnabled;
        dntValue.style.color = 'seagreen';
    } else {
        dntValue.innerText = dntDisabled;
        dntValue.style.color = 'tomato';
    }
}

showInDemo();
