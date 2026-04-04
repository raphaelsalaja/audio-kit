import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Copies2({
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
          d="M12.2501 2.5H5.75012C5.33602 2.5 5.00012 2.1641 5.00012 1.75C5.00012 1.3359 5.33602 1 5.75012 1H12.2501C12.6642 1 13.0001 1.3359 13.0001 1.75C13.0001 2.1641 12.6642 2.5 12.2501 2.5Z"
          fill={fill}
        />
        <path
          d="M13.7501 5.5H4.25012C3.83602 5.5 3.50012 5.1641 3.50012 4.75C3.50012 4.3359 3.83602 4 4.25012 4H13.7501C14.1642 4 14.5001 4.3359 14.5001 4.75C14.5001 5.1641 14.1642 5.5 13.7501 5.5Z"
          fill={fill}
        />
        <path
          d="M14.2501 7H3.75012C2.78362 7 2.00012 7.7835 2.00012 8.75V14.25C2.00012 15.2165 2.78362 16 3.75012 16H14.2501C15.2166 16 16.0001 15.2165 16.0001 14.25V8.75C16.0001 7.7835 15.2166 7 14.2501 7Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Copies2;
