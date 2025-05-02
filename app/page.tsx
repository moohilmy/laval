import { Landing, Products, Testimonial , Contact} from "@/Sections";


export default function Home() {
  return (
    <>
      <Landing/>
      <div className="wrapper-page">
      <Products/>
      <Testimonial/>
      <Contact/>
      </div>
    </>
  );
}
