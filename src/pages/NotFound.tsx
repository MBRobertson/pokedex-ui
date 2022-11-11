import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  // Navigate to the homepage for Page Not Found
  useEffect(() => navigate('/', { replace: true }), []);

  return <></>;
}