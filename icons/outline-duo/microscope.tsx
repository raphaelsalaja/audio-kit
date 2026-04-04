import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Microscope({
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
          d="M8.10734 15.25C8.17831 15.0067 8.21637 14.7494 8.21637 14.4832C8.21637 12.9737 6.99268 11.75 5.48318 11.75C3.97369 11.75 2.75 12.9737 2.75 14.4832C2.75 14.7494 2.78806 15.0067 2.85903 15.25H8.10734Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M6.93245 1.95334L6.01876 2.64506C5.57842 2.97842 5.49171 3.60562 5.82506 4.04595L7.93766 6.83646C8.27101 7.27679 8.89821 7.36351 9.33854 7.03015L10.2522 6.33843C10.6926 6.00507 10.7793 5.37787 10.4459 4.93754L8.33333 2.14703C7.99998 1.7067 7.37278 1.61998 6.93245 1.95334Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.797 6.68402L10.789 7.99502"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.494 4.92798L4.791 6.21698C3.25 7.38398 2.946 9.57898 4.113 11.12L4.684 11.874"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.217 12.197L14.435 9.00403"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 15.25H2.75V14.5C2.75 12.981 3.981 11.75 5.5 11.75C7.019 11.75 8.25 12.981 8.25 14.5V15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.93245 1.95334L6.01876 2.64506C5.57842 2.97842 5.49171 3.60562 5.82506 4.04595L7.93766 6.83646C8.27101 7.27679 8.89821 7.36351 9.33854 7.03015L10.2522 6.33843C10.6926 6.00507 10.7793 5.37787 10.4459 4.93754L8.33333 2.14703C7.99998 1.7067 7.37278 1.61998 6.93245 1.95334Z"
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

export default Microscope;
