import React, { useEffect } from "react";
import { useRouter } from "next/router";

export const withAuth = (WrappedComponent) => {
  const Auth = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/auth/login");
      } else {
        try {
          const decodedToken = jwt_decode(token);
          const currentTime = Date.now() / 1000;
          if (decodedToken.exp < currentTime) {
            localStorage.removeItem("token");
            router.push("/auth/login");
          }
        } catch (error) {
          console.error("Error decoding token:", error);
          router.push("/auth/login");
        }
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return Auth;
};
