import Home from './pages/Home'
import AddImagens from './pages/AddImagens'

var Routes = [

 {
    path: "/Home",
    name: "Home page",
    rtlName: "Pagina Home",
    icon: "tim-icons icon-world",
    component: Home,
    layout: "/rtl"
  },

  {
    path: "/AddImagens",
    name: "Adiciona imagens page",
    rtlName: "Pagina Adiciona Imagens",
    icon: "tim-icons icon-camera-18",
    component: AddImagens,
    layout: "/rtl"
  }
];
export default Routes;
