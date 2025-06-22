import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface CheckAuthProps {
  children: ReactNode;
  protectRoute: boolean;
}

const CheckAuth = ({ children, protectRoute }: CheckAuthProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (protectRoute) {
      if (!token) {
        navigate("/login");
      } else {
        setLoading(false);
      }
    } else {
      if (token) {
        navigate("/");
      } else {
        setLoading(false);
      }
    }
  }, [navigate, protectRoute]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return <>{children}</>;
};

export default CheckAuth;
