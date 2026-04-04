import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Users6({
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
          d="M9 9C10.1046 9 11 8.10457 11 7C11 5.89543 10.1046 5 9 5C7.89543 5 7 5.89543 7 7C7 8.10457 7.89543 9 9 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.80099 15.776C5.31199 15.628 4.98299 15.141 5.09199 14.641C5.48499 12.844 7.08499 11.499 8.99999 11.499C10.915 11.499 12.515 12.844 12.908 14.641C13.017 15.14 12.689 15.628 12.199 15.776C11.378 16.024 10.288 16.25 8.99999 16.25C7.71199 16.25 6.62199 16.025 5.80099 15.776Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 9C10.1046 9 11 8.10457 11 7C11 5.89543 10.1046 5 9 5C7.89543 5 7 5.89543 7 7C7 8.10457 7.89543 9 9 9Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.80099 15.776C5.31199 15.628 4.98299 15.141 5.09199 14.641C5.48499 12.844 7.08499 11.499 8.99999 11.499C10.915 11.499 12.515 12.844 12.908 14.641C13.017 15.14 12.689 15.628 12.199 15.776C11.378 16.024 10.288 16.25 8.99999 16.25C7.71199 16.25 6.62199 16.025 5.80099 15.776Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 4.75C14.5784 4.75 15.25 4.07843 15.25 3.25C15.25 2.42157 14.5784 1.75 13.75 1.75C12.9216 1.75 12.25 2.42157 12.25 3.25C12.25 4.07843 12.9216 4.75 13.75 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.584 7.248C13.639 7.246 13.694 7.244 13.75 7.244C15.423 7.244 16.829 8.391 17.223 9.941C17.353 10.452 17.012 10.961 16.505 11.108C15.862 11.294 15.048 11.46 14.102 11.493"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 4.75C5.07843 4.75 5.75 4.07843 5.75 3.25C5.75 2.42157 5.07843 1.75 4.25 1.75C3.42157 1.75 2.75 2.42157 2.75 3.25C2.75 4.07843 3.42157 4.75 4.25 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.41601 7.248C4.36101 7.246 4.30601 7.244 4.25001 7.244C2.57701 7.244 1.17101 8.391 0.777009 9.941C0.647009 10.452 0.988009 10.961 1.49501 11.108C2.13801 11.294 2.95201 11.46 3.89801 11.493"
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

export default Users6;
