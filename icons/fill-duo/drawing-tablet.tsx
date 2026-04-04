import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DrawingTablet({
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
          d="M4 5.75C4 5.33579 4.33579 5 4.75 5H13.25C13.6642 5 14 5.33579 14 5.75V12.25C14 12.6642 13.6642 13 13.25 13H4.75C4.33579 13 4 12.6642 4 12.25V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.2"
          fillRule="evenodd"
        />
        <path
          d="M1 4.75C1 3.23069 2.23128 2 3.75 2H14.25C15.7687 2 17 3.23069 17 4.75V13.25C17 14.7693 15.7687 16 14.25 16H3.75C2.23128 16 1 14.7693 1 13.25V4.75ZM4.75 5C4.33579 5 4 5.33579 4 5.75V12.25C4 12.6642 4.33579 13 4.75 13H13.25C13.6642 13 14 12.6642 14 12.25V5.75C14 5.33579 13.6642 5 13.25 5H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M17.3526 1.70396C16.6556 1.00696 15.5196 1.00696 14.8226 1.70396L10.0422 6.48438C9.24221 7.28438 9.18621 9.26938 9.18221 9.49338C9.18121 9.59538 9.22021 9.69338 9.29221 9.76438C9.36413 9.8363 9.46202 9.87438 9.56321 9.87438C9.78721 9.87038 11.7712 9.81438 12.5722 9.01438L17.3526 4.23396C18.0506 3.53596 18.0506 2.40096 17.3526 1.70396Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DrawingTablet;
