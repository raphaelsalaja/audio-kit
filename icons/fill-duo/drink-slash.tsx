import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DrinkSlash({
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
          d="M11.6819 6.31809C11.4635 6.22429 11.2371 6.14599 11 6.09369V3.49989H7V6.09369C5.2852 6.47069 4 7.99409 4 9.82219V13.9999L11.6819 6.31809Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.36869 16.813C4.68869 17.228 5.18539 17.5 5.74999 17.5H12.25C13.2165 17.5 14 16.7166 14 15.75V9.8223C14 9.0696 13.7732 8.375 13.3972 7.7845L4.36869 16.813Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.5 0.5H8.5C7.6716 0.5 7 1.1716 7 2V3.5H11V2C11 1.1716 10.3284 0.5 9.5 0.5Z"
          fill={fill}
        />
        <path
          d="M6.68161 14.5H9.25001C9.66421 14.5 10 14.1641 10 13.75V11.1816L6.68161 14.5Z"
          fill={fill}
        />
        <path d="M8 10H4V14L8 10Z" fill={fill} />
        <path
          d="M1.99999 16.75C1.80809 16.75 1.61619 16.6768 1.46969 16.5303C1.17669 16.2373 1.17669 15.7627 1.46969 15.4698L15.4697 1.4697C15.7627 1.1767 16.2373 1.1767 16.5302 1.4697C16.8231 1.7627 16.8232 2.2373 16.5302 2.5302L2.53029 16.5303C2.38379 16.6768 2.19189 16.75 1.99999 16.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DrinkSlash;
