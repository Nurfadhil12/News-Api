import React, { useState,useEffect } from "react";
import Search from "./Search";
import  News  from "./News";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Home.css';
import { Navbar, Container } from 'react-bootstrap';


function Home (){ 
    const [data, setDatas] = useState();
    const [search, setSearch] = useState("how");
    const [error, setError]= useState(null);
    const [load, setIsload]= useState(false);

    useEffect(() => {
      axios.get(`https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=871d8464d40c418894a42e72cfe4d88a`)
      .then((response) => {
        setIsload(true);
        setDatas(response.data);
      }).catch(error => {
        setIsload(true);
        setError(error);
      });
        // fetch('https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=871d8464d40c418894a42e72cfe4d88a')
        // .then(res => res.json())
        // .then((result) =>{
        //   setIsload(true);
        //   setDatas(result);      
        // },    
        // (error) =>{
        //   setIsload(true);
        //   setError(error);
        // }
        // )
        // console.log(search);
      }, [search]);

    return(
        <div>
          <Navbar bg="dark" variant="dark" className="mb-5">
            <Container>
              <Navbar.Brand href="#home">News App</Navbar.Brand>
            </Container>
          </Navbar>
          <div className="container">
            {console.log(data)}
            <Search search={search} setSearch={setSearch} />
            <News data={data} />
          </div>
        </div>
    )
}

export default Home;