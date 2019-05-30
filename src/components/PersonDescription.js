import React, {useState, useEffect} from 'react'; 
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom'

function PersonDescription({ match }) 
{

    const [dataDescription, setDataDescription] = useState({})
    
    useEffect(() => {

        const fetchDataDescription = async () =>
        {
            const fetchDataDescription =
                await fetch(`https://swapi.co/api/people/${match.params.id}`)

            const dataDescription = await fetchDataDescription.json()
            setDataDescription(dataDescription)
        }
            

        fetchDataDescription()
        console.log(match)
    }, [])

    console.log(dataDescription)
    


    return(
        <div>
            <Grid className="DescriptionGrid" container direction="column" spacing={1} style={{paddingBottom:40}}>
                <Typography className="DescriptionTitle" variant="h3" component="h3" style={{ marginBottom:40, marginTop:40}}>
                    {dataDescription.name}
                </Typography>
                <Typography className="Description" variant="h5" component="h5">
                    Height : {dataDescription.height} cm
                    <br></br>
                    Mass : {dataDescription.mass} kg
                    <br></br>
                    Gender : {dataDescription.gender}
                    <br></br>
                    Hair color : {dataDescription.hair_color}
                    <br></br>
                    Eye Color : {dataDescription.eye_color}
                    <br></br>
                    <Link className="Link" to={`/starships/${dataDescription.starships}`} ></Link>
                </Typography>

            </Grid>
        </div>
    )
}

export default PersonDescription


