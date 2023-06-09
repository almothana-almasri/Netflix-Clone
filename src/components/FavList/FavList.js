import { useEffect, useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './FavList.css'

export default function FavList() {
    const [FavList, setFavList] = useState([]);

    async function getFavList() {
        let url = `${process.env.REACT_APP_SERVER_URL}/getMovies`;
        const response = await fetch(url, {
            method: 'GET',
        })

        let recivedData = await response.json();
        console.log(recivedData);
        setFavList(recivedData.results)
    }

    async function handleDelete(id) {
        let url = `${process.env.REACT_APP_SERVER_URL}/DELETE/${id}`;
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (response.status === 204) {
            getFavList();
        }
    }
    async function handleUpdate(id){
      let url =`${process.env.REACT_APP_SERVER_URL}/UPDATE/${id}`;
      console.log(url)
      await fetch(url,{
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
      });      
    }

    useEffect(() => {
        getFavList();
    }, [])

    return (
        <div className='FavList'>
          <h2> Your Favorite List</h2>
          <div className="movie-container">
            {FavList && FavList.map(movie => {
              return (
                <div className='gg'>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <Card.Body>
                      <Card.Title>{movie.title}</Card.Title>
                      <Card.Text>{movie.overview.substring(0, 100)}</Card.Text>
                      <Button variant="primary" onClick={() => handleDelete(movie.id)}> Delete </Button>
                      <Button variant="primary" onClick={() => handleUpdate(movie.id)}> Update </Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      )
}
