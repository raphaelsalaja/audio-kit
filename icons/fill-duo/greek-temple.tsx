import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GreekTemple({
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
          d="M9.85506 1.36841C9.32413 1.07151 8.67672 1.07083 8.1455 1.36865L2.89448 4.30964C2.3408 4.61978 2 5.20455 2 5.837V6.251C2 7.21721 2.78393 8.001 3.75014 8.001L14.25 8C15.2162 8 16 7.21621 16 6.25V5.836C16 5.2024 15.6573 4.61869 15.1064 4.30916L9.85506 1.36841ZM10 4.75C10 5.302 9.552 5.75 9 5.75C8.448 5.75 8 5.302 8 4.75C8 4.198 8.448 3.75 9 3.75C9.552 3.75 10 4.198 10 4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.25 9.5C7.66421 9.5 8 9.83579 8 10.25V14.5H10V10.25C10 9.83579 10.3358 9.5 10.75 9.5C11.1642 9.5 11.5 9.83579 11.5 10.25V14.5H13.5V10.25C13.5 9.83579 13.8358 9.5 14.25 9.5C14.6642 9.5 15 9.83579 15 10.25V14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H14.25H10.75H7.25H3.75H2.75C2.33579 16 2 15.6642 2 15.25C2 14.8358 2.33579 14.5 2.75 14.5H3V10.25C3 9.83579 3.33579 9.5 3.75 9.5C4.16421 9.5 4.5 9.83579 4.5 10.25V14.5H6.5V10.25C6.5 9.83579 6.83579 9.5 7.25 9.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default GreekTemple;
