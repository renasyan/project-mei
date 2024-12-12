import { Redirect } from "expo-router"; // contoh context autentikasi

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  //   const { isLoggedIn } = useAuth(); // cek status autentikasi
  const isLoggedIn = false;

  if (!isLoggedIn) {
    // Arahkan ke login jika belum login
    return <Redirect href="/(auth)/welcome" />;
  }

  return <>{children}</>; // Render halaman jika sudah login
};

export default ProtectedRoute;
