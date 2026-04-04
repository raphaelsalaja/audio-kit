import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Eye2({
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
          d="M1.7501 9.75C1.6739 9.75 1.59681 9.7383 1.52011 9.7139C1.12611 9.5869 0.909304 9.16461 1.0362 8.77011C1.0557 8.71001 3.0435 2.75009 9.0001 2.75009C14.9567 2.75009 16.9444 8.71011 16.964 8.77011C17.091 9.16371 16.8746 9.58499 16.4816 9.71249C16.0856 9.83949 15.6652 9.62461 15.5368 9.23151C15.4704 9.02841 13.8517 4.25009 9.0002 4.25009C4.1242 4.25009 2.48021 9.1803 2.46411 9.2301C2.36161 9.548 2.067 9.75 1.7501 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00009 12.5C10.9331 12.5 12.5001 10.933 12.5001 9C12.5001 7.067 10.9331 5.5 9.00009 5.5C7.06709 5.5 5.50009 7.067 5.50009 9C5.50009 10.933 7.06709 12.5 9.00009 12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Eye2;
