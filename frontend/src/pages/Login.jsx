import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      // Placeholder for actual authentication check
      setUser(null);
    } catch (err) {
      setUser(null);
    }
  }

  const handleSignIn = () => {
    // Placeholder for actual sign in
    console.log('Sign in clicked');
  };

  const handleSignOut = async () => {
    try {
      // Placeholder for actual sign out
      setUser(null);
      navigate('/');
    } catch (err) {
      console.error("Error during sign-out:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
          Sign In
        </h2>
        {user ? (
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              Welcome back, <span className="font-semibold">{user.username || user.attributes?.email}</span>
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-sm">
                {JSON.stringify(user.attributes, null, 2)}
              </pre>
            </div>
            <button
              onClick={handleSignOut}
              className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-200"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Sign in to access additional features and content.
            </p>
            <button
              onClick={handleSignIn}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200"
            >
              Sign in with AWS Cognito
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full py-2 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-200"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;