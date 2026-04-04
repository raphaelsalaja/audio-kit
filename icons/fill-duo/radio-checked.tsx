import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RadioChecked({
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
          d="M9.00009 13C11.2092 13 13.0001 11.2091 13.0001 9C13.0001 6.79086 11.2092 5 9.00009 5C6.79095 5 5.00009 6.79086 5.00009 9C5.00009 11.2091 6.79095 13 9.00009 13Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default RadioChecked;
