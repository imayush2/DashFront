import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Button, Alert } from "@themesberg/react-bootstrap";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isMounted, setIsMounted] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false); // State to manage the black screen overlay

  useEffect(() => {
    // Cleanup function to track whether the component is mounted
    return () => {
      setIsMounted(false);
    };
  }, []);

  const handleLogout = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    setIsLoggingOut(true); // Show the black screen overlay

    try {
      console.log("Logging out... Sending logout request");

      const response = await fetch("http://localhost:25060/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      console.log("Response status:", response.status);

      if (response.ok) {
        console.log("Logout successful. Redirecting to SignIn page.");
        localStorage.removeItem("authToken");

        if (isMounted) {
          setSuccess("You have logged out successfully!");
          // Wait for 2 seconds to let the user see the message before redirecting
          setTimeout(() => {
            history.push("/examples/sign-in");
          }, 2000);
        }
      } else {
        console.error("Logout failed:", response.statusText);
        if (isMounted) {
          setError("Logout failed. Please try again.");
        }
      }
    } catch (error) {
      console.error("Logout request failed:", error);
      if (isMounted) {
        setError("An error occurred while logging out.");
      }
    } finally {
      if (isMounted) {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      {/* Show an error message if an error occurred during logout */}
      {/* {error && <Alert variant="danger">{error}</Alert>} */}

      {/* Show a success message if logout is successful */}
      {/* {success && <Alert variant="success">{success}</Alert>} */}

      {/* Button to trigger logout */}
      <Button
        variant="secondary"
        className="upgrade-to-pro"
        onClick={handleLogout}
        disabled={loading}
      >
        {loading ? (
          <span>Logging out...</span>
        ) : (
          <>
            <FontAwesomeIcon icon={faSignOutAlt} className="me-1" /> Logout
          </>
        )}
      </Button>

      {/* Black screen overlay */}
      {isLoggingOut && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Black background with some opacity
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            fontWeight: "bold",
            zIndex: 9999, // Ensure the overlay is on top of other elements
          }}
        >
          Logging out...
        </div>
      )}
    </div>
  );
};

export default Logout;
