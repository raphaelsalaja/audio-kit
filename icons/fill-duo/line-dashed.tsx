import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LineDashed({
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
          d="M2.00098 9C2.00098 8.58579 2.33676 8.25 2.75098 8.25H4.75098C5.16519 8.25 5.50098 8.58579 5.50098 9C5.50098 9.41421 5.16519 9.75 4.75098 9.75H2.75098C2.33676 9.75 2.00098 9.41421 2.00098 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.25098 9C7.25098 8.58579 7.58676 8.25 8.00098 8.25H10.001C10.4152 8.25 10.751 8.58579 10.751 9C10.751 9.41421 10.4152 9.75 10.001 9.75H8.00098C7.58676 9.75 7.25098 9.41421 7.25098 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M12.501 9C12.501 8.58579 12.8368 8.25 13.251 8.25H15.251C15.6652 8.25 16.001 8.58579 16.001 9C16.001 9.41421 15.6652 9.75 15.251 9.75H13.251C12.8368 9.75 12.501 9.41421 12.501 9Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default LineDashed;
