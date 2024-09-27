let budiVotes = 0;
let sitiVotes = 0;

// Fungsi untuk memberikan suara
function vote(kandidat) {
    if (kandidat === 'Budi') {
        budiVotes++;
        document.getElementById('budi-votes').textContent = budiVotes;
    } else if (kandidat === 'Siti') {
        sitiVotes++;
        document.getElementById('siti-votes').textContent = sitiVotes;
    }
}

// Fungsi untuk menampilkan hasil akhir
function showResult() {
    document.getElementById('budi-result').textContent = budiVotes;
    document.getElementById('siti-result').textContent = sitiVotes;

    let winner = budiVotes > sitiVotes ? 'Budi' : 'Siti';
    if (budiVotes === sitiVotes) {
        alert('Hasil seri! Tidak ada pemenang.');
    } else {
        alert('Pemenang adalah: ' + winner);
    }
}
