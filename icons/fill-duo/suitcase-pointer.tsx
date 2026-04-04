import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcasePointer({
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
          d="M7 2.25C7 2.11221 7.11221 2 7.25 2H10.75C10.8878 2 11 2.11221 11 2.25V4H12.5V2.25C12.5 1.28379 11.7162 0.5 10.75 0.5H7.25C6.28379 0.5 5.5 1.28379 5.5 2.25V4H7V2.25Z"
          fill={fill}
        />
        <path
          d="M13.2012 18.0003C12.7705 18.0003 12.3838 17.7317 12.2344 17.3255L10.0645 11.3841C9.92478 11.0032 10.0156 10.5892 10.3028 10.3021C10.5899 10.0159 11.002 9.92514 11.3848 10.0638L17.3252 12.2337C17.7393 12.3851 18.0098 12.7825 18.001 13.223C17.9912 13.6625 17.7031 14.0482 17.2852 14.182L14.9346 14.934L14.1817 17.2846C14.0489 17.7026 13.6631 17.9907 13.2237 18.0004L13.2012 18.0003Z"
          fill={fill}
        />
        <path
          d="M1 6.75C1 5.23203 2.23054 4 3.75 4H14.25C15.7695 4 17 5.23203 17 6.75V10.518L11.8958 8.65356C10.9787 8.32126 9.93261 8.55099 9.24231 9.2413C8.55025 9.93312 8.31951 10.982 8.65621 11.9006L10.1534 16H3.75C2.23054 16 1 14.768 1 13.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default SuitcasePointer;
