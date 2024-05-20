document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('[data-tab-target]');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget);
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active');
            });
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            tab.classList.add('active');
            target.classList.add('active');
        });
    });

    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            const accordionContent = item.querySelector('.accordion-content');
            item.classList.toggle('active');

            if (item.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                button.textContent = 'Fechar';
            } else {
                accordionContent.style.maxHeight = 0;
                button.textContent = 'Abrir';
            }
        });
    });
});
