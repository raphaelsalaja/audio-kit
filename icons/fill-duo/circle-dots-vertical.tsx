import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleDotsVertical({
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
          d="M9.00011 17C13.4184 17 17.0001 13.4183 17.0001 9C17.0001 4.58172 13.4184 1 9.00011 1C4.58183 1 1.00012 4.58172 1.00012 9C1.00012 13.4183 4.58183 17 9.00011 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.00012 9C8.00012 8.449 8.44912 8 9.00012 8C9.55112 8 10.0001 8.449 10.0001 9C10.0001 9.551 9.55112 10 9.00012 10C8.44912 10 8.00012 9.551 8.00012 9Z"
          fill={fill}
        />
        <path
          d="M8.00012 5.5C8.00012 4.949 8.44912 4.5 9.00012 4.5C9.55112 4.5 10.0001 4.949 10.0001 5.5C10.0001 6.051 9.55112 6.5 9.00012 6.5C8.44912 6.5 8.00012 6.051 8.00012 5.5Z"
          fill={fill}
        />
        <path
          d="M8.00012 12.5C8.00012 11.949 8.44912 11.5 9.00012 11.5C9.55112 11.5 10.0001 11.949 10.0001 12.5C10.0001 13.051 9.55112 13.5 9.00012 13.5C8.44912 13.5 8.00012 13.051 8.00012 12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleDotsVertical;
