import Style from "./BannerImage.module.css";

export default function BannerImage() {
  return (
    <div>
        <img src="/image/bannerTurner.jpg" className={Style.banner}/>
    </div>
  )
}