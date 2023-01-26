import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  event: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(2),
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
