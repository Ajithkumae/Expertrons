import DeviceInfo from "react-native-device-info"; 
import { Platform } from 'react-native';

const device = DeviceInfo.getDeviceType();

export function setImageUrl(imgUrl, mobilewidth, mobileheight, tabletwidth, tabletheight) {
    
    const width = (device === "Handset") ? mobilewidth : tabletwidth;
    const height = (device === "Handset") ? mobileheight : tabletheight;
    if (imgUrl === "" || imgUrl === undefined || imgUrl === null) {
        return "./images/cart.png"
    }
    else if (imgUrl.includes("images.travelxp.com")) {
        return imgUrl + "?tr=w-" + width + ",h-" + height + ",c-force"
    }
    else {
        return imgUrl
    }
}
export function isValidEmail(email) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email)
}
