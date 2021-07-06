import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

export default function Footer(classes){
    return(
    <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
        </Typography>
        <Copyright />
    </footer>
    )
  }