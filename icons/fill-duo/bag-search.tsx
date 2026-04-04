import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagSearch({
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
          d="M7.5 3C7.5 2.17121 8.17121 1.5 9 1.5C9.82879 1.5 10.5 2.17121 10.5 3V4H12V3C12 1.34279 10.6572 0 9 0C7.34279 0 6 1.34279 6 3V4H7.5V3Z"
          fill={fill}
        />
        <path
          d="M14 11C12.3432 11 11 12.3432 11 14C11 15.6568 12.3432 17 14 17C14.5563 17 15.0773 16.8485 15.524 16.5846L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L16.5846 15.524C16.8485 15.0773 17 14.5563 17 14C17 12.3432 15.6568 11 14 11ZM12.5 14C12.5 13.1716 13.1716 12.5 14 12.5C14.8284 12.5 15.5 13.1716 15.5 14C15.5 14.8284 14.8284 15.5 14 15.5C13.1716 15.5 12.5 14.8284 12.5 14Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.6675 4C14.1045 4 15.2805 5.08 15.4055 6.512L15.6939 9.82972C15.1711 9.61712 14.5992 9.5 14 9.5C11.5148 9.5 9.5 11.5148 9.5 14C9.5 15.153 9.93366 16.2047 10.6468 17.001H4.6815C3.9125 17.001 3.1735 16.676 2.6545 16.109C2.1355 15.542 1.8755 14.778 1.9425 14.012L2.5945 6.512C2.7185 5.08 3.8965 4 5.3335 4H12.6675Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default BagSearch;
