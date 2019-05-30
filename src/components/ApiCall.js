import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import {Link} from 'react-router-dom'

function ApiCall() 
{
    useEffect(() => {
        fetchData()
    }, [])

    const [data, setData] = useState([])

    const fetchData = async () =>
    {
        const data = []
        const nextPage = []

        for (let i=1; i<=9; i++) 
        {
            nextPage.push(
                 await fetch('https://swapi.co/api/people/?page=' + i)
                .then((_response) =>
                {
                    return _response.json()
                })
                .then((_result) =>
                {
                    data.push(..._result.results)
                }),
            );  
        }

        // Bug at 17(n'existe pas), 35(dernière), 47(75)
        for (const key in data) 
        {
            data[key].id = Number(key) + 1
        }
        console.log(data)
        setData(data)
    }


    let filteredPersons = data.filter(
        (_data) =>
        {
            return _data.name.indexOf()
        }
    )

    return(
        <div>
            <Grid className="DescriptionGrid" container direction="column" spacing={1} style={{paddingLeft:40, paddingBottom:40}}>
                <Typography align="center" variant="h2" component="h2">
                    <p>Star Wars Persons</p>
                </Typography>
                <div className="search">
                    <TextField style={{paddingRight: 40, paddingTop: 40,}}
                        id="SearchInput"
                        placeholder="StarWars persons"
                        margin="normal" />
                </div>
                <Typography variant="h4" component="h4">
                    <p>Names : </p>
                </Typography>
                { !data ? (
                    <div> Fetching data... </div>
                    ) : (
                        <div>
                            {filteredPersons.map(_data => (
                                <Typography variant="h5" component="h5" key={_data.name}>
                                    <Link className="Link" to={`/${_data.id}`} >{_data.name}</Link>
                                </Typography>
                            ))}
                        </div>
                    )
                }
            </Grid>
        </div>
    )
}

export default ApiCall


