import { faFacebook, faGithub, faLinkedinIn,faTwitter } from "@fortawesome/free-brands-svg-icons"
import SocialButton from "./SocialButton"
import Formulario from "./Formulario"
import Alert from "./Alert"

function Registro({message, setAlert}) {
	return (
		<>
  		<section>
    		<h1>Crea una cuenta</h1>
      	<div className="social">
      		<SocialButton icon={faFacebook} />
        	<SocialButton icon={faGithub}  />
        	<SocialButton icon={faLinkedinIn} />
      	</div>
      	<h6>O usa tu email para registrarte</h6>
      	<Formulario setAlert={setAlert} />
				<Alert color={message.color} msg={message.msg} />
			</section>  
		</>
	)
}
export default Registro