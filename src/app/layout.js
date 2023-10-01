import { Providers } from "../../Store/Providers";
import "primereact/resources/primereact.min.css";
import "../assests/css/Styles.scss"
import "./globals.css"
import 'primeicons/primeicons.css';



export const metadata = {
  title: "S B Sons",
  description: "Supermart for everyone",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body>
        {/* <SessionProvider session={session}> */}
        <Providers>{children}</Providers>
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
