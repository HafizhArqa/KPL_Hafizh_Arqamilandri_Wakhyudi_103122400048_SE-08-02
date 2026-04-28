require('dotenv').config();

const BASE_API = process.env.BASE_API;

async function konversiMataUang(jumlahRupiah) {
    try {
        const response = await fetch(BASE_API);
        const data = await response.json();
        
        const tanggal = data.date;
        const kursCNH = data.idr.cnh;
        const kursEUR = data.idr.eur;

        const hasilCNH = jumlahRupiah * kursCNH;
        const hasilEUR = jumlahRupiah * kursEUR;

        const formatOpsiTanggal = { day: 'numeric', month: 'long', year: 'numeric' };
        const tanggalLokal = new Intl.DateTimeFormat('id-ID', formatOpsiTanggal).format(new Date(tanggal));

        const formatIDR = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(jumlahRupiah).replace(/\s/g, ''); 

        const formatCNH = new Intl.NumberFormat('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(hasilCNH);

        const formatEUR = new Intl.NumberFormat('id-ID', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(hasilEUR);
        console.log(`Kurs ${formatIDR} pada ${tanggalLokal} adalah CNH ${formatCNH} dan ${formatEUR} €`);

    } catch (error) {
        console.error("Gagal mengambil data:", error.message);
    }
}

const inputUser = process.argv[2] || 25000;
konversiMataUang(inputUser);