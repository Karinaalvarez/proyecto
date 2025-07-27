const SymbolicKeyboard = {
    // Inicializa el teclado simbólico en un contenedor específico
    init: function(containerId, targetInputId) {
        const container = document.getElementById(containerId);
        const targetInput = document.getElementById(targetInputId);
        
        if (!container || !targetInput) {
            console.error('Contenedor o input objetivo no encontrado');
            return;
        }
        
        // Definir los botones del teclado simbólico
        const keyboardButtons = [
            // Operadores básicos
            { text: '+', value: '+', class: 'btn-warning' },
            { text: '−', value: '-', class: 'btn-warning' },
            { text: '×', value: '*', class: 'btn-warning' },
            { text: '÷', value: '/', class: 'btn-warning' },
            
            // Funciones comunes
            { text: 'sin', value: 'sin(', class: 'btn-info' },
            { text: 'cos', value: 'cos(', class: 'btn-info' },
            { text: 'tan', value: 'tan(', class: 'btn-info' },
            { text: 'ln', value: 'log(', class: 'btn-info' },
            
            // Potencias y raíces
            { text: 'x²', value: '^2', class: 'btn-info' },
            { text: 'x³', value: '^3', class: 'btn-info' },
            { text: 'xⁿ', value: '^', class: 'btn-info' },
            { text: '√', value: 'sqrt(', class: 'btn-info' },
            
            // Constantes
            { text: 'π', value: 'pi', class: 'btn-secondary' },
            { text: 'e', value: 'e', class: 'btn-secondary' },
            
            // Paréntesis
            { text: '(', value: '(', class: 'btn-secondary' },
            { text: ')', value: ')', class: 'btn-secondary' },
            
            // Variables
            { text: 'x', value: 'x', class: 'btn-light' },
            { text: 'y', value: 'y', class: 'btn-light' },
            
            // Funciones adicionales para cálculo
            { text: 'exp', value: 'exp(', class: 'btn-info' },
            { text: 'abs', value: 'abs(', class: 'btn-info' },
            { text: 'log₁₀', value: 'log10(', class: 'btn-info' },
            { text: 'asin', value: 'asin(', class: 'btn-info' },
            { text: 'acos', value: 'acos(', class: 'btn-info' },
            { text: 'atan', value: 'atan(', class: 'btn-info' },
            { text: 'sinh', value: 'sinh(', class: 'btn-info' },
            { text: 'cosh', value: 'cosh(', class: 'btn-info' },
            { text: 'tanh', value: 'tanh(', class: 'btn-info' }
        ];
        
        // Crear el contenedor del teclado
        const keyboardContainer = document.createElement('div');
        keyboardContainer.className = 'symbolic-keyboard';
        
        // Crear filas para organizar los botones (4 botones por fila)
        const buttonsPerRow = 4;
        for (let i = 0; i < keyboardButtons.length; i += buttonsPerRow) {
            const row = document.createElement('div');
            row.className = 'row g-2 mt-2';
            
            // Añadir botones a la fila actual
            for (let j = 0; j < buttonsPerRow && i + j < keyboardButtons.length; j++) {
                const button = keyboardButtons[i + j];
                const col = document.createElement('div');
                col.className = 'col-3';
                
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = `btn ${button.class} w-100 py-2`;
                btn.textContent = button.text;
                btn.dataset.value = button.value;
                
                // Añadir evento click para insertar el valor en el input
                btn.addEventListener('click', function() {
                    const cursorPos = targetInput.selectionStart;
                    const textBefore = targetInput.value.substring(0, cursorPos);
                    const textAfter = targetInput.value.substring(cursorPos);
                    
                    targetInput.value = textBefore + this.dataset.value + textAfter;
                    
                    // Colocar el cursor después del texto insertado
                    const newCursorPos = cursorPos + this.dataset.value.length;
                    targetInput.focus();
                    targetInput.setSelectionRange(newCursorPos, newCursorPos);
                });
                
                col.appendChild(btn);
                row.appendChild(col);
            }
            
            keyboardContainer.appendChild(row);
        }
        
        // Añadir el teclado al contenedor
        container.appendChild(keyboardContainer);
    }
};