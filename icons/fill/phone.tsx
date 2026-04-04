import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Phone({
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
          d="M15.6 11.4946L12.674 10.1956C11.961 9.87858 11.123 10.0816 10.634 10.6896L9.39951 11.8784C8.09251 11.0244 6.97651 9.90744 6.12251 8.59844L7.32613 7.36908C7.93513 6.88108 8.13913 6.04208 7.82313 5.32908L6.52313 2.40108C6.18013 1.62908 5.33814 1.22308 4.51914 1.43408L2.54451 1.94844C1.69851 2.16844 1.15151 2.98844 1.27151 3.85544C2.20551 10.5044 7.50051 15.8004 14.1515 16.7344C14.2315 16.7454 14.3095 16.7504 14.3875 16.7504C15.1615 16.7504 15.8555 16.2284 16.0565 15.4604L16.566 13.4966C16.777 12.6796 16.371 11.8376 15.6 11.4946Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Phone;
