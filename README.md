| Variable | Isi |
| -------- | --- |
| Nama | RADITYA TANSY LIZARA  |
| NIM | 312310454 |
| Kelas | TI.23.A5 |
| Mata Kuliah | Pemrograman Web (UTS) |

## Ngobrol Tanpa Delay: Membangun Chat Real-Time dengan WebSocket ##
Dalam era digital yang serba cepat, komunikasi real-time menjadi fitur penting dalam berbagai aplikasi web modern. Mulai dari chat, game online, hingga sistem notifikasi instan — semuanya membutuhkan pertukaran data yang cepat dan efisien. Salah satu teknologi yang memungkinkan hal ini adalah WebSocket. Artikel ini membahas secara menyeluruh mengenai WebSocket, perbedaannya dengan HTTP tradisional, serta hasil eksperimen dalam membangun aplikasi chat sederhana menggunakan protokol ini.
## Apa Itu WebSocket? ##
WebSocket adalah protokol komunikasi berbasis TCP yang memungkinkan komunikasi dua arah (full-duplex) antara client dan server melalui satu koneksi yang tetap terbuka. Setelah koneksi terbentuk, baik server maupun client dapat mengirimkan data kapan pun, tanpa perlu menunggu permintaan dari pihak lain. Teknologi ini dirancang untuk menggantikan mekanisme polling pada HTTP yang cenderung tidak efisien untuk komunikasi real-time.
## Perbedaan WebSocket dengan HTTP Tradisional ##
Berbeda dengan HTTP yang bersifat request-response, WebSocket memberikan kebebasan bagi client dan server untuk berkomunikasi secara langsung dan simultan. HTTP membuka dan menutup koneksi setiap kali ada pertukaran data, sedangkan WebSocket mempertahankan satu koneksi sepanjang sesi. Hal ini membuat WebSocket jauh lebih ringan dan responsif, sangat ideal untuk aplikasi yang memerlukan update data secara langsung.
## Hasil Eksperimen dan Analisis ##
Eksperimen dilakukan menggunakan teknologi Node.js dengan library WebSocket, serta antarmuka HTML sebagai client. Setelah implementasi dan pengujian, hasilnya menunjukkan bahwa WebSocket mampu menghubungkan beberapa pengguna secara langsung dengan latensi yang sangat rendah. Pesan yang dikirim dari satu pengguna langsung diterima oleh pengguna lain tanpa adanya penundaan ataupun reload halaman. Kelebihan ini sangat signifikan dibanding metode polling biasa.
### Langkah 1: Menyiapkan Proyek ###
Pertama, saya membuat direktori baru untuk proyek dan menginisialisasi proyek Node.js:
1.	Buat Folder Proyek : simple-websocket
mkdir simple-websocket
cd simple-websocket
 ![image](https://github.com/user-attachments/assets/63183a28-ad1b-422f-b226-6e89d64eaeac)

2. Inisialisasi Proyek dan Install Library Websocket
npm init -y
npm install ws
  
### Langkah 2: Membuat Server Websocket ###
Selanjutnya, saya membuat file server.js
Server ini akan:
•	Mendengarkan koneksi Websocket pada port 8080
•	Mengirim pesan “hi” ke setiap client yang terhubung
•	Menerima pesan dari client dan mengirimkannya kembali dengan prefix
•	Mencatat ketika client terputus
### Langkah 3: Membuat Client HTML ###
Selanjutnya, saya membuat file client.html
Client HTML ini menyediakan:
•	Antarmuka pengguna sederhana untuk terhubung ke server Websocker
•	Kotak pesan untuk menampilkan pesan yang dikirim dan diterima
•	Formulir untuk mengirim pesan ke server
•	Indikator status koneksi
### Langkah 4: Menjalankan Server Websocket ###
Buka Terminal, ketik:
node server.js
Kalau berhasil, terminal akan menampilkan:
Server Websocket berjalan di 
## Kesimpulan ## 
WebSocket adalah solusi komunikasi dua arah yang sangat efisien untuk aplikasi real-time. Dengan kemampuannya menjaga koneksi tetap aktif dan latensi yang rendah, WebSocket sangat cocok untuk berbagai kebutuhan interaktif seperti chat, game, dan sistem monitoring. Eksperimen yang dilakukan membuktikan bahwa teknologi ini mudah diimplementasikan, ringan, dan memberikan performa unggul dibanding HTTP konvensional. Pengembang web masa kini perlu mempertimbangkan WebSocket sebagai komponen penting dalam membangun pengalaman pengguna yang lebih dinamis dan responsif.
Referensi
1.	MDN WebSocket API — 
https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
2.	NPM ws Library — 
https://www.npmjs.com/package/ws
3.	WebSocket Use Cases — 
https://ably.com/concepts/websockets
