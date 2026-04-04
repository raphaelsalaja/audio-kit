import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PizzaSlice2({
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
          d="M3.75 9.451C3.971 9.323 4.227 9.25 4.5 9.25C5.328 9.25 6 9.922 6 10.75C6 11.578 5.328 12.25 4.5 12.25C4.227 12.25 3.97 12.177 3.75 12.049"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 4.99813C5.99266 4.91699 10.4405 5.8895 12.9925 10.4141L14.538 9.522C15.049 9.227 15.191 8.557 14.855 8.071C12.615 4.838 8.998 2.63 4.853 2.295C4.262 2.247 3.75 2.702 3.75 3.294V4.99813Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M8 10C8.55228 10 9 9.55228 9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9C7 9.55228 7.44772 10 8 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M3.75 9.451C3.971 9.323 4.227 9.25 4.5 9.25C5.328 9.25 6 9.922 6 10.75C6 11.578 5.328 12.25 4.5 12.25C4.227 12.25 3.97 12.177 3.75 12.049"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 5C7.729 5 11.202 7.161 13.061 10.374"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 15.25V14.595C7.25 14.21 6.833 13.97 6.5 14.162L5.25 14.884C4.583 15.269 3.75 14.788 3.75 14.018V3.294C3.75 2.702 4.262 2.247 4.853 2.295C8.998 2.63 12.615 4.838 14.855 8.071C15.191 8.557 15.049 9.227 14.538 9.522L10.751 11.708C10.132 12.065 9.751 12.726 9.751 13.44V16.249"
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

export default PizzaSlice2;
