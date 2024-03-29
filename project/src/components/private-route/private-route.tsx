import {Navigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: string;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <Navigate to={'/'} />
      : children
  );
}

export default PrivateRoute;
