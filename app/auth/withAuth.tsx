import React, { useEffect, ComponentType, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const withAuth = (WrappedComponent: ComponentType) => {
  const WithAuthComponent: ComponentType = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const checkAuth = async () => {
        try {
          const response = await axios.get(
            "https://localhost:7220/api/Auth/authorize",
            {
              withCredentials: true,
            }
          );

          if (response.status === 200) {
            setIsAuthenticated(true);
          } else {
            router.push("/auth");
          }
        } catch (error) {
          router.push("/auth");
        } finally {
          setLoading(false);
        }
      };
      checkAuth();
    }, []);

    if (loading || !isAuthenticated) {
      return (
        <div className="flex justify-center items-center h-screen">
          {" "}
          <CircularProgress color="success" />{" "}
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;
