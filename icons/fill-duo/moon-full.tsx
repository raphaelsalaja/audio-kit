import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoonFull({
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
          d="M1 9C1 4.58168 4.58179 1 9 1C13.4182 1 17 4.58168 17 9C17 13.4183 13.4182 17 9 17C4.58179 17 1 13.4183 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.75 12.5C10.164 12.5 10.5 12.1642 10.5 11.75C10.5 11.3358 10.164 11 9.75 11C9.336 11 9 11.3358 9 11.75C9 12.1642 9.336 12.5 9.75 12.5Z"
          fill={fill}
        />
        <path
          d="M6.5 10C7.052 10 7.5 9.5523 7.5 9C7.5 8.4477 7.052 8 6.5 8C5.948 8 5.5 8.4477 5.5 9C5.5 9.5523 5.948 10 6.5 10Z"
          fill={fill}
        />
        <path
          d="M10.75 8C11.44 8 12 7.4404 12 6.75C12 6.0596 11.44 5.5 10.75 5.5C10.06 5.5 9.5 6.0596 9.5 6.75C9.5 7.4404 10.06 8 10.75 8Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MoonFull;
