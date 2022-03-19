import FBIcon from "../images/icon-facebook.svg";
import IGIcon from "../images/icon-instagram.svg";
import TWIcon from "../images/icon-twitter.svg";
import YTIcon from "../images/icon-youtube.svg";
const IconSelect = (Icon: string) => {
  let Icons: any = {
    Facebook: FBIcon,
    Instagram: IGIcon,
    Twitter: TWIcon,
    YouTube: YTIcon,
  };
  return Icons[Icon] || Icons.Facebook;
};
export default IconSelect;
