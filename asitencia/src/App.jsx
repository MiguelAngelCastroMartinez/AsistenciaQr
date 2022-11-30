import React, {useState}  from "react";
import QRCode from 'qrcode';
import lqr from './assets/tec.png'
import logo from './assets/logot.jpg'
function App() {
  const [matricula, setMatricula] = useState('')
  const [qrcode, setQrcode] = useState('');
  const GenerateQRCode = () => {QRCode.toDataURL(matricula,{width:500, margin:1, color: {dark: '#008000'}},
      (err, matricula) =>{if(err) return console.error(err)
      console.log(matricula)
      setQrcode(matricula)
    })
  }
  return (
    <div className="text-center">
      <img src={logo} alt="" width={280} height={290}/>
      <h1>Generador de Codigos QR Asistencia</h1>
      <br/>
      <div className="row-1">
        <input className="col-4" type="text" placeholder="Ingrese su numero de control y Nombre completo" value={matricula} onChange={(e) => setMatricula(e.target.value)} />
        <span className="col-1">  </span>
        <button className="col-3 btn btn-success" onClick={GenerateQRCode}>Generate</button>
      </div>
      <br/>
      {qrcode ? 
        <div>
          <p><img src={qrcode} alt={matricula} width={300} height={300}/></p>
          <p><a className="btn btn-success" href={"https://script.google.com/a/~/macros/s/AKfycbxFWncUooJlybW3WKpKLfr-rYi-7jGPHt_Rzg24dlBzWHh3dgat7kOPfxBfbVti78S3TQ/exec?action=register&userid=" + matricula}>Log User</a></p>
        </div>
        : <img src={lqr} alt={matricula} width={300} height={200}/>
        }
    </div>
  );
}

export default App;