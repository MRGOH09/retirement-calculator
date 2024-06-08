document.getElementById('retirementForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const currentAge = document.getElementById('currentAge').value;
    const retirementAge = document.getElementById('retirementAge').value;
    const epfRate = document.getElementById('epfRate').value;
    const currentEpf = document.getElementById('currentEpf').value;

    const data = {
        currentAge: currentAge,
        retirementAge: retirementAge,
        epfRate: epfRate,
        currentEpf: currentEpf
    };

    fetch('https://your-server-endpoint/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('futureValue').innerText = data.futureValue.toFixed(2);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
