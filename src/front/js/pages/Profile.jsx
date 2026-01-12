import ProfileHeader from "../component/Profile/ProfileHeader";
import Stats from "../component/Profile/Stats";
import Maintenance from "../component/Profile/Maintenance";
import Garage from "../component/Profile/Garage";


const Profile = () => {
    return (
        <main className="profile-page">
            <div className="profile-wrapper">
                <ProfileHeader />
                <Stats />
                <Garage />
                <Maintenance />
            </div>
        </main>
    );
};

export default Profile;