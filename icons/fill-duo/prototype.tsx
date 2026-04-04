import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Prototype({
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
          d="M14.2197 5.96967C14.5126 5.67678 14.9874 5.67678 15.2803 5.96967L17.7803 8.46967C18.0732 8.76256 18.0732 9.23744 17.7803 9.53033L15.2803 12.0303C14.9874 12.3232 14.5126 12.3232 14.2197 12.0303C13.9268 11.7374 13.9268 11.2626 14.2197 10.9697L15.4393 9.75H12.6355C12.3169 10.764 11.3694 11.5 10.25 11.5C8.86915 11.5 7.75 10.3801 7.75 9C7.75 7.61993 8.86915 6.5 10.25 6.5C11.3694 6.5 12.3169 7.23603 12.6355 8.25H15.4393L14.2197 7.03033C13.9268 6.73744 13.9268 6.26256 14.2197 5.96967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3.75 1C2.78379 1 2 1.78379 2 2.75V15.25C2 16.2162 2.78379 17 3.75 17H9.25C10.2162 17 11 16.2162 11 15.25V12.9298C10.7571 12.9759 10.5064 13 10.25 13C8.04042 13 6.25 11.2082 6.25 9C6.25 6.7918 8.04042 5 10.25 5C10.5064 5 10.7571 5.02411 11 5.07017V2.75C11 1.78379 10.2162 1 9.25 1H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Prototype;
