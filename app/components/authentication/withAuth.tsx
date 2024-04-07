import React, { useEffect, ComponentType, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const withAuth = (WrappedComponent: ComponentType) => {
  const WithAuthComponent: ComponentType = (props) => {
    const router = useRouter();
    useEffect(() => {
      const checkAuth = async () => {
        try {
          const response = await axios.get(
            "https://localhost:7220/api/Auth/authorize",
            {
              withCredentials: true,
            }
          );

          if (response.status !== 200) {
            router.push("/");
          }
        } catch (error) {
          router.push("/")
        };
      }
      checkAuth();
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;
