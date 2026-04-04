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
          d="M11.1083 11.1083C11.4012 10.8154 11.876 10.8154 12.1689 11.1083L16.2803 15.2197C16.5732 15.5126 16.5732 15.9874 16.2803 16.2803C15.9874 16.5732 15.5126 16.5732 15.2197 16.2803L11.1083 12.1689C10.8154 11.876 10.8154 11.4012 11.1083 11.1083Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 7.75C1.5 4.29829 4.29829 1.5 7.75 1.5C11.2017 1.5 14 4.29829 14 7.75C14 11.2017 11.2017 14 7.75 14C4.29829 14 1.5 11.2017 1.5 7.75ZM7.75 4.75C8.16421 4.75 8.5 5.08579 8.5 5.5V7.5C8.5 7.91421 8.16421 8.25 7.75 8.25C7.33579 8.25 7 7.91421 7 7.5V5.5C7 5.08579 7.33579 4.75 7.75 4.75ZM8.5 10C8.5 10.4142 8.164 10.75 7.75 10.75C7.336 10.75 7 10.4142 7 10C7 9.5858 7.336 9.25 7.75 9.25C8.164 9.25 8.5 9.5858 8.5 10Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MagnifierAlert2;
