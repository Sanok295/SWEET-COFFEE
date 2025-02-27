function showTab(index) {
    const tabs = document.querySelectorAll('.tab');
    const grids = document.querySelectorAll('.grid-container');

    tabs.forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
        grids[i].classList.toggle('active', i === index);
    });
}