import useUserStore from "@/stores/userStore";
import { CircularProgress } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { ComponentType, useEffect, useState } from "react";

const withAuth = (WrappedComponent: ComponentType) => {
  const WithAuthComponent: ComponentType = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const user = useUserStore((state) => state.user);

    useEffect(() => {
      const checkAuth = async () => {
        try {
          const token = localStorage.getItem("jwtToken");
          if (token) {
            const decodedToken: any = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            if (decodedToken.exp > currentTime) {
              setIsAuthenticated(true);
            } else {
              // Token is expired
              router.push("/auth");
            }
          } else {
            // No token found
            router.push("/auth");
          }
          if (user?.userRole === "guest") {
            router.push("/waiting");
          } else if (
            user?.userRole === "volunteer" ||
            user?.userRole === "admin"
          ) {
            return true;
          } else {
            router.push("/auth");
          }
        } catch (error) {
          console.error(error);
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

  return WithAuthComponent;
};

export default withAuth;
