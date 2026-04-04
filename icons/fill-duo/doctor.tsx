import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Doctor({
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
          d="M8.55648 2.3952C8.82047 2.2016 9.17953 2.2016 9.44352 2.3952L13.1935 5.1452C13.3862 5.28648 13.5 5.51109 13.5 5.75V6.5C13.5 8.98521 11.4852 11 9 11C6.51479 11 4.5 8.98521 4.5 6.5V5.75C4.5 5.51109 4.61382 5.28648 4.80648 5.1452L8.55648 2.3952Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.99999 12C6.58699 12 4.32799 13.078 2.79999 14.957C2.49399 15.333 2.43499 15.84 2.64399 16.28C2.85599 16.724 3.29099 17 3.78099 17H14.219C14.709 17 15.144 16.724 15.356 16.28C15.565 15.84 15.506 15.333 15.2 14.957C13.672 13.078 11.412 12 8.99999 12Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.5 2.24999V5.5C4.5 5.69081 4.50001 6.06342 4.50001 6.06342L5.60287 5.41179C7.88232 4.19639 10.1177 4.19639 12.3971 5.41179L13.5 6C13.5 6 13.5 5.69081 13.5 5.5V2.24999C13.5 1.97298 13.3473 1.71852 13.1029 1.58819C10.3823 0.137596 7.61768 0.137596 4.89713 1.58819C4.65269 1.71852 4.5 1.97298 4.5 2.24999Z"
          fill={fill}
        />
        <path
          d="M9.75 15.5H11.75C12.164 15.5 12.5 15.164 12.5 14.75C12.5 14.336 12.164 14 11.75 14H9.75C9.336 14 9 14.336 9 14.75C9 15.164 9.336 15.5 9.75 15.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Doctor;
