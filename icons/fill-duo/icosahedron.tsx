import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Icosahedron({
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
          d="M9 16.6865C8.5234 16.6865 8.04689 16.5635 7.62109 16.3169L3.37109 13.8521C2.52539 13.3619 2 12.4502 2 11.4732V6.52689C2 5.54979 2.52539 4.63819 3.37109 4.14799L7.62009 1.68319C8.46869 1.19049 9.52631 1.18949 10.3789 1.68319L14.6289 4.14799C15.4746 4.63819 16 5.54989 16 6.52689V11.4722C16.001 12.4493 15.4766 13.3614 14.6299 13.8521L10.3799 16.3169C9.95511 16.5635 9.4776 16.6865 9 16.6865Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.0928 13H2.90731C2.63781 13 2.38781 12.855 2.25501 12.6201C2.12221 12.3852 2.1251 12.0967 2.2638 11.8652L8.35661 1.6772C8.62811 1.2241 9.37221 1.2241 9.64371 1.6772L15.7365 11.8652C15.8752 12.0966 15.8781 12.3852 15.7453 12.6201C15.6125 12.855 15.3623 13 15.0928 13Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Icosahedron;
