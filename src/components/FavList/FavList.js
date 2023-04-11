import { useEffect, useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './FavList.css'

export default function FavList() {
    const [FavList, setFavList] = useState([]);

    async function getFavList() {
        let url = `${process.env.REACT_APP_SERVER_URL}/getMovies`;
        let response = await fetch(url, {
            method: 'GET',
        })

        let recivedData = await response.json();
        console.log(recivedData);
        setFavList(recivedData.results)
    }

    async function handleDelete(id) {
        let url = `${process.env.REACT_APP_SERVER_URL}/DELETE/${id}`;
        let response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (response.status === 204) {
            getFavList();
        }
    }
    useEffect(() => {
        getFavList();
    }, [])

    return (
        <div className='FavList'>
            <h2> this is Fav Movies Page</h2>
            {
                FavList && FavList.map(movie => {
                    return (
                        <div className='gg'>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>{movie.overview.substring(0, 100)}</Card.Text>
                                <Button variant="primary" onClick={() => handleDelete(movie.id)}> Delete </Button>
                            </Card.Body>
                        </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}