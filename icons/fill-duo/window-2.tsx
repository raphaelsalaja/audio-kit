import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Window2({
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
          d="M17 7V13.25C17 14.7631 15.7699 16 14.25 16H3.75C2.23006 16 1 14.7631 1 13.25V7H17Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.2501 2H3.75006C2.23346 2 1.00006 3.2334 1.00006 4.75V7H17.0001V4.75C17.0001 3.2334 15.7667 2 14.2501 2ZM3.50006 5.5C2.94776 5.5 2.50006 5.0522 2.50006 4.5C2.50006 3.9478 2.94776 3.5 3.50006 3.5C4.05236 3.5 4.50006 3.9478 4.50006 4.5C4.50006 5.0522 4.05226 5.5 3.50006 5.5ZM6.50006 5.5C5.94776 5.5 5.50006 5.0522 5.50006 4.5C5.50006 3.9478 5.94776 3.5 6.50006 3.5C7.05236 3.5 7.50006 3.9478 7.50006 4.5C7.50006 5.0522 7.05226 5.5 6.50006 5.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Window2;
