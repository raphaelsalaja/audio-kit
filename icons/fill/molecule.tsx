import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Molecule({
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
          d="M5.06007 4.32874C5.37667 4.06165 5.84985 4.10178 6.11694 4.41838L7.80184 6.41558C8.06893 6.73218 8.0288 7.20535 7.7122 7.47245C7.3956 7.73954 6.92243 7.69941 6.65533 7.38281L4.97043 5.38561C4.70334 5.06901 4.74348 4.59583 5.06007 4.32874Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.5289 10.2704C10.7938 9.95196 11.2667 9.90849 11.5851 10.1733L13.6027 11.8512C13.9212 12.1161 13.9647 12.589 13.6998 12.9074C13.435 13.2259 12.9621 13.2694 12.6436 13.0045L10.626 11.3266C10.3075 11.0618 10.2641 10.5889 10.5289 10.2704Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.7263 10.5521C8.04658 10.8147 8.09329 11.2873 7.83062 11.6076L6.17851 13.6221C5.91585 13.9424 5.44328 13.9891 5.123 13.7264C4.80272 13.4637 4.75601 12.9912 5.01867 12.6709L6.67078 10.6564C6.93345 10.3361 7.40602 10.2894 7.7263 10.5521Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.5 9C5.5 7.06699 7.06699 5.5 9 5.5C10.933 5.5 12.5 7.06699 12.5 9C12.5 10.933 10.933 12.5 9 12.5C7.06699 12.5 5.5 10.933 5.5 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.5 5.5C14.3284 5.5 15 4.8284 15 4C15 3.1716 14.3284 2.5 13.5 2.5C12.6716 2.5 12 3.1716 12 4C12 4.8284 12.6716 5.5 13.5 5.5Z"
          fill={secondaryfill}
        />
        <path
          d="M12.25 13.5C12.25 12.2574 13.2574 11.25 14.5 11.25C15.7426 11.25 16.75 12.2574 16.75 13.5C16.75 14.7426 15.7426 15.75 14.5 15.75C13.2574 15.75 12.25 14.7426 12.25 13.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.25 14.5C2.25 13.2574 3.25736 12.25 4.5 12.25C5.74264 12.25 6.75 13.2574 6.75 14.5C6.75 15.7426 5.74264 16.75 4.5 16.75C3.25736 16.75 2.25 15.7426 2.25 14.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.25 3.5C2.25 2.25736 3.25736 1.25 4.5 1.25C5.74264 1.25 6.75 2.25736 6.75 3.5C6.75 4.74264 5.74264 5.75 4.5 5.75C3.25736 5.75 2.25 4.74264 2.25 3.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Molecule;
