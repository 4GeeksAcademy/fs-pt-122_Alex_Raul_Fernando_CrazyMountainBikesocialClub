import { useNavigate } from "react-router-dom";
import "../../../styles/friendsActivity.css";

const FriendsActivityCard = ({ routeId, avatar, name, action, time, distance, duration, mapPreview}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/routes/${routeId}`);
    };

    return (
        <article 
            className="friends-card clickable"
            onClick={handleClick}
            role="button"
            tabIndex={0}
        >

            <img className="friends-avatar"
                src={avatar} 
                alt={`Avatar de ${name}`}
            />
                
            <div className="friends-content">
                <div className="friends-info">
                    <strong>{name}</strong>
                    <span>{action}</span>
                     <small>{time}</small>
                </div>

                    <div className="friends-route">
                        <div className="route-meta">
                            <span>{distance}</span>
                            <span>•</span>
                            <span>{duration}</span>
                        </div>
                        
                        <img className="route-preview"
                            src={mapPreview}
                            alt="Preview ruta"
                        />
                    </div>
                </div>
                
            </article>
    );
};

export default FriendsActivityCard;