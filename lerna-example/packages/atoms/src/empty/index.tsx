import React, { FC } from 'react';
import { Empty, EmptyProps } from 'antd';
import { dataLoadFailEmptyImg, dataLoadingEmptyImg, noApprovalEmptyImg, noDataEmptyImg, noDevelopedEmptyImg, noMessageEmptyImg, noNetworkEmptyImg, noPermissionEmptyImg, noReleaseEmptyImg, noSearchResultEmptyImg, noUploadFileEmptyImg, pageNotFoundEmptyImg } from './image';

interface VVEmptyType extends FC<EmptyProps> {
    PRESENTED_IMAGE_DEFAULT: React.ReactNode;
    PRESENTED_IMAGE_SIMPLE: React.ReactNode;
    NO_DATA: React.ReactNode;
    NO_SEARCH_RESULT: React.ReactNode;
    DATA_LOAD_FAIL: React.ReactNode;
    DATA_LOADING: React.ReactNode;
    NO_APPROVAL: React.ReactNode;
    NO_DEVELOPED: React.ReactNode;
    NO_MESSAGE: React.ReactNode;
    NO_NETWORK: React.ReactNode;
    NO_PERMISSION: React.ReactNode;
    NO_RELEASE: React.ReactNode;
    NO_UPLOAD_FILE: React.ReactNode;
    PAGE_NOT_FOUND: React.ReactNode;
    displayName: string;
  }

const VVEmpty: VVEmptyType = (props) => {
    return (
        <Empty {...props} />
    );
}

VVEmpty.displayName = 'VVEmpty';

VVEmpty.PRESENTED_IMAGE_DEFAULT = Empty.PRESENTED_IMAGE_DEFAULT;
VVEmpty.PRESENTED_IMAGE_SIMPLE = Empty.PRESENTED_IMAGE_SIMPLE;
VVEmpty.NO_DATA = noDataEmptyImg;
VVEmpty.NO_SEARCH_RESULT = noSearchResultEmptyImg;
VVEmpty.DATA_LOAD_FAIL = dataLoadFailEmptyImg;
VVEmpty.DATA_LOADING = dataLoadingEmptyImg;
VVEmpty.NO_APPROVAL = noApprovalEmptyImg;
VVEmpty.NO_DEVELOPED = noDevelopedEmptyImg;
VVEmpty.NO_MESSAGE = noMessageEmptyImg;
VVEmpty.NO_NETWORK = noNetworkEmptyImg;
VVEmpty.NO_PERMISSION = noPermissionEmptyImg;
VVEmpty.NO_RELEASE = noReleaseEmptyImg;
VVEmpty.NO_UPLOAD_FILE = noUploadFileEmptyImg;
VVEmpty.PAGE_NOT_FOUND = pageNotFoundEmptyImg;

export default VVEmpty;
