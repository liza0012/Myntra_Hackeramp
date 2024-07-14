const sustainabilityData = {
    cotton: 100,
    jute: 90,
    polyester: 20,
    'poly-chiffon': 0,
    linen: 85,
    wool: 50,
    nylon: 0,
    'cotton blend': 50,
    'stretch fabric': 40,
    // Add more materials as needed
};

document.getElementById('check-sustainability').addEventListener('click', () => {
    const materials = Array.from(document.querySelectorAll('#material-list li'))
                           .map(li => li.innerText.trim().toLowerCase());
    let totalScore = 0;
    let sustainableCount = 0;

    materials.forEach(material => {
        const score = sustainabilityData[material];
        
            totalScore += score;
            sustainableCount++;
        
    });

    const averageScore = sustainableCount > 0 ? totalScore / sustainableCount : 0;
    displaySustainability(averageScore);
});

function displaySustainability(score) {
    const scoreElement = document.getElementById('sustainability-score');
    const barElement = document.getElementById('sustainability-bar');
    
    scoreElement.innerText = `Sustainability Score: ${score.toFixed(2)}%`;

    let colorClass = '';
    if (score >= 70) {
        colorClass = 'green';
    } else if (score >= 40) {
        colorClass = 'yellow';
    } else {
        colorClass = 'red';
    }

    barElement.className = `sustainability-bar ${colorClass}`;
    barElement.style.width = `${score}%`;
}