import ProfileHeader from "../component/ProfileHeader";
import Stats from "../component/Stats";
import Maintenance from "../component/Maintenance";
import Garage from "../component/Garage";


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