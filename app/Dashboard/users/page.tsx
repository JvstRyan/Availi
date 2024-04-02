"use client"

import { getUsers } from "@/app/api/users";
import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import UserListItem from "./UserListItem";
import { Button, CircularProgress } from "@mui/material";
import UserCreationModal from "./UserCreationModal";

const page = () => {

    const {data, isLoading} = useQuery
    ({
        queryFn: getUsers,
        queryKey: ["users"]
    })
    
  return (
    <>
      <section className="mt-10 w-11/12 flex flex-col gap-5">
      <article className="flex justify-end items-end self-end">
       <UserCreationModal />
      </article>
        <article>
         {data?.map((item) => (
            <UserListItem  key={item.id} id={item.id} name={item.name} email={item.email} roles={item.roles} />
         ))}
        </article>
        <div className="flex justify-center items-center mt-28">
        {isLoading && <CircularProgress color="secondary" />}
        </div>
      </section>
    </>
  );
};

export default page;
