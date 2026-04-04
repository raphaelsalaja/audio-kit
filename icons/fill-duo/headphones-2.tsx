import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Headphones2({
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
          d="M2 9.75C2 9.33579 2.33579 9 2.75 9L4.75 9C5.71621 9 6.5 9.78379 6.5 10.75V14.25C6.5 15.2162 5.71621 16 4.75 16H3.75C2.78379 16 2 15.2162 2 14.25V9.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.5 10.75C11.5 9.78379 12.2838 9 13.25 9L15.25 9C15.6642 9 16 9.33579 16 9.75V14.25C16 15.2162 15.2162 16 14.25 16H13.25C12.2838 16 11.5 15.2162 11.5 14.25V10.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 9C2 5.13379 5.13379 2 9 2C12.8662 2 16 5.13379 16 9V9.75C16 9.33579 15.6642 9 15.25 9H14.5C14.5 5.96221 12.0378 3.5 9 3.5C5.96221 3.5 3.5 5.96221 3.5 9H2.75C2.33579 9 2 9.33579 2 9.75V9Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Headphones2;
