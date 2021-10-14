import camelize from "camelize";
import {locations} from "./locationMock";

export const locationRequest =(searchTerm) => {
return new Promise((resolve, reject) => {
const locationMock = locations[searchTerm];
if(!locationMock){
    reject("Not Found");
}
resolve(locationMock)
})
};

export const locationTransform = (result) => {
    const {geometry={}} = camelize(result.results)[0];
    const {lat, lng} = geometry.location;

    return {lat, lng, viewport: geometry.viewport};
};