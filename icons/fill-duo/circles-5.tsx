import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Circles5({
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
          d="M3.25006 4.5C3.94042 4.5 4.50006 3.94036 4.50006 3.25C4.50006 2.55964 3.94042 2 3.25006 2C2.55971 2 2.00006 2.55964 2.00006 3.25C2.00006 3.94036 2.55971 4.5 3.25006 4.5Z"
          fill={fill}
        />
        <path
          d="M14.7501 4.5C15.4404 4.5 16.0001 3.94036 16.0001 3.25C16.0001 2.55964 15.4404 2 14.7501 2C14.0597 2 13.5001 2.55964 13.5001 3.25C13.5001 3.94036 14.0597 4.5 14.7501 4.5Z"
          fill={fill}
        />
        <path
          d="M3.25006 16C3.94042 16 4.50006 15.4404 4.50006 14.75C4.50006 14.0596 3.94042 13.5 3.25006 13.5C2.55971 13.5 2.00006 14.0596 2.00006 14.75C2.00006 15.4404 2.55971 16 3.25006 16Z"
          fill={fill}
        />
        <path
          d="M14.7501 16C15.4404 16 16.0001 15.4404 16.0001 14.75C16.0001 14.0596 15.4404 13.5 14.7501 13.5C14.0597 13.5 13.5001 14.0596 13.5001 14.75C13.5001 15.4404 14.0597 16 14.7501 16Z"
          fill={fill}
        />
        <path
          d="M9.00006 14C11.7615 14 14.0001 11.7614 14.0001 9C14.0001 6.23858 11.7615 4 9.00006 4C6.23864 4 4.00006 6.23858 4.00006 9C4.00006 11.7614 6.23864 14 9.00006 14Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Circles5;
