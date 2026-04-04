import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudDownload({
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
          d="M14.146 6.32703C13.704 3.86403 11.535 2 9 2C6.105 2 3.75 4.355 3.75 7.25C3.75 7.378 3.755 7.50801 3.767 7.64001C2.163 8.07101 1 9.525 1 11.25C1 13.318 2.682 15 4.75 15H12.5C14.981 15 17 12.981 17 10.5C17 8.646 15.85 6.99703 14.146 6.32703Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.78 10.031L9.52999 12.281C9.38399 12.427 9.19199 12.501 8.99999 12.501C8.80799 12.501 8.61599 12.428 8.46999 12.281L6.21999 10.031C5.92699 9.73801 5.92699 9.26297 6.21999 8.96997C6.51299 8.67697 6.98799 8.67697 7.28099 8.96997L8.25099 9.94V6.75098C8.25099 6.33698 8.58699 6.00098 9.00099 6.00098C9.41499 6.00098 9.75099 6.33698 9.75099 6.75098V9.94L10.721 8.96997C11.014 8.67697 11.489 8.67697 11.782 8.96997C12.075 9.26297 12.075 9.73801 11.782 10.031H11.78Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CloudDownload;
