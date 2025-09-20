// Calculator Widget for WordPress + Elementor
(function() {
    'use strict';
    
    // Widget CSS
    const widgetCSS = `
        .btr-calculator-widget {
            max-width: 1200px;
            margin: 0 auto;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: white;
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .btr-calculator-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: start;
        }

        .btr-calculator-form {
            background: #f8fafc;
            border: 2px solid #e2e8f0;
            border-radius: 20px;
            padding: 0;
            overflow: hidden;
        }

        .btr-form-header {
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }

        .btr-form-header h3 {
            font-size: 24px;
            font-weight: 700;
            margin: 0 0 8px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
        }

        .btr-form-header p {
            font-size: 16px;
            opacity: 0.9;
            line-height: 1.5;
            margin: 0;
        }

        .btr-form-content {
            padding: 30px;
        }

        .btr-form-group {
            margin-bottom: 24px;
        }

        .btr-form-label {
            display: block;
            font-weight: 600;
            color: #374151;
            margin-bottom: 8px;
            font-size: 16px;
        }

        .btr-form-select, .btr-form-input {
            width: 100%;
            padding: 14px 16px;
            border: 2px solid #e5e7eb;
            border-radius: 12px;
            font-size: 16px;
            background: white;
            transition: all 0.2s ease;
            box-sizing: border-box;
        }

        .btr-form-select:focus, .btr-form-input:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .btr-form-select {
            cursor: pointer;
            appearance: none;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 12px center;
            background-size: 16px;
            padding-right: 40px;
        }

        .btr-cost-display {
            background: #fef3cd;
            border: 2px solid #f59e0b;
            border-radius: 12px;
            padding: 20px;
            text-align: center;
            margin-bottom: 24px;
        }

        .btr-cost-label {
            font-size: 14px;
            color: #92400e;
            margin-bottom: 8px;
        }

        .btr-cost-value {
            font-size: 24px;
            font-weight: 700;
            color: #f59e0b;
        }

        .btr-submit-btn {
            width: 100%;
            background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
            color: white;
            border: none;
            padding: 16px 24px;
            font-size: 18px;
            font-weight: 700;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .btr-submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(249, 115, 22, 0.3);
        }

        .btr-info-section h2 {
            font-size: 48px;
            font-weight: 800;
            color: #3b82f6;
            line-height: 1.1;
            margin-bottom: 24px;
        }

        .btr-info-description {
            font-size: 18px;
            color: #6b7280;
            line-height: 1.6;
            margin-bottom: 32px;
        }

        .btr-stats-card {
            background: linear-gradient(135deg, #ede9fe 0%, #e0e7ff 100%);
            border: 2px solid #c7d2fe;
            border-radius: 16px;
            padding: 24px;
            margin-bottom: 32px;
        }

        .btr-stats-header {
            display: flex;
            align-items: center;
            margin-bottom: 16px;
        }

        .btr-stats-icon {
            width: 24px;
            height: 24px;
            margin-right: 12px;
            color: #f97316;
        }

        .btr-stats-title {
            font-size: 20px;
            font-weight: 700;
            color: #3b82f6;
            margin: 0;
        }

        .btr-stats-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
        }

        .btr-stat-item {
            font-size: 14px;
        }

        .btr-stat-label {
            color: #6b7280;
            margin-bottom: 4px;
        }

        .btr-stat-value {
            font-weight: 700;
            color: #3b82f6;
            font-size: 16px;
        }

        .btr-included-list h4 {
            font-size: 18px;
            font-weight: 700;
            color: #3b82f6;
            margin-bottom: 16px;
        }

        .btr-included-items {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .btr-included-items li {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            color: #6b7280;
            font-size: 16px;
        }

        .btr-included-items li::before {
            content: "•";
            color: #f97316;
            font-weight: bold;
            font-size: 20px;
            margin-right: 12px;
        }

        @media (max-width: 768px) {
            .btr-calculator-widget {
                padding: 20px;
            }

            .btr-calculator-grid {
                grid-template-columns: 1fr;
                gap: 40px;
            }

            .btr-info-section h2 {
                font-size: 36px;
            }

            .btr-stats-grid {
                grid-template-columns: 1fr;
            }
        }
    `;

    // Widget HTML
    const widgetHTML = `
        <div class="btr-calculator-widget">
            <div class="btr-calculator-grid">
                <div class="btr-calculator-form">
                    <div class="btr-form-header">
                        <h3>
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                            </svg>
                            Рассчитайте предварительную стоимость
                        </h3>
                        <p>Получите примерную стоимость вашего проекта за 30 секунд</p>
                    </div>
                    <div class="btr-form-content">
                        <div class="btr-form-group">
                            <label class="btr-form-label" for="btr-object-type">Тип объекта</label>
                            <select class="btr-form-select" id="btr-object-type">
                                <option value="">Выберите тип объекта</option>
                                <option value="apartment">Квартира</option>
                                <option value="house">Частный дом</option>
                                <option value="office">Офис</option>
                                <option value="production">Производство</option>
                            </select>
                        </div>

                        <div class="btr-form-group">
                            <label class="btr-form-label" for="btr-area">Площадь, м²</label>
                            <input class="btr-form-input" type="number" id="btr-area" placeholder="Введите площадь">
                        </div>

                        <div class="btr-form-group">
                            <label class="btr-form-label" for="btr-service">Основная услуга</label>
                            <select class="btr-form-select" id="btr-service">
                                <option value="">Выберите услугу</option>
                                <option value="heating">Отопление</option>
                                <option value="water">Водоснабжение</option>
                                <option value="sewage">Канализация</option>
                                <option value="complex">Комплексное решение</option>
                            </select>
                        </div>

                        <div class="btr-cost-display">
                            <div class="btr-cost-label">Предварительная стоимость:</div>
                            <div class="btr-cost-value" id="btr-cost-result">Заполните все поля</div>
                        </div>

                        <button class="btr-submit-btn" type="button" id="btr-submit">Получить точный расчет</button>
                    </div>
                </div>

                <div class="btr-info-section">
                    <h2>Узнайте стоимость вашего проекта</h2>
                    <p class="btr-info-description">
                        Наш калькулятор поможет вам получить предварительную оценку стоимости работ. 
                        Для точного расчета наш инженер приедет к вам бесплатно.
                    </p>

                    <div class="btr-stats-card">
                        <div class="btr-stats-header">
                            <svg class="btr-stats-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                            </svg>
                            <h3 class="btr-stats-title">Средняя стоимость проектов</h3>
                        </div>
                        <div class="btr-stats-grid">
                            <div class="btr-stat-item">
                                <div class="btr-stat-label">Квартира:</div>
                                <div class="btr-stat-value">150-300 тыс. ₽</div>
                            </div>
                            <div class="btr-stat-item">
                                <div class="btr-stat-label">Частный дом:</div>
                                <div class="btr-stat-value">300-800 тыс. ₽</div>
                            </div>
                            <div class="btr-stat-item">
                                <div class="btr-stat-label">Офис:</div>
                                <div class="btr-stat-value">200-500 тыс. ₽</div>
                            </div>
                            <div class="btr-stat-item">
                                <div class="btr-stat-label">Производство:</div>
                                <div class="btr-stat-value">от 1 млн ₽</div>
                            </div>
                        </div>
                    </div>

                    <div class="btr-included-list">
                        <h4>В стоимость входит:</h4>
                        <ul class="btr-included-items">
                            <li>Проектирование и согласование</li>
                            <li>Все материалы и оборудование</li>
                            <li>Монтажные работы</li>
                            <li>Пуско-наладочные работы</li>
                            <li>Гарантийное обслуживание</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Calculator logic
    function calculateCost() {
        const objectType = document.getElementById('btr-object-type').value;
        const area = document.getElementById('btr-area').value;
        const resultElement = document.getElementById('btr-cost-result');

        if (!area || !objectType) {
            resultElement.textContent = 'Заполните все поля';
            return;
        }

        const basePrices = {
            'apartment': 5000,
            'house': 8000, 
            'office': 6000,
            'production': 10000
        };

        const basePrice = basePrices[objectType] || 5000;
        const result = parseInt(area) * basePrice;
        
        resultElement.textContent = `${result.toLocaleString()} ₽`;
    }

    // Initialize widget
    function initBTRCalculator() {
        // Add CSS to head if not already added
        if (!document.getElementById('btr-calculator-styles')) {
            const style = document.createElement('style');
            style.id = 'btr-calculator-styles';
            style.textContent = widgetCSS;
            document.head.appendChild(style);
        }

        // Find all containers and initialize widgets
        const containers = document.querySelectorAll('.btr-calculator-container');
        
        containers.forEach(container => {
            if (!container.querySelector('.btr-calculator-widget')) {
                container.innerHTML = widgetHTML;
                
                // Add event listeners for this widget instance
                const objectSelect = container.querySelector('#btr-object-type');
                const areaInput = container.querySelector('#btr-area');
                const serviceSelect = container.querySelector('#btr-service');
                const submitBtn = container.querySelector('#btr-submit');
                
                if (objectSelect) objectSelect.addEventListener('change', calculateCost);
                if (areaInput) areaInput.addEventListener('input', calculateCost);
                if (serviceSelect) serviceSelect.addEventListener('change', calculateCost);
                
                if (submitBtn) {
                    submitBtn.addEventListener('click', function() {
                        // Customize this action based on your needs
                        if (typeof btrCalculatorSubmit === 'function') {
                            const data = {
                                objectType: objectSelect.value,
                                area: areaInput.value,
                                service: serviceSelect.value
                            };
                            btrCalculatorSubmit(data);
                        } else {
                            alert('Форма будет отправлена. Настройте функцию btrCalculatorSubmit для обработки данных.');
                        }
                    });
                }
            }
        });
    }

    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBTRCalculator);
    } else {
        initBTRCalculator();
    }

    // Also initialize on window load for safety
    window.addEventListener('load', initBTRCalculator);

    // Export global function for manual initialization
    window.initBTRCalculator = initBTRCalculator;

})();

/* 
ИНСТРУКЦИЯ ДЛЯ ИСПОЛЬЗОВАНИЯ В WORDPRESS + ELEMENTOR:

1. Загрузите этот файл в папку /wp-content/themes/your-theme/js/ или используйте плагин для кастомных скриптов

2. Подключите скрипт в functions.php:
function enqueue_btr_calculator() {
    wp_enqueue_script('btr-calculator', get_template_directory_uri() . '/js/calculator-widget.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'enqueue_btr_calculator');

3. В Elementor добавьте виджет HTML и вставьте:
<div class="btr-calculator-container"></div>

4. (Опционально) Для обработки отправки формы добавьте в functions.php или в отдельный скрипт:
<script>
function btrCalculatorSubmit(data) {
    // Здесь ваша логика отправки данных
    console.log('Данные калькулятора:', data);
    // Например, отправка на сервер или показ модального окна
}
</script>

5. Калькулятор автоматически инициализируется при загрузке страницы
*/