import logo from "../images/logo.png"
export default function SplashScreen(){

    return(
        
        <section className="background">
            <img src={logo} alt="logo for uMusic" className="logo"/>
            <h1 className="logoName">uMusic</h1>
        </section>
       
    )
}