import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import TheCard from './components/MyCard'
import pug from './assets/img/pexels-charlesdeluvio-1851164.jpeg'
import Hachi from './assets/img/pexels-valeriya-1805164.jpeg'
import Collie from './assets/img/pexels-antropologo-en-ruta-653369454-18080571.jpeg'
import Golden from './assets/img/golden-retriever-puppy-2706681_1280.jpeg'
import Footer from './components/footer'

function App() {

  return (
    <>
    <Header></Header>
    <div id="container">
      <TheCard
      img={pug}
      name="Bartolo"
      descripcion="lleno de energia y listopara jugar. !Dale a Bartolo el hogar amoroso que se merece!"
      text="Pug"
      color="success"
      />
      <TheCard 
       img={Hachi}
       name="Messi"
       descripcion="Es juguteon, amigable y se llevabien con niños y otros animales. !Haz de Messi parte de tu familia hoy mismo!"
       text="Shiba Inu"
       color="primary"
       />
        <TheCard 
       img={Golden}
       name="Gohan"
       descripcion="Un perro de tamaño medianocon un corazon gigante. !Hazte amigo de Gohan y y experimenta su amor incondicional!"
       text="Golden Retriever "
       color="danger"
       />
        <TheCard 
       img={Collie}
       name="Princess"
       descripcion="Es una acompañante leal y cariñosa que adora los mimos y los abrazos. !ayuda a Princessa encontrar su final feliz!"
       text="Pug"
       color="warning"
       />
    </div>
    <Footer/>
    </>
  )
}

export default App
