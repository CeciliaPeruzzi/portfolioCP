import Proyectos from '@/components/Proyectos';
import Navbar from '../components/Navbar';
import Header from '@/components/Header';
import Tecnologias from '@/components/Tecnologias';
import SobreMi from '@/components/SobreMi';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Proyectos/>
      <Tecnologias/>
      <SobreMi/>
      <Footer/>
      
    </>
  );
}