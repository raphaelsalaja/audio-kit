import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cubes({
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
          d="M8.398 1.586L5.848 3.065C5.478 3.28 5.25 3.675 5.25 4.103V7.071C5.25 7.499 5.478 7.894 5.848 8.109L8.398 9.588C8.77 9.804 9.23 9.804 9.602 9.588L12.152 8.109C12.522 7.894 12.75 7.499 12.75 7.071V4.103C12.75 3.675 12.522 3.28 12.152 3.065L9.602 1.586C9.23 1.37 8.77 1.37 8.398 1.586Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.648 8.086L2.098 9.565C1.728 9.78 1.5 10.175 1.5 10.603V13.571C1.5 13.999 1.728 14.394 2.098 14.609L4.648 16.088C5.02 16.304 5.48 16.304 5.852 16.088L8.402 14.609C8.772 14.394 9 13.999 9 13.571V10.603C9 10.175 8.772 9.78 8.402 9.565L5.852 8.086C5.48 7.87 5.02 7.87 4.648 8.086Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.84 10.005L5.25 12.087L1.66 10.005"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 16.25V12.087"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.148 8.086L9.598 9.565C9.228 9.78 9 10.175 9 10.603V13.571C9 13.999 9.228 14.394 9.598 14.609L12.148 16.088C12.52 16.304 12.98 16.304 13.352 16.088L15.902 14.609C16.272 14.394 16.5 13.999 16.5 13.571V10.603C16.5 10.175 16.272 9.78 15.902 9.565L13.352 8.086C12.98 7.87 12.52 7.87 12.148 8.086Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.34 10.005L12.75 12.087L9.16 10.005"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 16.25V12.087"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.398 1.586L5.848 3.065C5.478 3.28 5.25 3.675 5.25 4.103V7.071C5.25 7.499 5.478 7.894 5.848 8.109L8.398 9.588C8.77 9.804 9.23 9.804 9.602 9.588L12.152 8.109C12.522 7.894 12.75 7.499 12.75 7.071V4.103C12.75 3.675 12.522 3.28 12.152 3.065L9.602 1.586C9.23 1.37 8.77 1.37 8.398 1.586Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.59 3.505L9 5.587L5.41 3.505"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 9.75001V5.58701"
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

export default Cubes;
