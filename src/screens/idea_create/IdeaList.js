import {Button, Container, Grid, makeStyles, React, Typography, useEffect, useState,useSelector} from "../../component";
import {appNotification} from "../../common/notification/app-notification";
import {getIdealistApi} from "../../auth/authDispatcher";
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({


    list_parent: {
        marginTop: theme.spacing(1),
    },
    list_theme: {
        display: "flex",
        width: '40%',
        marginTop: theme.spacing(1),

    },
    paper_theme: {
        width: 450,
        marginTop: theme.spacing(2),
        padding: theme.spacing(3),
        height: 180,
        alignItems: 'center',
    },

    button_theme: {
        height: 50
    }

}));


function IdeaList(props) {

    const classes = useStyles();

    const {user, token, isLoggedIn, roles} = useSelector(state => state.auth);

    let userId=user.id;

    let isFirstTime = false;

    const [data, setData] = useState({ideas: [], isFetching: false});

    async function getIdeas(userId) {
        //event.preventDefault();
        console.log("getIdeas", "getIdeas call")

        setData({ideas: data.ideas, isFetching: true});

        getIdealistApi(userId)
            .subscribe((response) => {

                console.log("getIdeas result ", response)
                try {
                    setData({ideas: response, isFetching: false});
                } catch (e) {
                    console.log(e);
                    setData({ideas: data.ideas, isFetching: false});
                }

            }, (error => {
                appNotification.showError(error)


            }))


    }


    


    useEffect(() => {
        console.log("useEffect", "useEffect call isFirstTime=" + isFirstTime)

        getIdeas(userId);

    }, [])


   

    const handleClickViewDetails = () => {

    };

    

    return (<React.Fragment>

        <Container component="main" maxWidth="xs">

            {
                (data.isFetching) ?
                    <div>Loading ... </div> : <div classes={classes.list_parent}>
                        <ul classes={classes.list_theme}>
                            {data.ideas.map(item => (


                                <Paper elevation={0} className={classes.paper_theme}>

                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <Typography>
                                                Idea Name:
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography>
                                                {item.ideaName}
                                            </Typography>
                                        </Grid>

                                    </Grid>


                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <Typography>
                                                Idea Field Name:
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography>
                                                {item.ideaFieldName}
                                            </Typography>
                                        </Grid>

                                    </Grid>


                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <Typography>
                                            Description:
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography>
                                                {item.ideaDesc}
                                            </Typography>
                                        </Grid>

                                    </Grid>



                                    <Grid container spacing={1}>
                        
                                        <Grid item xs={6}>
                                            <Button classes={classes.button_theme} color="primary" variant="contained"
                                                    onClick={handleClickViewDetails}>
                                                VIEW DETAILS
                                            </Button>
                                        </Grid>

                                    </Grid>


                                </Paper>


                            ))}
                        </ul>
                    </div>
            }
        </Container>


    </React.Fragment>)

}

export default IdeaList