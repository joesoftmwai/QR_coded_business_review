import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex  flex-col items-center justify-between bg-gray-100 ">
        <div className="w-[1695px] rounded-md shadow-md bg-white text-black text-center">
          <div className="flex justify-center my-16">
            <Image
              src="/empire-classic.png"
              alt="Vercel Logo"
              width={440}
              height={350}
            />
          </div>
          <div>
            <p className="text-9xl font-normal font-pacifico">
              thanks for your business!
            </p>
          </div>

          <div className="flex justify-center my-24">
            <Image
              src="/thee-qr-code.png"
              alt="Vercel Logo"
              width={850}
              height={400}
            />
          </div>

          <div>
            <p className="text-7xl font-comfortaa">Scan this QR code</p>
            <p className="text-7xl font-comfortaa">
              to make our day by leaving
            </p>
            <p className="text-7xl font-comfortaa">us a review on</p>
          </div>

          <div className="flex justify-center mt-14 mb-14">
            <Image
              src="/google-rating.png"
              alt="Vercel Logo"
              width={575}
              height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
}
