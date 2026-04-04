import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cryptography({
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
          d="M8.25 7.75C9.0784 7.75 9.75 7.078 9.75 6.25C9.75 5.422 9.0784 4.75 8.25 4.75C7.4216 4.75 6.75 5.422 6.75 6.25C6.75 7.078 7.4216 7.75 8.25 7.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 14.25L5.042 12.725C5.177 12.55 5.25 12.335 5.25 12.114V9.437C5.25 9.158 5.366 8.892 5.571 8.703L7.1359 7.2541"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.2041 15.75H11.3818C11.647 15.75 11.9014 15.6446 12.0889 15.4571L15.4572 12.0888C15.6447 11.9013 15.7501 11.6469 15.7501 11.3817V6.20399"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.7959 2.25H6.61821C6.35301 2.25 6.09861 2.35539 5.91111 2.54289L2.54281 5.91119C2.35531 6.09869 2.24991 6.3531 2.24991 6.6183V11.796"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 10.25C8.9216 10.25 8.25 10.922 8.25 11.75C8.25 12.578 8.9216 13.25 9.75 13.25C10.5784 13.25 11.25 12.578 11.25 11.75C11.25 10.922 10.5784 10.25 9.75 10.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 3.75L12.958 5.27499C12.823 5.44999 12.75 5.665 12.75 5.886V8.563C12.75 8.842 12.634 9.108 12.429 9.297L10.8641 10.7459"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Cryptography;
