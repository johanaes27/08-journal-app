import { AuthRoutes } from "../auth/routes/AuthRoutes";

import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui/";
import { Navigate } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const AppRouter = () => {
  
  const status = useCheckAuth();

    switch (status) {
      case "checking":
        return[
              {
                path: "*",
                element: <CheckingAuth />,
              },
            ];
      case "authenticated":
        return [
              {
                path: "/",
                children: JournalRoutes,
              },
            ];
      case 'not-authenticated':
        return [
          {
            path: '/*',
            element: <Navigate to='/auth/login' />
          },
          {
            path: 'auth/*',
            children: AuthRoutes
          }
        ];   
      
    }
};
