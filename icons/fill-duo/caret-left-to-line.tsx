import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretLeftToLine({
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
          d="M2.75 2.5C2.336 2.5 2 2.836 2 3.25V14.75C2 15.164 2.336 15.5 2.75 15.5C3.164 15.5 3.5 15.164 3.5 14.75V3.25C3.5 2.836 3.164 2.5 2.75 2.5Z"
          fill={fill}
        />
        <path
          d="M15.093 2.78496C14.534 2.47696 13.853 2.49799 13.314 2.84099L5.92997 7.52196C5.42097 7.84496 5.11798 8.39698 5.11798 8.99998C5.11798 9.60298 5.42197 10.155 5.92997 10.478L13.313 15.16C13.598 15.341 13.923 15.432 14.25 15.432C14.54 15.432 14.83 15.36 15.093 15.216C15.653 14.908 16 14.32 16 13.682V4.31798C16 3.67998 15.652 3.09296 15.093 2.78496Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default CaretLeftToLine;
