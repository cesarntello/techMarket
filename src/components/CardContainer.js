
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./Card";
// import Container from 'react-bootstrap/Container'
import {  ListGroup} from "react-bootstrap";
const cardsProduct = [
    {   id: 1, 
        nombre: 'Teclado Hyperx Alloy FPS Pro', 
        categoria: 'Periférico', 
        precio: 14000, 
        img: './img/teclado.jpg',
        stock: 10
      },
      { id: 2, 
        nombre: 'Motherboard Asus B450 PLUS Gaming', 
        categoria: 'Componente', 
        precio: 23000, 
        img: './img/mother.jpg',
        stock: 25
      },
      { id: 3,
        nombre: 'Procesador AMD Ryzen 5 3600', 
        categoria: 'Componente', 
        precio: 25500, 
        img: './img/procesador.jpg',
        stock: 23
      },
      { id: 4, 
        nombre: 'Tarjeta Ram Hyperx Fury 8gb', 
        categoria: 'Componente', 
        precio: 8900, 
        img: '.img/ram.jpg',
        stock: 27
      },
      { id: 5, 
        nombre: 'Mouse Gaming Logitech G390', 
        categoria: 'Periférico', 
        precio: 5600, 
        img: './img/mouse.jpg',
        stock: 19
      },
      { id: 6, 
        nombre: 'Ssd NVMe Western Digital WD_Black 1TB', 
        categoria: 'Componente', 
        precio: 14200, 
        img: './img/ssd.jpg',
        stock: 21
      }
]

 export default function CardContainer (){
    const [dataCards, setDataCards ] = useState([]);
    
    useEffect(()=> {
        setDataCards(cardsProduct)
        } 
    ,[])

    useEffect(() => {
      new Promise((resolve, reject) => {
        ///
        
        setTimeout(() => resolve(dataCards), 3000);
      })
        .then((dataResolve) => {
          console.log("data Resolve", dataResolve);
          dataCards(dataResolve);
        })
        .catch((error) => {
          console.log("err", error);
        });
    }, [dataCards]);
    // useEffect(() => {
       
    // },[dataCards])
   return (
        <>
        {dataCards.map((d,idx) => ( 
         
            <ListGroup horizontal key={idx} >
  <ListGroup.Item>
  <Cards data={d}  />
  </ListGroup.Item>

</ListGroup>
         
              
         
     )) }
        

       
        </>
   )
 }