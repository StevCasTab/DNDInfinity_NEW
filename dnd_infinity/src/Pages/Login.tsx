import { GoogleLogin } from "@react-oauth/google";

export default function LoginPage() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          // This is a Google ID token (JWT)
          const idToken = credentialResponse.credential;
          console.log("Google ID token:", idToken);

          // If you're client-only, you can decode for UI,
          // but for real auth you should send idToken to your backend to verify.
        }}
        onError={() => console.log("Login Failed")}
        useOneTap
      />
    </div>
  );
}