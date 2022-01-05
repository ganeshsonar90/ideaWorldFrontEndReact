import {Button, Container, Grid, makeStyles, React, TextField, useHistory, useState,useSelector} from "../../component/index"
import Typography from "@material-ui/core/Typography";
import "./ideaCreate.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import validator from "validator";
import {appNotification} from "../../common/notification/app-notification";
import {doCreateIdea} from "../../auth/authDispatcher";


const useStyles = makeStyles((theme) => ({
  paper: {
      marginTop: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },

  formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
  },
  selectEmpty: {
      marginTop: theme.spacing(2),
  },

  form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
  },
  submit: {
      margin: theme.spacing(3, 0, 2),
  },
}));







function IdeaCreate(props) {

    const {user, token, isLoggedIn, roles} = useSelector(state => state.auth);

  const classes = useStyles();


  const [ideaName, setIdeaName] = useState('');
  const [ideaDesc, setIdeaDesc] = useState('');
  const [ideaFieldName, setIdeaFieldName] = useState('');




  function handleSubmit(event) {
    event.preventDefault();


    if (ideaName === "" || ideaDesc === "" || ideaFieldName === "") {
        appNotification.showError("Please fill out this field")
        return;
    }

   
    let userId=user.id;

    console.log("Before create api", "create api"+userId)


    const payload = {
      ideaName,
      ideaDesc,
      ideaFieldName,
      userId
    }

    createIdeaApi(payload);

}

function callObservable(subscriberMethod, callback) {

  subscriberMethod
      .subscribe((response) => {

          callback(response)

      }, (error => {
          appNotification.showError(error)
      }))

}

function createIdeaApi(payload) {


  callObservable(doCreateIdea(payload), (response) => {

      appNotification.showSuccess("Succesfully Submitted Idea")

      
     // dispatch({type: LOGIN, "payload": response});
      // history.push("/profile")

  })

}

    return (

      <React.Fragment>
      <Container component="main" maxWidth="xs">

          <div className={classes.paper}>


              <form className={classes.form} onSubmit={handleSubmit} noValidate>

                  <Grid container spacing={2}>

                      <Grid item xs={12}>
                          <TextField
                              name="ideaName"
                              value={ideaName}
                              onInput={e => setIdeaName(e.target.value)}
                              variant="outlined"
                              required
                              fullWidth
                              id="ideaName"
                              label="Idea Name"
                              autoFocus
                          />
                      </Grid>

                      <Grid item xs={12}>
                          <TextField
                              variant="outlined"
                              value={ideaFieldName}
                              onInput={e => setIdeaFieldName(e.target.value)}
                              required
                              fullWidth
                              id="ideaFieldName"
                              label="Idea field name"
                              name="ideaFieldName"
                              autoComplete="ideaFieldName"
                          />
                      </Grid>


                      <Grid item xs={12}>
                          <TextField
                              variant="outlined"
                              value={ideaDesc}
                              onInput={e => setIdeaDesc(e.target.value)}
                              required
                              fullWidth
                              id="ideaDesc"
                              label="Idea Description"
                              name="ideaDesc"
                              autoComplete="ideaDesc"
                          />
                      </Grid>

                    

                     

                  </Grid>
                  <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                      <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                      >
                        Submit
                      </Button>
                  </div>
              </form>
          </div>

      </Container>
  </React.Fragment>



    )

}

export default IdeaCreate;