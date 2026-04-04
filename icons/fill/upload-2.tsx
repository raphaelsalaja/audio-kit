import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Upload2({
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
          d="M13.75 15.5H4.25C2.7334 15.5 1.5 14.2666 1.5 12.75V5.25C1.5 3.7334 2.7334 2.5 4.25 2.5H4.7578C5.1719 2.5 5.5078 2.8359 5.5078 3.25C5.5078 3.6641 5.1719 4 4.7578 4H4.25C3.5605 4 3 4.5605 3 5.25V12.75C3 13.4395 3.5605 14 4.25 14H13.75C14.4395 14 15 13.4395 15 12.75V5.25C15 4.5605 14.4395 4 13.75 4H13.2422C12.8281 4 12.4922 3.6641 12.4922 3.25C12.4922 2.8359 12.8281 2.5 13.2422 2.5H13.75C15.2666 2.5 16.5 3.7334 16.5 5.25V12.75C16.5 14.2666 15.2666 15.5 13.75 15.5Z"
          fill={fill}
        />
        <path
          d="M12.5303 5.71975L9.53025 2.71975C9.23725 2.42675 8.76265 2.42675 8.46975 2.71975L5.46975 5.71975C5.17675 6.01275 5.17675 6.48727 5.46975 6.78017C5.76275 7.07307 6.23735 7.07317 6.53025 6.78017L8.24995 5.06057V11.75C8.24995 12.1641 8.58585 12.5 8.99995 12.5C9.41405 12.5 9.74995 12.1641 9.74995 11.75V5.06057L11.4696 6.78017C11.6161 6.92667 11.808 6.9999 11.9999 6.9999C12.1918 6.9999 12.3838 6.92667 12.5303 6.78017C12.8233 6.48717 12.8233 6.01265 12.5303 5.71975Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Upload2;
