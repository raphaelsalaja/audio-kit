import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Folders({
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
          d="M7.45003 3L6.24327 1.71218C5.8179 1.25835 5.22393 1 4.601 1H3.25C2.00779 1 1 2.00779 1 3.25V8.75C1 9.99221 2.00779 11 3.25 11H10.75C11.9922 11 13 9.99221 13 8.75V5.25C13 4.00779 11.9922 3 10.75 3H7.45003Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.45 9L10.2433 7.71218C9.8179 7.25835 9.22393 7 8.601 7H7.25C6.00779 7 5 8.00779 5 9.25V14.75C5 15.9922 6.00779 17 7.25 17H14.75C15.9922 17 17 15.9922 17 14.75V11.25C17 10.0078 15.9922 9 14.75 9H11.45Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Folders;
