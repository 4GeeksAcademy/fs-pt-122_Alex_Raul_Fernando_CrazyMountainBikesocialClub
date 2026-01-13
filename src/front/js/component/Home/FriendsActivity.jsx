import "../../../styles/friendsActivity.css";
import FriendsActivityCard from "./FriendsActivityCard";

const FriendsActivity = () => {

    const activities = [
        {
            id: 1,
            routeId: 42,
            avatar: "https://ca.slack-edge.com/T0BFXMWMV-U093NEJMN83-515c0ce27062-512",
            name: "Alex Martin",
            action: "compoletó una ruta",
            time: "Hace 2 horas",
            distance: "24.5 kms",
            duration: "1h 12m",
            mapPreview:"https://maps.googleapis.com/maps/api/staticmap?center=40.4168,-3.7038&zoom=11&size=200x120&path=color:0xf2b90c|40.42,-3.70|40.41,-3.69|40.40,-3.71"
        },
        {
            id: 2,
            routeId: 87,
            avatar: "https://ca.slack-edge.com/T0BFXMWMV-U083E2R4G3B-bf2216914e49-512",
            name: "Daniel Landa",
            action: "compoletó una ruta",
            time: "Hace 2 horas",
            distance: "24.5 kms",
            duration: "1h 12m",
            mapPreview:"https://maps.googleapis.com/maps/api/staticmap?center=41.3874,2.1686&zoom=11&size=200x120&path=color:0xf2b90c|41.39,2.17|41.38,2.16|41.37,2.18"
        }
    ];

    return (
        <section className="friends-activity home-section">
            <h2 className="friends-title">Actividad de amigos</h2>

            {activities.map(activity => (
                <FriendsActivityCard key={activity.id} {...activity} />
            ))}
        </section>
    );
};

export default FriendsActivity;