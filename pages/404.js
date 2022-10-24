
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";

export default function Custom404() {
    return <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center">
        <div className="text-center">
            <Image width="400px" height="400px" src="/images/404/404.webp" alt="" />
            <br />
            <br />
            <div className="d-flex justify-content-center">
                <Link href="/">
                    <Button className="text-white d-flex "><span className="mx-2">🡐 </span>  <span> Go Back To Home </span>   </Button></Link>
            </div>


        </div>
    </div>
}