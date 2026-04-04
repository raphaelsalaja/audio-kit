import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Upload({
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
          d="M15.908 12.625L15.092 9.125C14.8 7.874 13.698 7 12.414 7H5.58799C4.30299 7 3.202 7.874 2.91 9.125L2.094 12.625C1.902 13.447 2.09399 14.298 2.61799 14.959C3.14199 15.621 3.928 16 4.772 16H13.229C14.073 16 14.859 15.621 15.383 14.959C15.908 14.298 16.1 13.447 15.908 12.625Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.5303 1.21975C9.2373 0.92675 8.76271 0.92675 8.46981 1.21975L5.46981 4.21975C5.17681 4.51275 5.17681 4.98727 5.46981 5.28017C5.76281 5.57307 6.2374 5.57317 6.5303 5.28017L8.25001 3.56057V12.5C8.25001 12.9141 8.58591 13.25 9.00001 13.25C9.41411 13.25 9.75001 12.9141 9.75001 12.5V3.56057L11.4697 5.28017C11.6162 5.42667 11.8081 5.4999 12 5.4999C12.1919 5.4999 12.3838 5.42667 12.5303 5.28017C12.8233 4.98717 12.8233 4.51265 12.5303 4.21975L9.5303 1.21975Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Upload;
