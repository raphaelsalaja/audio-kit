import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pencil2({
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
          d="M9 1C9.25924 1 9.5001 1.13388 9.63696 1.35405L15.387 10.604C15.4608 10.7229 15.5 10.8601 15.5 11V16.25C15.5 16.6642 15.1642 17 14.75 17H3.25C2.83579 17 2.5 16.6642 2.5 16.25V11C2.5 10.8601 2.53915 10.7229 2.61304 10.604L8.36304 1.35405C8.4999 1.13388 8.74076 1 9 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.25 11.5845C5.60912 10.7717 4.61557 10.25 3.5 10.25C3.39247 10.25 3.28707 10.2551 3.18621 10.2637C2.79813 10.2968 2.5 10.6215 2.5 11.011V16.25C2.5 16.6642 2.83579 17 3.25 17H14.75C15.1642 17 15.5 16.6642 15.5 16.25V11.011C15.5 10.6215 15.2019 10.2968 14.8138 10.2637C14.7129 10.2551 14.6075 10.25 14.5 10.25C13.3844 10.25 12.3909 10.7717 11.75 11.5845C11.1091 10.7717 10.1156 10.25 9 10.25C7.88443 10.25 6.89088 10.7717 6.25 11.5845Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.63695 1.35405C9.50009 1.13388 9.25923 1 9 1C8.74076 1 8.4999 1.13388 8.36304 1.35405L6.09662 5H11.9033L9.63695 1.35405Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Pencil2;
