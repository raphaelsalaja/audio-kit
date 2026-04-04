import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Highlighter({
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
          d="M14.8234 14.2551C14.2006 13.4462 13.4866 12.3187 12.957 10.868C12.657 10.045 12.473 9.275 12.361 8.598C12.28 8.11 11.868 7.75 11.374 7.75H8.99999H6.62599C6.13199 7.75 5.71899 8.11 5.63899 8.598C5.52699 9.275 5.34299 10.045 5.04299 10.868C4.51331 12.3189 3.79914 13.4459 3.1763 14.2551H14.8234Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M15.25 14.78C14.552 13.966 13.613 12.665 12.957 10.868C12.657 10.045 12.473 9.275 12.361 8.598C12.28 8.11 11.868 7.75 11.374 7.75H9H6.626C6.132 7.75 5.719 8.11 5.639 8.598C5.527 9.275 5.343 10.045 5.043 10.868C4.387 12.665 3.448 13.965 2.75 14.78"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 16.25L15.359 15.374C15.434 14.777 14.968 14.25 14.367 14.25H9H3.633C3.032 14.25 2.566 14.777 2.641 15.374L2.75 16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 5.25V3.819C6.75 3.625 6.864 3.449 7.042 3.37L10.559 1.807C10.884 1.663 11.25 1.9 11.25 2.256V5.25"
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

export default Highlighter;
