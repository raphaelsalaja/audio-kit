import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretExpandX({
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
          d="M14.999 8.58599L11.531 6.23799C11.199 6.01299 10.751 6.25099 10.751 6.65199V11.348C10.751 11.749 11.199 11.987 11.531 11.762L14.999 9.41399C15.292 9.21599 15.292 8.78399 14.999 8.58599Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.999 8.58599L11.531 6.23799C11.199 6.01299 10.751 6.25099 10.751 6.65199V11.348C10.751 11.749 11.199 11.987 11.531 11.762L14.999 9.41399C15.292 9.21599 15.292 8.78399 14.999 8.58599Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.001 8.58599L6.469 6.23799C6.801 6.01299 7.249 6.25099 7.249 6.65199V11.348C7.249 11.749 6.801 11.987 6.469 11.762L3.001 9.41399C2.708 9.21599 2.708 8.78399 3.001 8.58599Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.001 8.58599L6.469 6.23799C6.801 6.01299 7.249 6.25099 7.249 6.65199V11.348C7.249 11.749 6.801 11.987 6.469 11.762L3.001 9.41399C2.708 9.21599 2.708 8.78399 3.001 8.58599Z"
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

export default CaretExpandX;
