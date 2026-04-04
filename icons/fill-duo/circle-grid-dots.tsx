import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleGridDots({
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
          d="M9.00009 17C13.4184 17 17.0001 13.4183 17.0001 9C17.0001 4.58172 13.4184 1 9.00009 1C4.58181 1 1.00009 4.58172 1.00009 9C1.00009 13.4183 4.58181 17 9.00009 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.50009 10C6.05238 10 6.50009 9.55228 6.50009 9C6.50009 8.44772 6.05238 8 5.50009 8C4.94781 8 4.50009 8.44772 4.50009 9C4.50009 9.55228 4.94781 10 5.50009 10Z"
          fill={fill}
        />
        <path
          d="M9.00009 13.5C9.55238 13.5 10.0001 13.0523 10.0001 12.5C10.0001 11.9477 9.55238 11.5 9.00009 11.5C8.44781 11.5 8.00009 11.9477 8.00009 12.5C8.00009 13.0523 8.44781 13.5 9.00009 13.5Z"
          fill={fill}
        />
        <path
          d="M9.00009 10C9.55238 10 10.0001 9.55228 10.0001 9C10.0001 8.44772 9.55238 8 9.00009 8C8.44781 8 8.00009 8.44772 8.00009 9C8.00009 9.55228 8.44781 10 9.00009 10Z"
          fill={fill}
        />
        <path
          d="M9.00009 6.5C9.55238 6.5 10.0001 6.05228 10.0001 5.5C10.0001 4.94772 9.55238 4.5 9.00009 4.5C8.44781 4.5 8.00009 4.94772 8.00009 5.5C8.00009 6.05228 8.44781 6.5 9.00009 6.5Z"
          fill={fill}
        />
        <path
          d="M12.5001 10C13.0524 10 13.5001 9.55228 13.5001 9C13.5001 8.44772 13.0524 8 12.5001 8C11.9478 8 11.5001 8.44772 11.5001 9C11.5001 9.55228 11.9478 10 12.5001 10Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleGridDots;
