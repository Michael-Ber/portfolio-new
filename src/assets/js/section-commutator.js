export const sectionCommutator = () => {
    const sections = document.querySelectorAll('section');
    const linksWrapper = document.querySelector('.links-header__list');

    linksWrapper.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.hash) {
            const showSection = Array.from(sections).filter(section => section.id === e.target.hash.substring(1))[0];
            sections.forEach(section => section.style.display = 'none');
            if (e.target.hash === '#about') {
                showSection.style.display = 'flex';
            } else {
                showSection.style.display = 'block';
            }

        }
    })

}