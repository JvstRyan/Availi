"use client"

import { getUsers } from "@/app/api/users";
import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import UserListItem from "./UserListItem";

const page = () => {

    const {data} = useQuery
    ({
        queryFn: getUsers,
        queryKey: ["users"]
    })
    
  return (
    <>
      <section className="mt-10 w-11/12 flex flex-col">
        <article>
         {data?.map((item) => (
            <UserListItem  key={item.id} id={item.id} name={item.name} email={item.email} roles={item.roles} />
         ))}
        </article>
      </section>
    </>
  );
};

export default page;
