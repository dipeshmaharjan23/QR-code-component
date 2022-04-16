
import qrImage from "./image-qr-code.png"
import './style.scss'

function App() {
  return (
    <>
      <div className='container'>
            <img src={qrImage} alt="qr-code" />
            <div className="paragraph">
                <p className="heading">Improve your front-end skills by building projects</p>

                <p className="para">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
      </div>
    </>
  );
}

export default App;
