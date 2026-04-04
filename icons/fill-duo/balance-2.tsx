import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Balance2({
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
          d="M1 7.75C1 7.33579 1.33579 7 1.75 7H16.25C16.6642 7 17 7.33579 17 7.75C17 8.16421 16.6642 8.5 16.25 8.5H1.75C1.33579 8.5 1 8.16421 1 7.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.86453 10.1549C8.36923 9.28103 9.62973 9.28103 10.1344 10.1549L12.9515 15.0329C13.4567 15.9078 12.8243 16.999 11.816 16.999H6.18299C5.17474 16.999 4.54218 15.9079 5.0475 15.0329L7.86453 10.1549Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 3.5C1 2.11915 2.11993 1 3.5 1C4.88007 1 6 2.11915 6 3.5C6 4.88085 4.88007 6 3.5 6C2.11993 6 1 4.88085 1 3.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M12 3.5C12 2.11915 13.1199 1 14.5 1C15.8801 1 17 2.11915 17 3.5C17 4.88085 15.8801 6 14.5 6C13.1199 6 12 4.88085 12 3.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Balance2;
