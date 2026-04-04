import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Passport({
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
          d="M2.5 3.75C2.5 2.23128 3.73069 1 5.25 1H12.75C14.2693 1 15.5 2.23128 15.5 3.75V14.25C15.5 15.7687 14.2693 17 12.75 17H5.25C3.73069 17 2.5 15.7687 2.5 14.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.5 7.5C6.5 6.11915 7.61993 5 9 5C10.3801 5 11.5 6.11915 11.5 7.5C11.5 8.88085 10.3801 10 9 10C7.61993 10 6.5 8.88085 6.5 7.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.25 12.25C6.25 11.8358 6.58579 11.5 7 11.5H11C11.4142 11.5 11.75 11.8358 11.75 12.25C11.75 12.6642 11.4142 13 11 13H7C6.58579 13 6.25 12.6642 6.25 12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Passport;
