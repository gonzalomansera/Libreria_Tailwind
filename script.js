document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    const headerRight = document.querySelector('.header-right');

    if (menuToggle && navList && headerRight) {
        menuToggle.addEventListener('click', () => {
            // Alterna la clase 'active' para mostrar/ocultar el menú
            navList.classList.toggle('active');
            headerRight.classList.toggle('active');
            
            // Cambia el icono del botón
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navList.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Cerrar el menú al hacer clic en un enlace
        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                headerRight.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });

        // Cerrar el menú al hacer clic fuera de él
        document.addEventListener('click', (e) => {
            if (!headerRight.contains(e.target) && !menuToggle.contains(e.target)) {
                navList.classList.remove('active');
                headerRight.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
});