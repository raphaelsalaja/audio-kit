import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CrosshairsSlash({
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
          d="M10.5844 10.5976C10.5888 10.5932 10.5932 10.5888 10.5976 10.5844L14.6765 6.50546C15.5085 7.00527 15.5 8.10265 15.5 9.00001C15.5 12.5899 12.5899 15.5 9.00001 15.5C8.05713 15.5 7.31478 15.1076 6.50633 14.6756L10.5844 10.5976Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M13.5962 4.40379C12.4199 3.22753 10.7949 2.5 9 2.5C5.41015 2.5 2.5 5.41015 2.5 9C2.5 10.7949 3.22753 12.4199 4.40379 13.5962L7.409 10.591C7.00183 10.1838 6.75 9.62131 6.75 9C6.75 7.75736 7.75736 6.75 9 6.75C9.62131 6.75 10.1838 7.00183 10.591 7.409L13.5962 4.40379Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M4.404 13.596C3.228 12.42 2.5 10.795 2.5 9C2.5 5.41 5.41 2.5 9 2.5C10.795 2.5 12.42 3.228 13.596 4.404"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.409 10.591C7.002 10.184 6.75 9.621 6.75 9C6.75 7.757 7.757 6.75 9 6.75C9.621 6.75 10.184 7.002 10.591 7.409"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 1V2.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17 9H15.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 17V15.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1 9H2.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 16L16 2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.0446 15.1975C7.662 15.3921 8.3179 15.5 9 15.5C12.59 15.5 15.5 12.5898 15.5 9C15.5 8.3186 15.3927 7.6621 15.1979 7.0444"
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

export default CrosshairsSlash;
