import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FilePlay({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M17.124 13.155L12.92 10.677C12.527 10.445 12.037 10.443 11.641 10.668C11.246 10.894 11 11.317 11 11.772V16.727C11 17.182 11.246 17.605 11.641 17.831C11.837 17.942 12.055 17.998 12.273 17.998C12.497 17.998 12.721 17.939 12.92 17.822L17.124 15.344C17.516 15.113 17.749 14.703 17.749 14.249C17.749 13.795 17.515 13.385 17.123 13.154L17.124 13.155Z"
          fill={secondaryfill}
        />
        <path
          d="M9.5 11.773V16.728C9.5 16.7836 9.50965 16.837 9.51933 16.8907C9.52585 16.9268 9.53238 16.963 9.536 17H4.75C3.233 17 2 15.767 2 14.25V3.75C2 2.233 3.233 1 4.75 1H10.336C10.803 1 11.242 1.182 11.573 1.513L15.487 5.427C15.818 5.757 16 6.197 16 6.664V10.752L13.682 9.386C13.257 9.135 12.771 9.003 12.275 9.003C11.8462 9.003 11.4988 9.00245 11.1674 9.00193C10.8649 9.00146 10.5757 9.001 10.25 9.001H5.75C5.336 9.001 5 9.337 5 9.751C5 10.165 5.336 10.501 5.75 10.501H9.826C9.623 10.889 9.5 11.321 9.5 11.773ZM7.75 6H5.75C5.336 6 5 6.336 5 6.75C5 7.164 5.336 7.5 5.75 7.5H7.75C8.164 7.5 8.5 7.164 8.5 6.75C8.5 6.336 8.164 6 7.75 6ZM11.501 6.499C10.951 6.499 10.501 6.049 10.501 5.499L10.5 2.578L14.433 6.499H11.501Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FilePlay;
