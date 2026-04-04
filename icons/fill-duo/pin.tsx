import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pin({
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
          d="M2.25 7.75C2.25 4.02392 5.27195 1 9 1C12.7281 1 15.75 4.02392 15.75 7.75C15.75 10.2465 14.5289 12.4149 13.1601 13.9916C12.4711 14.7854 11.7294 15.4477 11.0501 15.9477C10.3835 16.4385 9.7341 16.8047 9.22585 16.9652C9.07886 17.0116 8.92114 17.0116 8.77415 16.9652C8.2659 16.8047 7.61652 16.4385 6.9499 15.9477C6.27063 15.4477 5.52887 14.7854 4.83989 13.9916C3.47115 12.4149 2.25 10.2465 2.25 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.25 7.75C6.25 6.23193 7.48104 5 9 5C10.519 5 11.75 6.23193 11.75 7.75C11.75 9.26807 10.519 10.5 9 10.5C7.48104 10.5 6.25 9.26807 6.25 7.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Pin;
