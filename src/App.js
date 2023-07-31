import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import Card from './components/Card';
import Button from './components/Button';


function App() {

  const dataProduct = [
    {
    name: "Tele",
    price: 200030,
    imgurl: "https://picsum.photos/280/260",
    desc: "Lorem Ipsum"
  },
  {
    name: "2",
    price: 2010,
    imgurl: "https://picsum.photos/280/263",
    desc: "Lorem Ipsum"
  }
]
  
  return (
    <div>
      <NavBar/>
      <br/>
      <ItemListContainer greeting='LaQWebStore d proteXION'/>
      <p style={{color: "red"}}>lorem</p>
      <Button type="alert" text="clickme"/>
      <Card dataProduct={dataProduct[0]}/>
      <Card dataProduct={dataProduct[1]}/>
    </div>
  );
}

export default App;
