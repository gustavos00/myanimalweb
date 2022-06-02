import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../../contexts/user'

interface ProtectedRoutesProps {
  children: JSX.Element;
}

function ProtectedRoutes({ children }: ProtectedRoutesProps) {
  const { user } = useContext(UserContext);
  if(!user) {
    return <Navigate to="/login" />
  }

  return children;
}

export default ProtectedRoutes;
