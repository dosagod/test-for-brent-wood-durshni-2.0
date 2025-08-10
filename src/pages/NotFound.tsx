import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-background pt-16">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-8xl mb-4">🍛</div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">404</h1>
          <h2 className="text-2xl font-semibold mb-4 text-accent">Oops! Page not found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Looks like this page went missing! But don't worry, our delicious South Indian menu is still here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="hero" size="lg">
                Return to Home
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant="warm" size="lg">
                View Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
