import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StackX({
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
          d="M11.75 3H6.25C4.73122 3 3.5 4.23122 3.5 5.75V12.25C3.5 13.7688 4.73122 15 6.25 15H11.75C13.2688 15 14.5 13.7688 14.5 12.25V5.75C14.5 4.23122 13.2688 3 11.75 3Z"
          fill={fill}
        />
        <path
          d="M1.25 3.5C0.8359 3.5 0.5 3.8359 0.5 4.25V13.75C0.5 14.1641 0.8359 14.5 1.25 14.5C1.6641 14.5 2 14.1641 2 13.75V4.25C2 3.8359 1.6641 3.5 1.25 3.5Z"
          fill={secondaryfill}
        />
        <path
          d="M16.75 3.5C16.3359 3.5 16 3.8359 16 4.25V13.75C16 14.1641 16.3359 14.5 16.75 14.5C17.1641 14.5 17.5 14.1641 17.5 13.75V4.25C17.5 3.8359 17.1641 3.5 16.75 3.5Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default StackX;
