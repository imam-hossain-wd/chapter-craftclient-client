import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase.config';
import { useAppDispatch } from './redux/hooks';
import { setLoading, setUser } from './redux/feacture/user/userslice';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
