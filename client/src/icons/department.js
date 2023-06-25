import { createSvgIcon } from '@material-ui/core/utils';

export const Department = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M12 22V18" />
    <path d="M12 18L6 14" />
    <path d="M12 18L18 14" />
    <path d="M12 14V10" />
    <path d="M12 10L8 6" />
    <path d="M12 10L16 6" />
    <path d="M12 6V2" />
  </svg>,
  'Department'
);
