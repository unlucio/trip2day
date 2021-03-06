import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  site: process.env.SITE || "http://localhost:3000",
  // Configure one or more authentication providers
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    // ...add more providers here
  ],

  callbacks: {
    signIn: async (user, account, profile) => {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return Promise.resolve(true);
      } else {
        // Return false to display a default error message
        //   return Promise.resolve(false)
        // You can also Reject this callback with an Error or with a URL:
        return Promise.reject(new Error("Qualcosa è andato storto")); // Redirect to error page
        //   return Promise.reject('/path/to/redirect')        // Redirect to a URL
      }
    },
  },

  events: {
    signIn: async (message) => {
      "sei loggato";
    },
    signOut: async (message) => {
      "sei sloggato";
    },
  },

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);
