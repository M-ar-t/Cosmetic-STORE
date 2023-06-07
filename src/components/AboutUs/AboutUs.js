import s from "./AboutUs.module.scss"
import pic1 from "../../img/blog_pic1.png"
import pic2 from "../../img/blog_pic2.png"
import pic3 from "../../img/blog_pic3.png"
import AboutUsItem from "./AboutUsItem";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={s.container}>
      <AboutUsItem data-aos="zoom-in-right" even ={true} header ="Lorem ipsum dolor sit amet" main_text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et. Eu facilisis sed odio morbi quis commodo odio. Mauris pharetra et ultrices neque. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Mattis nunc sed blandit libero volutpat sed cras ornare. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Posuere urna nec tincidunt praesent semper feugiat nibh. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Donec ac odio tempor orci dapibus ultrices in." img ={pic1}/>
      <AboutUsItem data-aos="zoom-in-left" even ={false} header ="Sed do eiusmod tempor incididunt " main_text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et. Eu facilisis sed odio morbi quis commodo odio. Mauris pharetra et ultrices neque. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Mattis nunc sed blandit libero volutpat sed cras ornare. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Posuere urna nec tincidunt praesent semper feugiat nibh. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Donec ac odio tempor orci dapibus ultrices in." img ={pic2}/>
      <AboutUsItem data-aos="zoom-in-right" even ={true} header ="Mauris pharetra" main_text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et. Eu facilisis sed odio morbi quis commodo odio. Mauris pharetra et ultrices neque. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Mattis nunc sed blandit libero volutpat sed cras ornare. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Posuere urna nec tincidunt praesent semper feugiat nibh. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Donec ac odio tempor orci dapibus ultrices in." img ={pic3}/>
    </div>
  );
}

export default AboutUs;
