document.addEventListener('DOMContentLoaded', function () {
    const temperatureInput = document.getElementById('temperatureInput');
    const fromScale = document.getElementById('fromScale');
    const toScale = document.getElementById('toScale');
    const convertBtn = document.getElementById('convertBtn');
    const result = document.getElementById('result');

    convertBtn.addEventListener('click', function () {
        const fromValue = parseFloat(temperatureInput.value);
        const fromUnit = fromScale.value;
        const toUnit = toScale.value;

        // Perform the temperature conversion
        let convertedValue;

        if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
            convertedValue = (fromValue * 9/5) + 32;
        } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
            convertedValue = fromValue + 273.15;
        } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
            convertedValue = (fromValue - 32) * 5/9;
        } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
            convertedValue = (fromValue - 32) * 5/9 + 273.15;
        } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
            convertedValue = fromValue - 273.15;
        } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
            convertedValue = (fromValue - 273.15) * 9/5 + 32;
        } else {
            convertedValue = fromValue; // Same unit
        }

        result.textContent = `Converted: ${convertedValue.toFixed(2)} ${toUnit}`;
    });
});
