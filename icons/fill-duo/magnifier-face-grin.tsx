import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagnifierFaceGrin({
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
          d="M1.5 7.75C1.5 4.29829 4.29829 1.5 7.75 1.5C11.2017 1.5 14 4.29829 14 7.75C14 11.2017 11.2017 14 7.75 14C4.29829 14 1.5 11.2017 1.5 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.6073 12.668L15.2197 16.2803C15.5125 16.5732 15.9874 16.5732 16.2803 16.2803C16.5732 15.9874 16.5732 15.5126 16.2803 15.2197L12.668 11.6073C12.3581 12.0018 12.0018 12.3581 11.6073 12.668Z"
          fill={fill}
        />
        <path
          d="M5.5 8C6.052 8 6.5 7.5523 6.5 7C6.5 6.4477 6.052 6 5.5 6C4.948 6 4.5 6.4477 4.5 7C4.5 7.5523 4.948 8 5.5 8Z"
          fill={fill}
        />
        <path
          d="M10 8C10.552 8 11 7.5523 11 7C11 6.4477 10.552 6 10 6C9.448 6 9 6.4477 9 7C9 7.5523 9.448 8 10 8Z"
          fill={fill}
        />
        <path
          d="M6.58334 8.5H8.91663C9.23863 8.5 9.49994 8.7613 9.49994 9.0833C9.49994 10.0493 8.71594 10.8333 7.74994 10.8333C6.78394 10.8333 5.99994 10.0493 5.99994 9.0833C5.99994 8.7613 6.26134 8.5 6.58334 8.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MagnifierFaceGrin;
