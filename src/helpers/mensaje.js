import transporter from '../helpers/nodemailer.js'

const consultaRealizada = async(nombre, email, consulta, fecha) => {
  const info = await transporter.sendMail({
    from: `${process.env.GMAIL_USER}`, 
    to: `${process.env.GMAIL_USER}`, 
    subject: `Consulta de ${nombre}`, 
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Consulta de ${nombre}</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Fecha:</strong> ${fecha}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Consulta:</strong></p>
        <p>${consulta}</p>
      </div>
    `, 
  });
}

export default consultaRealizada;
    
  