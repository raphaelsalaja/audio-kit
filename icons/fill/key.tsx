import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Key({
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
          d="M15.7706 2.21011C15.958 2.39083 16.0383 2.65582 15.9827 2.91018L15.4753 5.23118C15.4446 5.37138 15.3744 5.49985 15.2729 5.60133L14.3439 6.53033C14.2033 6.67098 14.0125 6.75 13.8136 6.75H12.4926V8.0715C12.4926 8.27044 12.4136 8.46122 12.2729 8.60188L10.7239 10.1506C10.9026 10.6504 11 11.1888 11 11.75C11 13.7048 9.81912 15.3839 8.13173 16.1127C7.5545 16.3622 6.91808 16.5004 6.24958 16.5004C3.62747 16.5004 1.49915 14.3735 1.49915 11.75C1.49915 9.12655 3.62747 6.99957 6.24958 6.99957C6.84985 6.99957 7.42424 7.11104 7.95314 7.31442L12.4697 2.79806C12.5646 2.70314 12.6833 2.63544 12.8133 2.60202L15.0633 2.02362C15.3154 1.95879 15.5832 2.02939 15.7706 2.21011ZM6.53038 13.2376C7.01855 12.7494 7.0183 11.9576 6.53038 11.4696C6.04245 10.9817 5.25063 10.9815 4.76245 11.4696C4.27428 11.9578 4.27453 12.7496 4.76245 13.2376C5.25038 13.7255 6.0422 13.7257 6.53038 13.2376Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Key;
