import {ModPreviewModel} from './ModPreviewModel';
import {UserProfileModel} from './UserProfileModel';

export class ModPageModel {
  id: number;
  fullDescription: string;
  customCss: string;
  downloadPath: string;
  modPreview: ModPreviewModel;
  profile: UserProfileModel;
}
