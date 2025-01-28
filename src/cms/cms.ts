import CMS from 'decap-cms-app';
import type { CmsConfig } from 'decap-cms-core';

const config: CmsConfig = {
  backend: {
    name: 'git-gateway',
    branch: 'main',
  },
  media_folder: 'public/images/uploads',
  public_folder: '/images/uploads',
  collections: [
    // Collections configuration remains the same
  ],
};

CMS.init({ config });

export default CMS;