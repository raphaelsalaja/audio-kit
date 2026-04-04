import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CirclePercentage({
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
          d="M9 1C4.58168 1 1 4.58179 1 9C1 13.4182 4.58168 17 9 17C13.4183 17 17 13.4182 17 9C17 4.58179 13.4183 1 9 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.75 8C7.44 8 8 7.44 8 6.75C8 6.06 7.44 5.5 6.75 5.5C6.06 5.5 5.5 6.06 5.5 6.75C5.5 7.44 6.06 8 6.75 8Z"
          fill={fill}
        />
        <path
          d="M11.25 12.5C11.94 12.5 12.5 11.94 12.5 11.25C12.5 10.56 11.94 10 11.25 10C10.56 10 10 10.56 10 11.25C10 11.94 10.56 12.5 11.25 12.5Z"
          fill={fill}
        />
        <path
          d="M12.2803 5.71967C12.5732 6.01256 12.5732 6.48744 12.2803 6.78033L6.78033 12.2803C6.48744 12.5732 6.01256 12.5732 5.71967 12.2803C5.42678 11.9874 5.42678 11.5126 5.71967 11.2197L11.2197 5.71967C11.5126 5.42678 11.9874 5.42678 12.2803 5.71967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CirclePercentage;
