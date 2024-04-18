import './App.css'
import Navigation from './components/navbar'
import Header from './components/header'
import Order from './components/order'

const  App  = ()=> {

  return (
      <main className='main-container'>
          <Navigation />
          <section className='content'>
            <div className='main-content'>
                <Header />
            </div>
            <Order />
          </section>
          
      </main>

  )
}

export default App
