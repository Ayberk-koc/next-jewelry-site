function ReturnItemInBoxIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 12V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V12"
        stroke="#0C0A09"
      />
      <path
        d="M12 8H19.5C19.8148 8 20.1111 8.14819 20.3 8.4L21.8 10.4C22.2944 11.0592 21.824 12 21 12H15.5C15.1852 12 14.8889 11.8518 14.7 11.6L12 8Z"
        stroke="#0C0A09"
      />
      <path
        d="M12 8H4.5C4.18524 8 3.88885 8.14819 3.7 8.4L2.2 10.4C1.70557 11.0592 2.17595 12 3 12H8.5C8.81476 12 9.11115 11.8518 9.3 11.6L12 8Z"
        stroke="#0C0A09"
      />
      <path
        d="M9.58586 4L8 2L14.5001 2C15.3285 2 16.0001 2.67157 16.0001 3.5C16.0001 4.32843 15.3285 5 14.5001 5L13.0001 5"
        stroke="#0C0A09"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BoxIconCart() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 10V16.1459C4 17.2822 4.64201 18.321 5.65836 18.8292L10.6584 21.3292C11.5029 21.7515 12.4971 21.7515 13.3416 21.3292L18.3416 18.8292C19.358 18.321 20 17.2822 20 16.1459V10"
        stroke="#0C0A09"
      />
      <path
        d="M20 6L13.3416 2.67082C12.4971 2.24853 11.5029 2.24853 10.6584 2.67082L4 6L12 10L20 6Z"
        stroke="#0C0A09"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 6L12 10L14 13L22 9L20 6Z"
        stroke="#0C0A09"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 6L12 10L10 13L2 9L4 6Z"
        stroke="#0C0A09"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIconCart() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M13.5355 6.4644L6.46448 13.5355M13.5355 13.5354L6.46448 6.46436"
        stroke="#0C0A09"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DeleteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M4.16667 6.6665V14.9998C4.16667 16.8408 5.65905 18.3332 7.5 18.3332H12.5C14.3409 18.3332 15.8333 16.8408 15.8333 14.9998V6.6665M11.6667 9.1665V14.1665M8.33333 9.1665L8.33333 14.1665M13.3333 4.1665L12.1614 2.40867C11.8523 1.94501 11.3319 1.6665 10.7747 1.6665H9.22531C8.66805 1.6665 8.14767 1.94501 7.83856 2.40867L6.66667 4.1665M13.3333 4.1665H6.66667M13.3333 4.1665H17.5M6.66667 4.1665H2.5"
        stroke="#EF4444"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ReturnItemInBoxIcon, BoxIconCart, XIconCart, DeleteIcon };
