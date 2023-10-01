import { useSession, signIn, signOut } from "next-auth/react";
import "../../src/app/globals.css";

// const Dashboard = () => {
//   const { data: session } = useSession();
//   console.log("session", session);
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     );
//   }
//   return (
//     <div className="bg-red-200">
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </div>
//   );
// };

const Dashboard = () => {
  return (
    <div className="bg-red-200">
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};
export default Dashboard;
