import {makeStyles, React} from "../../component/index";
import {useHistory} from "react-router-dom";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import FullWidthTabs from "./FullWidthTabs";
import IdeaCreate from "../idea_create/IdeaCreate";
import * as Constants from '../../util/Constants.js'


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    dialog_tilte: {
        backgroundColor: "#800080",
    },
}));

function AuthenticationDialog(props) {

    const history = useHistory();

    // const dispatch = useDispatch()

    const classes = useStyles();
    const {onClose, open,typeDialog} = props;

    const handleClose = () => {
        onClose();
    };


    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} typeDialog={typeDialog}>
            

            {(typeDialog === Constants.DIALOG_OPEN_TYPE_AUTHENTICATION) ?
                       <div> 
                    
                           <DialogTitle id="simple-dialog-title" className={classes.dialog_tilte}>Authentication</DialogTitle>
                <FullWidthTabs></FullWidthTabs> 

                           </div>: <div>

                           <IdeaCreate></IdeaCreate>
                           </div>
                    }


        
        </Dialog>

    );
}

AuthenticationDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};


export default AuthenticationDialog