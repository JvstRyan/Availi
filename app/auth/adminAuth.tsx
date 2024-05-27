import React, { useEffect, ComponentType, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import useUserStore from "@/stores/userStore";

const adminAuth = (WrappedComponent: ComponentType) => {
  const AdminAuthComponent: ComponentType = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const user = useUserStore((state) => state.user);

    useEffect(() => {
      const checkAuth = async () => {
        try {
          const response = await axios.get(
            "https://localhost:7220/api/Auth/authorize",
            {
              withCredentials: true,
            }
          );

          if (response.status === 200 && user?.userRole === "admin") {
            setIsAuthenticated(true);
          } else if (user?.userRole === "volunteer") {
            router.push("/dashboard/survey");
          } else if (user?.userRole === "guest") {
            router.push("/waiting");
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
    }, [router, user?.userRole]);

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

  return AdminAuthComponent;
};

export default adminAuth;
