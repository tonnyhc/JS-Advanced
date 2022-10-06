function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result');
    gradient.addEventListener('mousemove', (event) => {
        result.textContent = (`${(event.offsetX / gradient.offsetWidth * 100).toFixed(0)}%`);
    })
    gradient.addEventListener('mouseout', (event) =>{
        result.textContent = '';
    })
}

