document.getElementById('search').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const rows = document.querySelectorAll('#musicTable tbody tr');
    
    rows.forEach(row => {
        const artist = row.cells[0].textContent.toLowerCase();
        const song = row.cells[1].textContent.toLowerCase();
        
        if (artist.includes(searchValue) || song.includes(searchValue)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.setAttribute('target', '_blank');
    });
});