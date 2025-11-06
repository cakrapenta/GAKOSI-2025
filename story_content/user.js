function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5W7HuzhZ4Ss":
        Script1();
        break;
      case "5hTpW3D7Syf":
        Script2();
        break;
      case "5gQ7KF7qjzc":
        Script3();
        break;
      case "5kE7g0NbDNo":
        Script4();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";

audio.load();

audio.play();
}

function Script2()
{
  var player = GetPlayer();




var nama = player.GetVar("Nama");

var j1 = player.GetVar("Data1");

var j2 = player.GetVar("Klaim1");

var j3 = player.GetVar("Warrant1");

var j4 = player.GetVar("Backing1");

var j5 = player.GetVar("Qualifier1");
var j6 = player.GetVar("Rebuttal1");


var tanggal = new Date().toLocaleDateString("id-ID");




var isiFile = "Nama Siswa: " + nama + "\n";

isiFile += "Tanggal: " + tanggal + "\n\n";


isiFile += "1. Hitung volume dan luas permukaan dari masing-masing bangun ruang (kemasan A dan B). Tampilkan perhitungan secara lengkap!:\n";

isiFile += j1 + "\n\n";


isiFile += "2. Kemasan mana yang menurut kelompok kalian lebih efisien? Jelaskan pendapat kalian secara jelas!:\n";

isiFile += j2 + "\n\n";


isiFile += "3. Apakah data volume dan luas permukaan tersebut data mendukung pilihan kalian? Mengapa demikian?:\n";

isiFile += j3 + "\n\n";


isiFile += "4. Apa konsep atau prinsip yang menunjukkan bahwa kemasan yang kalian pilih memang efisien?:\n";

isiFile += j4 + "\n\n";


isiFile += "5. Dalam kondisi seperti apa kemasan pilihan kalian dianggap paling efisien? Apakah berlaku untuk semua produk?:\n";

isiFile += j5 + "\n\n";




isiFile += "6. Dalam kondisi seperti apa kemasan lain bisa lebih baik? Jelaskan kelemahan dari pilihan kalian sendiri!\n";

isiFile += j6 + "\n\n";




var textFile = new Blob([isiFile], { type: 'text/plain' });

var downloadLink = document.createElement("a");

downloadLink.href = URL.createObjectURL(textFile);
downloadLink.download = "Jawaban Kode Baterai_" + nama + ".txt";

document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);
}

function Script3()
{
  var player = GetPlayer();




var nama = player.GetVar("Nama");

var k1 = player.GetVar("Data2");

var k2 = player.GetVar("Klaim2");

var k3 = player.GetVar("Warrant2");

var k4 = player.GetVar("Backing2");

var k5 = player.GetVar("Qualifier2");
var k6 = player.GetVar("Rebuttal2");

var tanggal = new Date().toLocaleDateString("id-ID");




var isiFile = "Nama Siswa: " + nama + "\n";

isiFile += "Tanggal: " + tanggal + "\n\n";


isiFile += "1. Berapa volume masing-masing bangun? Berapa luas permukaan masing-masing bangun jika diperlukan bahan penutup seluruh sisi luar?:\n";

isiFile += k1 + "\n\n";


isiFile += "2. Desain tempat penyimpanan mana yang menurut kalian lebih efisien atau layak dipilih? Jelaskan secara tegas!:\n";

isiFile += k2 + "\n\n";


isiFile += "3. Jelaskan mengapa hasil perhitungan kalian (volume dan luas permukaan) mendukung pilihan kalian!:\n";

isiFile += k3 + "\n\n";


isiFile += "4. Apa alasan tambahan seperti bentuk alas, stabilitas, atau kemudahan konstruksi yang mendukung pilihan kalian?:\n";

isiFile += k4 + "\n\n";


isiFile += "5. Apakah pilihan kalian tetap yang terbaik untuk semua jenis alat olahraga kecil?:\n";

isiFile += k5 + "\n\n";




isiFile += "6. Dalam situasi seperti apa desain lainnya bisa lebih unggul daripada desain pilihan kalian?:\n";

isiFile += k6 + "\n\n";



var textFile = new Blob([isiFile], { type: 'text/plain' });

var downloadLink = document.createElement("a");

downloadLink.href = URL.createObjectURL(textFile);
downloadLink.download = "Jawaban Kode Buku_" + nama + ".txt";

document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);
}

function Script4()
{
  var player = GetPlayer();




var nama = player.GetVar("Nama");

var l1 = player.GetVar("Data3");

var l2 = player.GetVar("Klaim3");

var l3 = player.GetVar("Warrant3");

var l4 = player.GetVar("Backing3");

var l5 = player.GetVar("Qualifier3");
var l6 = player.GetVar("Rebuttal3");

var tanggal = new Date().toLocaleDateString("id-ID");



var isiFile = "Nama Siswa: " + nama + "\n";

isiFile += "Tanggal: " + tanggal + "\n\n";


isiFile += "1. Hitung volume masing-masing bangun. Lalu, berapa jumlah kubus kecil (5 cm³) yang dapat ditampung oleh masing-masing wadah?:\n";

isiFile += l1 + "\n\n";


isiFile += "2. Menurutmu, dari dua desain tersebut, manakah yang paling memenuhi kriteria efisiensi untuk menyimpan dan memindahkan alat peraga? Jelaskan pilihanmu!:\n";

isiFile += l2 + "\n\n";


isiFile += "3. Jelaskan mengapa perhitungan volume dapat digunakan untuk membandingkan efisiensi kedua desain tersebut?:\n";

isiFile += l3 + "\n\n";


isiFile += "4. Berikan alasan tambahan dari pengalamanmu di sekolah yang mendukung pentingnya efisiensi dan stabilitas bentuk wadah dalam penggunaan sehari-hari!:\n";

isiFile += l4 + "\n\n";


isiFile += "5. Dalam kondisi tertentu, apakah ada situasi di mana desain yang volume-nya lebih kecil bisa lebih cocok digunakan? Berikan contohnya!:\n";

isiFile += l5 + "\n\n";




isiFile += "6. Apakah efisiensi volume saja cukup untuk menentukan bentuk terbaik? Faktor apa saja yang bisa mematahkan pilihan awalmu? Buat pertimbangan baru jika ada!:\n";

isiFile += l6 + "\n\n";



var textFile = new Blob([isiFile], { type: 'text/plain' });

var downloadLink = document.createElement("a");

downloadLink.href = URL.createObjectURL(textFile);

downloadLink.download = "Jawaban Kode Perisai_" + nama + ".txt";

document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);
}

