import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceMustache({
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
          d="M9 17.0007C4.5889 17.0007 1 13.4118 1 9.0007C1 4.5896 4.5889 1.0007 9 1.0007C13.4111 1.0007 17 4.5896 17 9.0007C17 13.4118 13.4111 17.0007 9 17.0007Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6 10.0007C6.5523 10.0007 7 9.553 7 9.0007C7 8.4484 6.5523 8.0007 6 8.0007C5.4477 8.0007 5 8.4484 5 9.0007C5 9.553 5.4477 10.0007 6 10.0007Z"
          fill={fill}
        />
        <path
          d="M12 10.0007C12.5523 10.0007 13 9.553 13 9.0007C13 8.4484 12.5523 8.0007 12 8.0007C11.4477 8.0007 11 8.4484 11 9.0007C11 9.553 11.4477 10.0007 12 10.0007Z"
          fill={fill}
        />
        <path
          d="M10.475 10.6147C10.001 10.4337 9.34001 10.4827 9.00001 11.0687C8.66001 10.4827 7.99901 10.4337 7.52501 10.6147C6.58101 10.9747 5.89501 12.1177 4.91201 11.9887C4.70901 11.9617 4.54701 12.1587 4.64001 12.3407C5.16001 13.3637 6.19101 13.6027 6.76801 13.6027C7.43001 13.6027 8.39901 13.1777 8.99901 12.2257C9.59901 13.1787 10.568 13.6027 11.23 13.6027C11.807 13.6027 12.838 13.3637 13.358 12.3407C13.451 12.1587 13.288 11.9617 13.086 11.9887C12.104 12.1187 11.417 10.9747 10.473 10.6147H10.475Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceMustache;
