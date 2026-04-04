import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Headphones({
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
          d="M6.20016 14.5681L4.8641 8.67916C4.26207 6.02581 6.27897 3.5 8.99979 3.5C11.7205 3.5 13.7375 6.02581 13.1355 8.67915L11.7994 14.5682C11.7706 14.6838 11.7702 14.8088 11.7971 14.9224C11.8488 15.1421 11.9949 15.3251 12.1979 15.424C12.3026 15.4753 12.4245 15.5025 12.5435 15.5H13.9142C15.2081 15.5 16.3272 14.5976 16.6022 13.3329L16.9372 11.7879C17.2025 10.5645 16.6072 9.3145 15.4889 8.75034L14.7085 8.35627C15.0766 5.01469 12.4582 2 8.99979 2C5.54133 2 2.92302 5.0147 3.29111 8.35627L2.51034 8.7505C1.39203 9.31466 0.797101 10.5645 1.06241 11.7879L1.3975 13.3333C1.67243 14.598 2.79148 15.5 4.08538 15.5H5.45608C5.57534 15.5025 5.69753 15.4751 5.80238 15.4237C6.11328 15.2717 6.28365 14.9031 6.20016 14.5681Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Headphones;
