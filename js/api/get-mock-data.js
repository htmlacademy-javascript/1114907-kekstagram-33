import { getCommentsData } from './get-comments-data.js';
import { getPhotosData } from './get-photos-data.js';

const getMockData = () => getPhotosData(getCommentsData);

export {getMockData};
