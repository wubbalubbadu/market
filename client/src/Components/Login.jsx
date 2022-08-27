import { GoogleLogin } from 'react-google-login';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const clientId = '381794249860-mcjanab1cd2803ksbek94pgk5me0k7d9.apps.googleusercontent.com';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      const res = await axios.post('http://localhost:5000/user/google_login', {
        profileObj: result,
      });
      dispatch({ type: 'AUTH', data: { result, token } });
      navigate('/');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const googleError = (error) => console.log(error);

  return (
    <div id="googleLogin">
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => (
          <Button
            color="primary"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            startIcon={<GoogleIcon />}
            variant="contained"
          >
            Google Sign In
          </Button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleError}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
}

export default Login;
