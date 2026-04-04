import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowSymbolLeft({
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
          d="M15.25 9.75H3C2.586 9.75 2.25 9.414 2.25 9C2.25 8.586 2.586 8.25 3 8.25H15.25C15.664 8.25 16 8.586 16 9C16 9.414 15.664 9.75 15.25 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.00001 14C6.69501 14 6.40801 13.812 6.29701 13.51C5.16601 10.449 2.66802 9.75399 2.56202 9.72599C2.23202 9.63799 2.00003 9.33799 2.00203 8.99699C2.00403 8.65499 2.23402 8.35699 2.56502 8.27299C2.66802 8.24599 5.166 7.551 6.296 4.49C6.439 4.102 6.86902 3.903 7.25902 4.046C7.64802 4.19 7.84601 4.621 7.70201 5.009C6.92001 7.129 5.58201 8.33699 4.52101 8.99899C5.58201 9.66099 6.91901 10.869 7.70201 12.989C7.84601 13.378 7.64702 13.809 7.25902 13.952C7.17302 13.984 7.08501 13.998 6.99901 13.998L7.00001 14Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowSymbolLeft;
