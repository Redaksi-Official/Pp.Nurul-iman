import React from "react";
import "../style/Landingpage.css";
import heroImage from "../assets/Hero2.png";
import SMPbrosurImg from "../assets/SMPbrosur.png";
import SMKbrosurImg from "../assets/SMKbrosur.png";
import IedImg from "../assets/Ied.png"
import HariguruImg from"../assets/Hariguru.png"
import OrganisasiImg from "../assets/Organisasi.png"
import Video1 from "../assets/Video1.mp4"
import { Card } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";

const AboutMe = () => {
  return (
    <section section-about className="About" id="About">
      <h1 className="AboutTitle mt-5 pt-5 mb-5 pb-4">Tentang Kami</h1>
      <div className="cards mx-5 mb-4" d-flex justify-content-center align-items-center>
        <CardGroup className="CardGroup">
          <Card text="dark">
            <Card.Img variant="top" src={heroImage} />
            <Card.Body>
              <Card.Title>Rouhah</Card.Title>
              <Card.Text>
                Merupakan salah satu kegiatan di Pp.Nurul Iman
                <br />
                Kajian tasawwuf bersama guru mulya kita Al-Habib Hasan Bin Isma'il AL-Muhdor
                <br />
                Ba'da ashar di aula utama Pp.Nurul Iman
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card text="dark">
            <Card.Img variant="top" src={SMPbrosurImg} />
            <Card.Body>
              <Card.Title>SMP ISLAM NURUL IMAN</Card.Title>
              <Card.Text>
                Full day school unggulan <br />
                Pendaftaran : <br />
                -Gelombang 1 : ( 16 Januari s/d 31 Maret 2023 )<br />
                -Gelombang 2 : ( 1 April s/d 30 Juni 2023 ) <br />
                -Gelombang 3 : ( 1 Juli s/d 30 Juli 2023 ) <br />
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Update Terkini</small>
            </Card.Footer>
          </Card>
          <Card text="dark">
            <Card.Img variant="top" src={SMKbrosurImg} />
            <Card.Body>
              <Card.Title>SMK ISLAM NURUL IMAN</Card.Title>
              <Card.Text>
                Full day school unggulan dengan program jurusan TITL (Teknik Instalasi Tenaga Listrik)<br />
                Pendaftaran : <br />
                -Gelombang 1 : ( 16 Januari s/d 31 Maret 2023 )<br />
                -Gelombang 2 : ( 1 April s/d 30 Juni 2023 ) <br />
                -Gelombang 3 : ( 1 Juli s/d 30 Juli 2023 ) <br />
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Update Terkini</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
      {/* div ke 2 */}
      <div className="cards mx-5 mb-4" d-flex justify-content-center align-items-center>
        <CardGroup className="CardGroup">
          <Card text="dark">
            <Card.Img variant="top" src={IedImg} />
            <Card.Body>
              <Card.Title>Selamat Hari Raya Eidul Fitri 1444H</Card.Title>
              <Card.Text>
                Kami segenap keluarga besar Pp.Nurul Iman mengucapkan
                <br />
                "SELAMAT HARI RAYA EIDUL FITRI 1444H"
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 1 month ago</small>
            </Card.Footer>
          </Card>
          <Card text="dark">
            <Card.Img variant="top" src={HariguruImg} />
            <Card.Body>
              <Card.Title>Selamat Hari Guru Nasional</Card.Title>
              <Card.Text>
              Pada tanggal 25 November 2022, kita memperingati Hari Guru Nasional (HGN). Tema HGN tahun 2022 ini adalah “Serentak Berinovasi Wujudkan Merdeka Belajar”. Bulan Oktober lalu, tepatnya pada tanggal 5 Oktober 2022 juga diperingati sebagai Hari Guru Sedunia, biasa dikenal sebagai World Teachers Day yang dimaknai secara global sebagai bentuk apresiasi kepada guru atas jasa mereka dalam memajukan pendidikan.
                
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 7 month ago</small>
            </Card.Footer>
          </Card>
          <Card text="dark">
            <Card.Img variant="top" src={OrganisasiImg} />
            <Card.Body>
              <Card.Title>Struktur Organisasi Pp.Nurul Iman</Card.Title>
              <Card.Text>
                Full day school unggulan dengan program jurusan TITL (Teknik Instalasi Tenaga Listrik)<br />
                Pendaftaran : <br />
                -Gelombang 1 : ( 16 Januari s/d 31 Maret 2023 )<br />
                -Gelombang 2 : ( 1 April s/d 30 Juni 2023 ) <br />
                -Gelombang 3 : ( 1 Juli s/d 30 Juli 2023 ) <br />
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 11 month ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>

      <div className="VideoTron" d-flex justify-content-center align-items-center text="light" >
        <h1 className="VideoTitle mt-5">Kegiatan Belajar Mengajar PP.NURUL IMAN</h1>
        <video className="Video1" src={Video1} autoPlay loop muted/>
      </div>
    </section>
  );
};

export default AboutMe;
