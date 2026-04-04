import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridSearch({
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
          d="M15.5603 14.5415C15.8336 14.0896 16.0001 13.5657 16.0001 13C16.0001 11.3457 14.6544 10 13.0001 10C11.3458 10 10.0001 11.3457 10.0001 13C10.0001 14.6543 11.3458 16 13.0001 16C13.5437 16 14.0471 15.8435 14.4873 15.5898L15.6779 16.7802C15.8244 16.9267 16.0163 16.9999 16.2082 16.9999C16.4001 16.9999 16.592 16.9267 16.7385 16.7802C17.0315 16.4872 17.0315 16.0126 16.7385 15.7197L15.5603 14.5415ZM11.5001 13C11.5001 12.1729 12.173 11.5 13.0001 11.5C13.8272 11.5 14.5001 12.1729 14.5001 13C14.5001 13.8271 13.8272 14.5 13.0001 14.5C12.173 14.5 11.5001 13.8271 11.5001 13Z"
          fill={fill}
        />
        <path
          d="M6.25012 2H3.75012C2.78362 2 2.00012 2.7835 2.00012 3.75V6.25C2.00012 7.2165 2.78362 8 3.75012 8H6.25012C7.21662 8 8.00012 7.2165 8.00012 6.25V3.75C8.00012 2.7835 7.21662 2 6.25012 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.2501 2H11.7501C10.7836 2 10.0001 2.7835 10.0001 3.75V6.25C10.0001 7.2165 10.7836 8 11.7501 8H14.2501C15.2166 8 16.0001 7.2165 16.0001 6.25V3.75C16.0001 2.7835 15.2166 2 14.2501 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.25012 10H3.75012C2.78362 10 2.00012 10.7835 2.00012 11.75V14.25C2.00012 15.2165 2.78362 16 3.75012 16H6.25012C7.21662 16 8.00012 15.2165 8.00012 14.25V11.75C8.00012 10.7835 7.21662 10 6.25012 10Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default GridSearch;
