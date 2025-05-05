import Image from "next/image";

export default function loading() {
  return (
    <div className="h-screen fixed top-0 left-0 w-full flex items-center justify-center ">
      <Image src={'logo-symbol.svg'} alt="loading" height={500} width={500}/>
    </div>
  )
}
