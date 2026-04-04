import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pins({
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
          d="M1 8.6293C1 5.23022 3.81382 2.5 7.25 2.5C10.6862 2.5 13.5 5.23022 13.5 8.6293C13.5 10.8986 12.3657 12.8621 11.1052 14.2823C10.4699 14.9981 9.78616 15.5952 9.15993 16.0461C8.54605 16.4881 7.94502 16.8203 7.47134 16.9666C7.32714 17.0111 7.17286 17.0111 7.02866 16.9666C6.55498 16.8203 5.95395 16.4881 5.34007 16.0461C4.71384 15.5952 4.03009 14.9981 3.39479 14.2823C2.1343 12.8621 1 10.8986 1 8.6293Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.75 8.75C4.75 7.36993 5.86915 6.25 7.25 6.25C8.63085 6.25 9.75 7.36993 9.75 8.75C9.75 10.1301 8.63085 11.25 7.25 11.25C5.86915 11.25 4.75 10.1301 4.75 8.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.58795 2.64112C11.3875 3.24103 13.5 5.68408 13.5 8.6293C13.5 10.2846 12.8965 11.7772 12.0807 13.0149C12.1049 13.0106 12.1289 13.0048 12.1526 12.9975C12.5338 12.8797 13.0175 12.6124 13.5116 12.2567C14.0155 11.8938 14.5658 11.4133 15.0771 10.8372C16.0915 9.69427 17.0043 8.11411 17.0043 6.28781C17.0043 3.55232 14.7398 1.3551 11.9745 1.3551C10.6736 1.3551 9.48356 1.84134 8.58795 2.64112Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Pins;
