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
          d="M15.1635 5.61839L12.3815 2.8364C12.0065 2.4614 11.4975 2.2505 10.9675 2.2505H7.03259C6.50259 2.2505 5.99359 2.4614 5.61859 2.8364L2.83661 5.61839C2.46161 5.99339 2.25061 6.5024 2.25061 7.0325V10.9676C2.25061 11.4976 2.46161 12.0064 2.83661 12.3814L5.61859 15.1636C5.99359 15.5386 6.50259 15.7495 7.03259 15.7495H10.9675C11.4975 15.7495 12.0065 15.5386 12.3815 15.1636L15.1635 12.3814C15.5385 12.0064 15.7495 11.4976 15.7495 10.9676V7.0325C15.7495 6.5025 15.5385 5.99339 15.1635 5.61839ZM6.75 6.25C6.75 5.4219 7.4216 4.75 8.25 4.75C9.0784 4.75 9.75 5.4219 9.75 6.25C9.75 7.0781 9.0784 7.75 8.25 7.75C7.4216 7.75 6.75 7.0781 6.75 6.25ZM9.75 13.25C8.9216 13.25 8.25 12.5781 8.25 11.75C8.25 10.9219 8.9216 10.25 9.75 10.25C10.5784 10.25 11.25 10.9219 11.25 11.75C11.25 12.5781 10.5784 13.25 9.75 13.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M8.25 7.75C9.0784 7.75 9.75 7.078 9.75 6.25C9.75 5.422 9.0784 4.75 8.25 4.75C7.4216 4.75 6.75 5.422 6.75 6.25C6.75 7.078 7.4216 7.75 8.25 7.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 14.25L5.04199 12.725C5.17699 12.55 5.25 12.335 5.25 12.114V9.437C5.25 9.158 5.36601 8.892 5.57101 8.703L7.13589 7.2541"
          fill="none"
          stroke={fill}
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
          d="M11.7959 2.25H6.61816C6.35296 2.25 6.09857 2.35539 5.91107 2.54289L2.54276 5.91119C2.35526 6.09869 2.24988 6.3531 2.24988 6.6183V11.796"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 10.25C8.9216 10.25 8.25 10.922 8.25 11.75C8.25 12.578 8.9216 13.25 9.75 13.25C10.5784 13.25 11.25 12.578 11.25 11.75C11.25 10.922 10.5784 10.25 9.75 10.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 3.75L12.958 5.27499C12.823 5.44999 12.75 5.665 12.75 5.886V8.563C12.75 8.842 12.634 9.108 12.429 9.297L10.8641 10.7459"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Cryptography;
