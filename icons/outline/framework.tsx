import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Framework({
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
        <polygon
          fill={secondaryfill}
          points="9 5.23 9 9 5.75 10.885 9 12.77 12.25 10.885 12.25 7.115 9 5.23"
          strokeWidth="0"
        />
        <polygon
          fill="none"
          points="9 5.23 5.75 7.115 5.75 10.885 9 12.77 12.25 10.885 12.25 7.115 9 5.23"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="5.75"
          x2="3.017"
          y1="7.115"
          y2="5.53"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="14.983"
          x2="12.25"
          y1="5.53"
          y2="7.115"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="15.938"
          y2="12.77"
        />
        <path
          d="m7.997,2.332l-4.25,2.465c-.617.358-.997,1.017-.997,1.73v4.946c0,.713.38,1.372.997,1.73l4.25,2.465c.621.36,1.386.36,2.007,0l4.25-2.465c.617-.358.997-1.017.997-1.73v-4.946c0-.713-.38-1.372-.997-1.73l-4.25-2.465c-.621-.36-1.386-.36-2.007,0Z"
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

export default Framework;
