import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tv3({
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
          d="M1 5.75C1 4.23079 2.23079 3 3.75 3H14.25C15.7692 3 17 4.23079 17 5.75V12.25C17 13.7692 15.7692 15 14.25 15H3.75C2.23079 15 1 13.7692 1 12.25V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11 5.5H4C3.724 5.5 3.5 5.724 3.5 6V12C3.5 12.276 3.724 12.5 4 12.5H11C11.276 12.5 11.5 12.276 11.5 12V6C11.5 5.724 11.276 5.5 11 5.5Z"
          fill={fill}
        />
        <path
          d="M14 8C14.552 8 15 7.552 15 7C15 6.448 14.552 6 14 6C13.448 6 13 6.448 13 7C13 7.552 13.448 8 14 8Z"
          fill={fill}
        />
        <path
          d="M14 11C14.552 11 15 10.552 15 10C15 9.448 14.552 9 14 9C13.448 9 13 9.448 13 10C13 10.552 13.448 11 14 11Z"
          fill={fill}
        />
        <path
          d="M12.5303 0.21967C12.2374 -0.0732233 11.7626 -0.0732233 11.4697 0.21967L9 2.68934L7.28033 0.96967C6.98744 0.676777 6.51256 0.676777 6.21967 0.96967C5.92678 1.26256 5.92678 1.73744 6.21967 2.03033L7.18934 3H10.8107L12.5303 1.28033C12.8232 0.987437 12.8232 0.512563 12.5303 0.21967Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Tv3;
