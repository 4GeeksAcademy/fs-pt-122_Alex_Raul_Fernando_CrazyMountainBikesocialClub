import ProfileHeader from "../component/Profile/ProfileHeader";
import Stats from "../component/Profile/Stats";
import Maintenance from "../component/Maintenance/MaintenanceCard";
import Garage from "../component/Profile/Garage";


const Profile = () => {
    return (
        <main className="profile-page">
            <div className="profile-wrapper">
                <ProfileHeader />
                <Stats />
                <Garage />
                <Maintenance 
                    showTitle={true}
                    showActionButton={true}
                />
            </div>
        </main>
    );
};

export default Profile;