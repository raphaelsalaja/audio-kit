import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagnifierAlert2({
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
          d="M1.5 7.75C1.5 4.29829 4.29829 1.5 7.75 1.5C11.2017 1.5 14 4.29829 14 7.75C14 11.2017 11.2017 14 7.75 14C4.29829 14 1.5 11.2017 1.5 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.6073 12.668L15.2197 16.2803C15.5126 16.5732 15.9874 16.5732 16.2803 16.2803C16.5732 15.9874 16.5732 15.5126 16.2803 15.2197L12.668 11.6073C12.3581 12.0018 12.0018 12.3581 11.6073 12.668Z"
          fill={fill}
        />
        <path
          d="M7.75 4.75C8.16421 4.75 8.5 5.08579 8.5 5.5V7.5C8.5 7.91421 8.16421 8.25 7.75 8.25C7.33579 8.25 7 7.91421 7 7.5V5.5C7 5.08579 7.33579 4.75 7.75 4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.75 10.75C8.164 10.75 8.5 10.4142 8.5 10C8.5 9.5858 8.164 9.25 7.75 9.25C7.336 9.25 7 9.5858 7 10C7 10.4142 7.336 10.75 7.75 10.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MagnifierAlert2;
