import { GoogleLogout } from "react-google-login";
const clientId = '381794249860-mcjanab1cd2803ksbek94pgk5me0k7d9.apps.googleusercontent.com'


function Logout(){
    const onSuccess = () => {
        console.log("Log our successful!")
    }
    return(
        <div id="logOutButton">
            <GoogleLogout
                clientId = {clientId}
                buttonText = {"Logout"}
                onLogoutSuccess={onSuccess}

            />

        </div>
    )

}

export default Logout