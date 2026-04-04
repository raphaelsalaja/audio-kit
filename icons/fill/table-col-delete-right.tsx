import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableColDeleteRight({
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
          d="M13.28 6.46997C13.134 6.31997 12.942 6.25 12.75 6.25C12.558 6.25 12.366 6.31987 12.22 6.46997C11.927 6.75997 11.927 7.24005 12.22 7.53015L13.69 9.00012L12.22 10.4701C11.927 10.7601 11.927 11.2401 12.22 11.5302C12.513 11.8201 12.988 11.8201 13.281 11.5302L14.751 10.0602L16.221 11.5302C16.514 11.8201 16.989 11.8201 17.282 11.5302C17.575 11.2402 17.575 10.7602 17.282 10.4701L15.812 9.00012L17.282 7.53015C17.575 7.24015 17.575 6.76007 17.282 6.46997C17.136 6.31997 16.944 6.25 16.752 6.25C16.56 6.25 16.368 6.31987 16.222 6.46997L14.752 7.93994L13.282 6.46997H13.28Z"
          fill={secondaryfill}
        />
        <path
          d="M4.75 16H13C14.5166 16 15.75 14.7666 15.75 13.25C15.75 12.8359 15.4141 12.5 15 12.5C14.5859 12.5 14.25 12.8359 14.25 13.25C14.25 13.9395 13.6895 14.5 13 14.5H9V3.5H13C13.6895 3.5 14.25 4.0605 14.25 4.75C14.25 5.1641 14.5859 5.5 15 5.5C15.4141 5.5 15.75 5.1641 15.75 4.75C15.75 3.2334 14.5166 2 13 2H4.75C3.2334 2 2 3.2334 2 4.75V13.25C2 14.7666 3.2334 16 4.75 16Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableColDeleteRight;
