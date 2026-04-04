import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Computer({
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
          d="M2.75301 14.747C2.52701 14.747 2.30601 14.647 2.15801 14.455C1.90701 14.129 1.96401 13.663 2.28801 13.41C2.33501 13.372 3.47001 12.5 5.25001 12.5C5.66401 12.5 6.00001 12.836 6.00001 13.25C6.00001 13.664 5.66401 14 5.25001 14C4.00801 14 3.21501 14.588 3.20701 14.594C3.07101 14.697 2.91101 14.747 2.75301 14.747Z"
          fill={secondaryfill}
        />
        <path
          d="M14.75 2H9.25C8.01 2 7 3.009 7 4.25V13.75C7 14.991 8.01 16 9.25 16H14.75C15.99 16 17 14.991 17 13.75V4.25C17 3.009 15.99 2 14.75 2ZM12 13C11.448 13 11 12.552 11 12C11 11.448 11.448 11 12 11C12.552 11 13 11.448 13 12C13 12.552 12.552 13 12 13ZM13.25 9H10.75C10.336 9 10 8.664 10 8.25C10 7.836 10.336 7.5 10.75 7.5H13.25C13.664 7.5 14 7.836 14 8.25C14 8.664 13.664 9 13.25 9ZM13.25 6.5H10.75C10.336 6.5 10 6.164 10 5.75C10 5.336 10.336 5 10.75 5H13.25C13.664 5 14 5.336 14 5.75C14 6.164 13.664 6.5 13.25 6.5Z"
          fill={fill}
        />
        <path
          d="M2.75 5C2.61221 5 2.5 5.11221 2.5 5.25V9.75C2.5 9.88779 2.61221 10 2.75 10H4.75C5.16421 10 5.5 10.3358 5.5 10.75C5.5 11.1642 5.16421 11.5 4.75 11.5H2.75C1.78379 11.5 1 10.7162 1 9.75V5.25C1 4.28379 1.78379 3.5 2.75 3.5H4.75C5.16421 3.5 5.5 3.83579 5.5 4.25C5.5 4.66421 5.16421 5 4.75 5H2.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Computer;
