document.addEventListener('DOMContentLoaded', function() {
    // Обработка кнопки "Добавить в контакты"
    const addContactBtn = document.getElementById('addContactBtn');
    addContactBtn.addEventListener('click', function() {
        const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:Кондратьев Никита Андреевич\nTEL:+79992059681\nEMAIL:kondratev.design@mail.com\nEND:VCARD`;
        const blob = new Blob([vcard], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Кондратьев Никита.vcf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    // Защита от ошибки логотипа
    const logo = document.getElementById('logo');
    if (logo) {
        logo.onerror = function() {
            this.style.display = 'none';
            document.querySelector('.logo-container').style.background = 'linear-gradient(135deg, #4a6fa5 0%, #0088cc 100%)';
        };
    }
});