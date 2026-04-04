import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SteeringWheel({
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
          d="M16.135 7.752L11.237 7.41C10.738 6.71 9.925 6.25 9 6.25C8.075 6.25 7.262 6.71 6.763 7.41L1.862 7.767C1.793 8.168 1.75 8.579 1.75 9C1.75 9.423 1.794 9.836 1.863 10.239L6.763 10.59C6.941 10.84 7.16 11.058 7.41 11.236L7.762 16.136C8.165 16.206 8.577 16.249 9 16.249C9.423 16.249 9.835 16.205 10.238 16.136L10.59 11.236C10.84 11.058 11.058 10.84 11.237 10.59L16.138 10.231C16.207 9.83 16.25 9.42 16.25 8.999C16.25 8.573 16.206 8.158 16.135 7.752ZM9 10C8.448 10 8 9.552 8 9C8 8.448 8.448 8 9 8C9.552 8 10 8.448 10 9C10 9.552 9.552 10 9 10Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M1 9C1 4.58168 4.58179 1 9 1C13.4182 1 17 4.58168 17 9C17 13.4183 13.4182 17 9 17C4.58179 17 1 13.4183 1 9ZM9 2.5C5.41021 2.5 2.5 5.41012 2.5 9C2.5 12.5899 5.41021 15.5 9 15.5C12.5898 15.5 15.5 12.5899 15.5 9C15.5 5.41012 12.5898 2.5 9 2.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SteeringWheel;
