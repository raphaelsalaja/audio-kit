import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Mug({
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
          d="M2.29335 4.09997C2.07112 3.01857 2.89628 2 4.004 2H11.996C13.1022 2 13.929 3.01805 13.7066 4.09997C13.3147 6.00517 13.208 7.68456 13.208 9C13.208 10.882 13.4263 12.534 13.7047 13.8902C13.9261 14.9697 13.1145 16 11.993 16H4.007C2.88546 16 2.07386 14.9698 2.2953 13.8903C2.57371 12.5341 2.792 10.882 2.792 9C2.792 7.68456 2.68526 6.00517 2.29335 4.09997Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.2903 10.9998C15.343 10.9782 17 9.30775 17 7.25V5.75C17 4.78379 16.2162 4 15.25 4H13.7243C13.7194 4.03324 13.7135 4.06658 13.7066 4.09997C13.6075 4.58184 13.5266 5.04926 13.4611 5.5H15.25C15.3878 5.5 15.5 5.61221 15.5 5.75V7.25C15.5 8.49279 14.4928 9.5 13.25 9.5H13.2131C13.2238 10.0192 13.2507 10.5196 13.2903 10.9998Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Mug;
