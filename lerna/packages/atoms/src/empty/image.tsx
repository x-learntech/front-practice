import React from 'react';

import NO_DATA from './images/no_data.png';
import NO_SEARCH_RESULT from './images/no_search_result.png';
import DATA_LOAD_FAIL from './images/data_load_fail.png';
import DATA_LOADING from './images/data_loading.png';
import NO_APPROVAL from './images/no_approval.png';
import NO_DEVELOPED from './images/no_developed.png';
import NO_MESSAGE from './images/no_message.png';
import NO_NETWORK from './images/no_network.png';
import NO_PERMISSION from './images/no_permission.png';
import NO_RELEASE from './images/no_release.png';
import NO_UPLOAD_FILE from './images/no_upload_file.png';
import PAGE_NOT_FOUND from './images/page_not_found.png';

// 以下代码要依托 webpack 的环境支持
// const imageFiles = require.context('./images', true, /.png$/)
// const images = imageFiles.keys().reduce((modules: object, modulePath: string) => {
//     const moduleName = modulePath.replace(/^.\/(.*)\.png/,'$1')
//     const value = imageFiles(modulePath)
//     modules[moduleName] = value
//     return modules
// }, {})


export const noDataEmptyImg = <img alt='no_data' src={NO_DATA} />;
export const noSearchResultEmptyImg = <img alt='no_search_result' src={NO_SEARCH_RESULT} />;
export const dataLoadFailEmptyImg = <img alt='data_load_fail' src={DATA_LOAD_FAIL} />;
export const dataLoadingEmptyImg = <img alt='data_loading' src={DATA_LOADING} />;
export const noApprovalEmptyImg = <img alt='no_approval' src={NO_APPROVAL} />;
export const noDevelopedEmptyImg = <img alt='no_developed' src={NO_DEVELOPED} />;
export const noMessageEmptyImg = <img alt='no_message' src={NO_MESSAGE} />;
export const noNetworkEmptyImg = <img alt='no_network' src={NO_NETWORK} />;
export const noPermissionEmptyImg = <img alt='no_permission' src={NO_PERMISSION} />;
export const noReleaseEmptyImg = <img alt='no_release' src={NO_RELEASE} />;
export const noUploadFileEmptyImg = <img alt='no_upload_file' src={NO_UPLOAD_FILE} />;
export const pageNotFoundEmptyImg = <img alt='page_not_found' src={PAGE_NOT_FOUND} />;
