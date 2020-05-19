import {
  SCANNING_RECEIPT,
  SCANNED_RECEIPT,
  SCANNING_RECEIPT_ERROR,
} from '../actions/actionTypes.ts';

const initUserState = {
  scanningReceipt: false,
  scannedReceipt: false,
  error: false,
  receipt: {},
  errorMessage: [],
};

const textRecogReducer = (state = initUserState, action: any) => {
  const stateCopy = { ...state };

  switch (action.type) {
    case SCANNING_RECEIPT: {
      stateCopy.scanningReceipt = true;
      break;
    }
    case SCANNED_RECEIPT: {
      stateCopy.scanningReceipt = true;
      stateCopy.scannedReceipt = true;
      stateCopy.receipt = action.payload;
      console.log('text', action.payload);

      break;
    }
    case SCANNING_RECEIPT_ERROR: {
      stateCopy.scanningReceipt = false;
      stateCopy.scannedReceipt = false;
      stateCopy.error = true;
      stateCopy.errorMessage = [action.payload];
      break;
    }
    default: {
      return stateCopy;
    }
  }

  return stateCopy;
};

export { initUserState, textRecogReducer };
