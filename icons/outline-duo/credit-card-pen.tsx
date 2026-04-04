import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCardPen({
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
          d="M9.38175 12.8379C9.48525 12.4722 9.68356 12.1343 9.95496 11.8633L13.1161 8.70219C13.7113 8.10749 14.5487 7.76711 15.4144 7.76711C15.7 7.76711 15.9782 7.8169 16.2498 7.8877V7.25H1.74976V12.25C1.74976 13.355 2.64516 14.25 3.74976 14.25H8.94356L9.38175 12.8379Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 7.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 11.25H7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.25V5.75C16.25 4.646 15.355 3.75 14.25 3.75H3.75C2.645 3.75 1.75 4.646 1.75 5.75V12.25C1.75 13.354 2.645 14.25 3.75 14.25H8.1998"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.5459 15.4542L16.7071 12.293C17.0976 11.9025 17.0976 11.2693 16.7071 10.8788L16.1213 10.293C15.7308 9.9025 15.0976 9.9025 14.7071 10.293L11.5459 13.4542L10.7501 16.2501L13.5459 15.4542Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M13.5459 15.4542L16.7071 12.293C17.0976 11.9025 17.0976 11.2693 16.7071 10.8788L16.1213 10.293C15.7308 9.9025 15.0976 9.9025 14.7071 10.293L11.5459 13.4542L10.7501 16.2501L13.5459 15.4542Z"
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

export default CreditCardPen;
