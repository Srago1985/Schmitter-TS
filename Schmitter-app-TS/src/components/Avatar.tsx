import { useContext } from "react";
import { SchmitterContext } from "../utils/context";

interface AvatarProps {
    size?: 'small';
}

const Avatar = ({size}: AvatarProps) => {
    const {user, changeAvatar, changeName} = useContext(SchmitterContext);
    return (
        <img 
            onClick={() => {
                const url = prompt("Enter avatar URL");
                changeAvatar(url ? url : "");
            }}
            onContextMenu={(e) => {
                e.preventDefault();
                const name = prompt("Enter new username");
                changeName(name ? name : "");
            }}
            className={`user-avatar ${size ?? ''}`} 
            src={user.avatar} 
            alt={user.name}
        />
    )
}

export default Avatar;