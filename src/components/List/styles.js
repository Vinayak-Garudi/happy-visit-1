import { makeStyles } from "@material-ui/core";

export default makeStyles ((themes) => ({
    formControl: {
        margin: themes.spacing(1), minWidth:120, marginBottom: '130px',
    },
    selectEmpty: {
        marginTop: themes.spacing(2),
    },
    loading: {
        height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
    },
    container: {
        padding: '25px',
    },
    marginBottom: {
        marginBottom: '30px',
    },
    list: {
        height: '75vh', overflow:'auto',
    },
}));