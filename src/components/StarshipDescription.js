import React, {useState, useEffect} from 'react'; 
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

function StarshipDescription({ match }) 
{

    useEffect(() => {

        const fetchDataDescription = async () =>
        {
            const fetchDataDescription =
                await fetch(`https://swapi.co/api/starships/${match.params.id}`)

            const dataDescription = await fetchDataDescription.json()
            setDataDescription(dataDescription)
        }

        fetchDataDescription()
        console.log(match)
    }, [])

    const [dataDescription, setDataDescription] = useState({})


    return(
        <div>
            <Grid className="DescriptionGrid" container direction="column" spacing={1} style={{paddingBottom:40}}>
                <Typography variant="h3" component="h3" style={{ marginBottom:40, marginTop:40}}>
                    {dataDescription.name}
                </Typography>
                <Typography className="Description" variant="h5" component="h5">
                </Typography>
            </Grid>
        </div>
    )
}

export default StarshipDescription


