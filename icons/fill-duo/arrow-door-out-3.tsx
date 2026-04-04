import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDoorOut3({
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
          d="M2.5 14.75V3.25C2.5 2.2852 3.2852 1.5 4.25 1.5H10.75C11.7148 1.5 12.5 2.2852 12.5 3.25V14.75C12.5 15.7148 11.7148 16.5 10.75 16.5H4.25C3.2852 16.5 2.5 15.7148 2.5 14.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.00099 5.55711V12.4438C8.00099 13.0527 7.69239 13.6084 7.17389 13.9311L3.40099 16.2705C2.86639 15.9707 2.50009 15.4053 2.50009 14.75V3.25001C2.50009 2.59521 2.86609 2.02981 3.40019 1.73001L7.17389 4.0694C7.69149 4.3907 8.00099 4.94671 8.00099 5.55711Z"
          fill={fill}
        />
        <path
          d="M17.78 8.46999L15.03 5.71999C14.737 5.42699 14.262 5.42699 13.969 5.71999C13.676 6.01299 13.676 6.48799 13.969 6.78099L15.439 8.25099H11.25C10.836 8.25099 10.5 8.58699 10.5 9.00099C10.5 9.41499 10.836 9.75099 11.25 9.75099H15.439L13.969 11.221C13.676 11.514 13.676 11.989 13.969 12.282C14.115 12.428 14.307 12.502 14.499 12.502C14.691 12.502 14.883 12.429 15.029 12.282L17.779 9.53199C18.072 9.23899 18.072 8.76399 17.779 8.47099L17.78 8.46999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowDoorOut3;
