import { User } from "@/state/api";
import Image from "next/image";

type UserCardProps = {
  user: User;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="flex items-center rounded border p-4 shadow">
      {user.profilePictureUrl && (
        <Image
          src={`/${user.profilePictureUrl}`}
          alt="User"
          width={32}
          height={32}
          className="rounded-full"
        />
      )}

      <div>
        <h3>{user.username}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
};
export default UserCard;
