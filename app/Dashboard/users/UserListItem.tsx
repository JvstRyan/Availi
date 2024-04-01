import { getUsers, Users } from "@/app/api/users";
import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";


const UserListItem = ({name, email, roles }: Users) => {


  return (
    <>
        <ul className="flex justify-evenly gap-x-36 items-center text-white  border-b-2 border-secondary p-5">
            <FaEdit color="white" size={"22px"} />
              <li className="min-w-36 max-w-36 truncate">{name}</li>
              <li className=" min-w-36 max-w-36 truncate">{email}</li>
              <li className="min-w-24 max-w-24 truncate">{roles}</li>
            <FaRegTrashAlt color="white" size={"20px"} />
          </ul>
    </>
  );
};

export default UserListItem;
