import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitDiamonds({
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
          d="M12.195 5.03301C11.242 3.87401 10.386 2.64301 9.649 1.37301C9.381 0.910007 8.62 0.910007 8.352 1.37301C7.615 2.64301 6.758 3.87301 5.806 5.03201C4.814 6.23801 3.704 7.38301 2.505 8.43601C2.343 8.57901 2.25 8.78401 2.25 8.99901C2.25 9.21401 2.343 9.42001 2.505 9.56201C3.704 10.615 4.814 11.76 5.805 12.965C6.758 14.124 7.614 15.355 8.351 16.625C8.485 16.856 8.732 16.999 8.999 16.999C9.266 16.999 9.514 16.857 9.647 16.625C10.384 15.355 11.241 14.125 12.193 12.966C13.185 11.76 14.295 10.615 15.494 9.56201C15.656 9.41901 15.749 9.21401 15.749 8.99901C15.749 8.78401 15.656 8.57801 15.494 8.43601C14.295 7.38301 13.186 6.23801 12.195 5.03301Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default SuitDiamonds;
