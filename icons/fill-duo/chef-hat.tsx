import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChefHat({
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
          d="M3.99999 13V10.425C3.17799 10.257 2.42999 9.819 1.87899 9.164C1.16499 8.314 0.86599 7.192 1.05799 6.084C1.31699 4.593 2.48699 3.386 3.96899 3.081C4.49799 2.971 5.01299 2.978 5.51199 3.082C6.19399 1.848 7.49299 1 8.99999 1C10.507 1 11.806 1.848 12.488 3.083C12.986 2.979 13.502 2.972 14.032 3.081C15.515 3.387 16.684 4.594 16.942 6.086C17.134 7.194 16.834 8.315 16.12 9.164C15.569 9.819 14.822 10.258 14 10.425V13H8.99999H3.99999Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14 13V15.25C14 16.2162 13.2162 17 12.25 17H5.75C4.78379 17 4 16.2162 4 15.25V13H14Z"
          fill={fill}
        />
        <path
          d="M6.5 13H8V11.75C8 11.336 7.664 11 7.25 11C6.836 11 6.5 11.336 6.5 11.75V13Z"
          fill={fill}
        />
        <path
          d="M10 11.75V13H11.5V11.75C11.5 11.336 11.164 11 10.75 11C10.336 11 10 11.336 10 11.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChefHat;
