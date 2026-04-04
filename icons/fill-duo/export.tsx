import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Export({
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
          d="M12.75 6.5H5.25C3.733 6.5 2.5 7.733 2.5 9.25V14.25C2.5 15.767 3.733 17 5.25 17H12.75C14.267 17 15.5 15.767 15.5 14.25V9.25C15.5 7.733 14.267 6.5 12.75 6.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.5303 3.71975L9.5303 0.71975C9.2373 0.42675 8.76271 0.42675 8.46981 0.71975L5.46981 3.71975C5.17681 4.01275 5.17681 4.48734 5.46981 4.78024C5.76281 5.07314 6.2374 5.07324 6.5303 4.78024L8.25001 3.06051V12C8.25001 12.4141 8.58591 12.75 9.00001 12.75C9.41411 12.75 9.75001 12.4141 9.75001 12V3.06051L11.4697 4.78024C11.6162 4.92674 11.8081 4.9999 12 4.9999C12.1919 4.9999 12.3838 4.92674 12.5303 4.78024C12.8233 4.48724 12.8233 4.01265 12.5303 3.71975Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Export;
