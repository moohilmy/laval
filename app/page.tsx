import { Landing, Products, Testimonial , Contact} from "@/Sections";


export default function Home() {
  return (
    <div>
      <Landing/>
      <div className="wrapper-page">
      <Products/>
      <Testimonial/>
      <Contact/>
      </div>
    </div>
  );
}
