import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Books({
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
          d="M16 6.75C15.829 6.363 15.581 5.667 15.578 4.766C15.575 3.848 15.828 3.14 16 2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.75 2.75H6.25C5.145 2.75 4.25 3.645 4.25 4.75C4.25 5.855 5.145 6.75 6.25 6.75H16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16 14.75C15.829 14.363 15.581 13.667 15.578 12.766C15.575 11.848 15.828 11.14 16 10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 14.75H16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.75 10.75H6.25C5.145 10.75 4.25 11.645 4.25 12.75C4.25 13.855 5.145 14.75 6.25 14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 10.75C2.171 10.363 2.419 9.667 2.422 8.766C2.425 7.848 2.172 7.14 2 6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.25 6.75H11.75C12.855 6.75 13.75 7.645 13.75 8.75C13.75 9.855 12.855 10.75 11.75 10.75H1.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.5 13H8.5V16.5C8.5 16.702 8.62199 16.885 8.80899 16.962C8.99599 17.041 9.21 16.997 9.354 16.854L10.5 15.708L11.646 16.854C11.742 16.95 11.87 17 12 17C12.064 17 12.13 16.988 12.191 16.962C12.378 16.885 12.5 16.702 12.5 16.5V13Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Books;
