import { Typography } from "@material-tailwind/react";
import "font-awesome/css/font-awesome.min.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-left">
          <h3>Payment Method</h3>
          <div className="credit-cards">
            <img className="ml-7" src="dana.png" alt="" />
            <img className="ml-8" src="gopay.png" alt="" />
            <img src="" alt="" />
          </div>
          <p className="footer-copyright">2021 AtengJoki</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Indonesia</span> Jakarta
            </p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p>+62 877-6516-5143</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="#">atengjoki1@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-about">
            <span>Media</span>
            "Jangan biarkan permainan menjadi beban. Biarkan kami membantu
            Anda."
          </p>

          <div className="footer-media">
            {/* Gantilah <a> dengan tautan sesuai dengan media sosial Anda */}
            <a href="https://www.tiktok.com/@ahmadafriza25">
              <i>
                <img src="tik-tok.png" alt="" />
              </i>
            </a>
            <a href="https://www.instagram.com/atengjoki_">
              <i>
                <img src="instagram.png" alt="" />
              </i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
